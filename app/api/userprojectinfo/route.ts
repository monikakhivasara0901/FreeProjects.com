import { NextRequest, NextResponse } from "next/server";
import { getDataFromToken } from "@/helpers/getDataFromToken";
import {connect} from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import UserProfile from "@/models/profile";
import Project from "@/models/ProjectInfoSchema";
var jwt = require('jsonwebtoken');
const mongoose = require('mongoose');

export async function GET(request: NextRequest) {
    // await connect();
    try {

        console.log("called");
        const id = "6609604c0dd8b060c4041523";
        const userId =new mongoose.Types.ObjectId(id);
        console.log(userId);
        
        // const token = getDataFromToken(request);
        // console.log(token);
        
        const UserData = await User.findOne({ _id: userId });
        const UserProfileData = await UserProfile.findOne({ _id: UserData.userProfile });
        
        // let SavedProjects =[];
        // let UplodedProjects =[];

        // // SaveProjects
        // for (let i = 0; i < UserProfileData.savedProjects.length; i++) {
        //     const project = await Project.findOne({ _id: UserProfileData.savedProjects[i] });
        //     if (project) {
        //         SavedProjects.push(project);
        //     }
        // }

        // // UploadedProjects
        // for (let i = 0; i < UserProfileData.UploadedProjects.length; i++) {
        //     const project = await Project.findOne({ _id: UserProfileData.UploadedProjects[i] });
        //     if (project) {
        //         UplodedProjects.push(project);
        //     }
        // }

        const data = {
            UserData: UserData,
            UserProfileData: UserProfileData,
            // savedProjects: SavedProjects,
            // uploadedProjects: UplodedProjects
        };


        return NextResponse.json({
            message: "Success",
            data: data,
        });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: 'Internal Server Error' });
    }
}
