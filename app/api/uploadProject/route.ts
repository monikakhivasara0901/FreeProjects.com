import { connect } from "@/dbConfig/dbConfig";
import { NextRequest, NextResponse } from "next/server";
import Project from "@/models/Project";
import User from "@/models/User";
import UserProfile from "@/models/UserProfile";

import mongoose, { Document } from "mongoose";
import { getDataFromToken } from "@/helpers/getDataFromToken";

// Define interface for team members
interface TeamMember {
  name: string;
  email: string;
  socialMedia: {
    linkedIn: string;
  };
}

// Define interface for comments
interface Comment {
  userId: mongoose.Schema.Types.ObjectId;
  text: string;
  createdAt: Date;
}

// Define interface for project document
interface ProjectDocument extends Document {
  projectName: string;
  teamLeaderName: string;
  numberOfTeamMembers: number;
  teamMembers: TeamMember[];
  universityOrCollegeName: string;
  stackUsed: string[];
  description: string;
  tags: string[];
  images: string[];
  status: 1 | 2 | 3;
  likes: number;
  views: number;
  ratings: number;
  comments: Comment[];
  uploadDate: Date;
  externalLinks: string;
}


export async function POST(request: NextRequest) {
  try {
     await connect();
 
     const body = await request.json();
     console.log("Request Body:", body);
 
     const {
       projectName,
       teamLeaderName,
       numberOfTeamMembers,
       teamMembers,
       universityOrCollegeName,
       stackUsed,
       description,
       projectExecutionSteps,
       tags,
       images,
       status,
       projectLink,
       gitHubLink,
     } = body;

     console.log(images,"==================");
     
 
     // Create project
     const project = await Project.create({
       projectName,
       teamLeaderName,
       numberOfTeamMembers,
       teamMembers,
       universityOrCollegeName,
       stackUsed,
       description,
       projectExecutionSteps,
       tags,
       images,
       status,
       projectLink,
       gitHubLink,
     });
 
     console.log(project);
 
     // Update user profile with the new project
     const userId = await getDataFromToken(request);
     console.log(userId);
 
     const UserData = await User.findOne({ _id: userId });
     if (UserData && UserData.userProfile) {
       const UserProfileData = await UserProfile.findById(UserData.userProfile);
       if (UserProfileData) {
         UserProfileData.uploadedProjects.push(project._id);
         await UserProfileData.save();
       }
     }
 
     return NextResponse.json({
       message: "Project uploaded successfully",
       success: true,
     });
  } catch (error: any) {
     return NextResponse.json({
       message: error.message,
       success: false,
     });
  }
 }
 
