// const token = getDataFromToken(request);
// console.log(token);
import { NextRequest, NextResponse } from "next/server";
import { getDataFromToken } from "@/helpers/getDataFromToken";
import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/User";
import UserProfile from "@/models/UserProfile";
import Project from "@/models/Project";
const mongoose = require("mongoose");

export async function PUT(request: NextRequest) {
  await connect();
  try {
    const body = await request.json();
    const { id, data } = body;

    console.log("Request Body:", id, data);
    const updatedProfile = await UserProfile.findByIdAndUpdate(id, data, { new: true });

    console.log(updatedProfile);
    
    if (!updatedProfile) {
      return NextResponse.json({ message: 'Profile not found', status: false });
    }

    return NextResponse.json({data:updatedProfile, status:false});

    // const userId = await getDataFromToken(request);

    // const UserData = await User.findOne({ _id: userId });

    // const UserProfileData = await UserProfile.findOne({
    //   _id: UserData.userProfile,
    // });

    return NextResponse.json({
      message: "Success",
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Internal Server Error" });
  }
}
