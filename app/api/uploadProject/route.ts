import { connect } from "@/dbConfig/dbConfig";
import { NextRequest, NextResponse } from "next/server";
import Project from "@/models/ProjectInfoSchema";


import mongoose, { Document } from "mongoose";

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
  status: "ongoing" | "completed" | "abandoned";
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

    // now destruct body data and give me project document
    const {
      projectName,
      teamLeaderName,
      numberOfTeamMembers,
      teamMembers,
      universityOrCollegeName,
      stackUsed,
      description,
      tags,
      images,
      status,
      externalLinks,
    } = body;

    // create project
    const project = await Project.create({
      projectName,
      teamLeaderName,
      numberOfTeamMembers,
      teamMembers,
      universityOrCollegeName,
      stackUsed,
      description,
      tags,
      images,
      status,
      externalLinks,
    });

   

    // now save project in database
    const savedProject = await project.save();

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
