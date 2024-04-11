// pages/api/projects/[id]/interaction.ts
import { NextRequest, NextResponse } from "next/server";
import { connect } from "@/dbConfig/dbConfig";
import Project from "@/models/Project";
import UserProfile from "@/models/UserProfile";
import User from "@/models/User";
import { getDataFromToken } from "@/helpers/getDataFromToken";

export async function POST(request: NextRequest) {
  await connect();

  try {
    const { id, interactionType } = await request.json();

    console.log("Request Body:", id, interactionType);
    

    // Find the project by ID
    const project = await Project.findById(id);

    if (!project) {
      return NextResponse.json({ error: "Project not found", success: false });
    }

    // Update project interactions based on interactionType
    if (interactionType === "like") {
      project.likes++;
    } else if (interactionType === "view") {
      project.views++;
    }

    // Save the updated project
    await project.save();

    if (interactionType === "save") {
      console.log("save");
      
      const userId = await getDataFromToken(request);
      const UserData = await User.findOne({ _id: userId });
      const UserProfileData = await UserProfile.findOne({
        _id: UserData.userProfile,
      });
      if (!UserProfileData.savedProjects.includes(project._id)) {
        UserProfileData.savedProjects.push(project._id);
        await UserProfileData.save();
      }
      await UserProfileData.save();
    }

    // Send the response with updated likes and views
    const response = NextResponse.json({ likes: project.likes, views: project.views });
    return response;
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json({ error: "Internal Server Error" });
  }
}
