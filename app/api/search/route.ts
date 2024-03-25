import { NextRequest, NextResponse } from "next/server";
import connectMongoDB from "@/libs/mongodb";
import mongoose from "mongoose";
const { MongoClient } = require("mongodb");

const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

export async function POST(request: NextRequest) {
  try {
    console.log("Called");

    const body = await request.json();
    console.log("Request Body:", body);

    // Extract the technologies from the request body, or use a dummy array if not provided
    const technologyArray = body.technologies || ['Dummy Technology 1', 'Dummy Technology 2'];

    // Connect to the MongoDB Atlas cluster
    await client.connect();

    // Access the projects collection
    const collection = client.db("YourDatabaseName").collection("projects");

    // Find all documents in the collection
    const cursor = collection.find();

    // Array to store documents with matching score
    const matchedProjects = [];
    const unmatchedProjects = [];

    // Iterate over the cursor and process each document
    await cursor.forEach((document) => {
      // Process each document here
      const projectTechnologies = document.technologies;

      // Check if the project includes any of the requested technologies
      const matchedTechnologyCount = projectTechnologies.filter(tech => technologyArray.includes(tech)).length;

      // Calculate the score as a percentage
      const totalTechnologies = technologyArray.length;
      const scorePercentage = (matchedTechnologyCount / totalTechnologies) * 100;

      if (matchedTechnologyCount > 0) {
        matchedProjects.push({ document, scorePercentage });
      } else {
        unmatchedProjects.push({ document, scorePercentage });
      }
    });

    // Sort the arrays based on the matching score in descending order
    matchedProjects.sort((a, b) => b.scorePercentage - a.scorePercentage);
    unmatchedProjects.sort((a, b) => b.scorePercentage - a.scorePercentage);

    console.log(matchedProjects);
    console.log(unmatchedProjects);

    return NextResponse.json({
      status: 200,
      matchedProjects: matchedProjects,
      unmatchedProjects: unmatchedProjects,
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
