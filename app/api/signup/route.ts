import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/User";
import UserProfile from "@/models/UserProfile";
import { NextRequest, NextResponse } from "next/server";
var bcryptjs = require("bcryptjs");
import { sendEmail } from "@/helpers/mailer";
import mongoose, { Document, Schema } from "mongoose";

interface UserProfile {
  bio: string;
  avatar: string;
}

interface UserDocument extends Document {
  fullname: string;
  username: string;
  email: string;
  password: string;
  isVerified: boolean;
  forgotPasswordToken?: string;
  forgotPasswordExpiry?: Date;
  verifyToken?: string;
  verifyTokenExpiry?: Date;
  userProfile?: UserProfile | Schema.Types.ObjectId;
}

interface SavedProject {
  projectId: mongoose.Types.ObjectId;
}

interface GitHubLike {
  repositoryName: string;
  repositoryUrl: string;
}

interface SocialMedia {
  platform: string;
  url: string;
}

interface Skill {
  name: string;
  proficiency: "Beginner" | "Intermediate" | "Advanced";
}

interface UploadedProject {
  projectId: mongoose.Types.ObjectId;
}

interface UserProfileDocument extends Document {
  username: string;
  email: string;
  fullName?: string;
  bio?: string;
  avatarUrl?: string;
  universityOrCollege?: string;
  linkedIn?: string;
  websiteUrl?: string;
  location?: string;
  savedProjects: SavedProject[];
  gitHubLikes: GitHubLike[];
  socialMedia: SocialMedia[];
  skills: Skill[];
  uploadedProjects: UploadedProject[];
  createdAt: Date;
}

export async function POST(request: NextRequest) {
  await connect();
  try {
    const reqBody = await request.json();
    const { fullname, username, email, password } = reqBody;
    console.log(reqBody);

    // //check if user already exists
    const user = await User.findOne({ email });

    if (user) {
      return NextResponse.json(
        { error: "User already exists" },
        { status: 400 }
      );
    }

    // generate the Profile with adding fullname username email and other blank fields give according to UserProfileDocument
    const profile = new UserProfile({
      username: username,
      email: email,
      fullName: fullname,
      bio: "",
      avatar: "",
      universityOrCollege: "",
      linkedIn: "",
      websiteUrl: "",
      location: "",
      savedProjects: [],
      gitHubLikes: [],
      socialMedia: [],
      skills: [],
      uploadedProjects: [],
    });

    const savedProfile = await profile.save();


    //hash password
    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);

    const newUser = await User.create({
      fullname,
      username,
      email,
      password: hashedPassword,
      isVerified: false,
      verifyToken: await bcryptjs.hash(email + Date.now().toString(), salt),
      verifyTokenExpiry: Date.now() + 3600000,
      forgotPasswordToken: await bcryptjs.hash(
        email + Date.now().toString(),
        salt
      ),
      forgotPasswordExpiry: Date.now() + 3600000,
      userProfile: savedProfile._id,
    });

    const savedUser = await newUser.save();

    console.log(savedUser);

    //send verification email

    // await sendEmail({email, emailType: "VERIFY", userId: savedUser._id})

    return NextResponse.json({
      message: "User created successfully",
      success: true,
      // savedUser
    });
  } catch (error: any) {
    return NextResponse.json({ message: error.message, success: false });
  }
}
