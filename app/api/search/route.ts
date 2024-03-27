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

    // Extract the technologies from the request body, or use a dummy array if not provided
    const technologyArray = body.technologies || ['HTML', 'CSS', 'JavaScript'];

    console.log("Technology Array:", technologyArray);

    // Connect to the MongoDB Atlas cluster
    await client.connect();

    // Access the projects collection
    const collection = client.db("YourDatabaseName").collection("projects");

    // Find all documents in the collection
    const cursor = collection.find();

    // Array to store documents with matching score
    let matchedProjects = [];

    // Iterate over the cursor and process each document
    await cursor.forEach((document) => {
      // Process each document here
      const projectTechnologies = document.technologies;

      // Check if the project includes any of the requested technologies
      const matchedTechnologyCount = projectTechnologies.filter((tech:any) => technologyArray.includes(tech)).length;

      // Calculate the score as a percentage
      const totalTechnologies = technologyArray.length;
      const scorePercentage = (matchedTechnologyCount / totalTechnologies) * 100;

     
        matchedProjects.push({ document, scorePercentage });
       
    });

    // Sort the arrays based on the matching score in descending order
    matchedProjects.sort((a, b) => b.scorePercentage - a.scorePercentage);

    console.log(matchedProjects);

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
