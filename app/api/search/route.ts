import { NextRequest, NextResponse } from "next/server";
import {connect} from "@/dbConfig/dbConfig";
import mongoose from "mongoose";
const { MongoClient } = require("mongodb");

const uri = "mongodb+srv://admin123:admin123@cluster0.psewfip.mongodb.net/FreeProjectsDb"
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

export async function POST(request: NextRequest) {
  console.log("Called");
  try {

    const body = await request.json();
    console.log("Request Body:", body);

    const technologyArray = body.technologies || [];
 
    console.log("Technology Array:", technologyArray.length);
    
    
    await client.connect();

    // Access the projects collection
    const collection = client.db("FreeProjectsDb").collection("projects");

    // Find all documents in the collection
    const cursor = collection.find();

    // Array to store documents with matching score
    let matchedProjects:any = [];

    if(technologyArray.length > 0){
      // Iterate over the cursor and process each document
    await cursor.forEach((document: any) => {
      // Process each document here
      const stackUsed = document.stackUsed || [];
     
      
      const universityOrCollegeName = document.universityOrCollegeName || '';
  
      // Concatenate stackUsed and universityOrCollegeName only if universityOrCollegeName is defined
      const finalArray = universityOrCollegeName ? stackUsed.concat(universityOrCollegeName) : stackUsed;
  
      // Check if the project includes any of the requested technologies
      const matchedTechnologyCount = finalArray.filter((tech: string) => technologyArray.includes(tech)).length;
  
      // Calculate the score as a percentage
      const totalTechnologies = technologyArray.length;
      const scorePercentage = totalTechnologies > 0 ? (matchedTechnologyCount / totalTechnologies) * 100 : 0;
  
      if(scorePercentage > 0){
        matchedProjects.push({document, scorePercentage});
      }
      
  });
  
  // Sort the arrays based on the matching score in descending order
  matchedProjects.sort((a, b) => b.scorePercentage - a.scorePercentage);

  }else{

    await cursor.forEach((document: any) => {
      matchedProjects.push({document, scorePercentage: 100});
    });
  }
  

    return NextResponse.json({
      status: 200,
      matchedProjects: matchedProjects,
    });

  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json({
      status: 500,
      error: "Internal server error. Please try again later.",
    });
  } finally {
    // Close the MongoDB connection
    await client.close();
  }
}
