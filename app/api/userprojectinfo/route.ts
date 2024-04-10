// const token = getDataFromToken(request);
// console.log(token);
import { NextRequest, NextResponse } from "next/server";
import { getDataFromToken } from "@/helpers/getDataFromToken";
import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/User";
import UserProfile from "@/models/UserProfile";
import Project from "@/models/Project";
const mongoose = require('mongoose');

export async function GET(request: NextRequest) {
    await connect();
    try {

        const userId = await getDataFromToken(request);
        
        const UserData = await User.findOne({ _id: userId });
        const UserProfileData = await UserProfile.findOne({ _id: UserData.userProfile });
        
        let SavedProjects = [];
        let UploadedProjects = [];

        if (UserProfileData.savedProjects && UserProfileData.savedProjects.length > 0) {
            for (let i = 0; i < UserProfileData.savedProjects.length; i++) {
                const project = await Project.findOne({ _id: UserProfileData.savedProjects[i] });
                if (project) {
                    SavedProjects.push(project);
                }
            }
        }
        
        if (UserProfileData.uploadedProjects && UserProfileData.uploadedProjects.length > 0) {
            for (let i = 0; i < UserProfileData.uploadedProjects.length; i++) {
                const project = await Project.findOne({ _id: UserProfileData.uploadedProjects[i] });
                if (project) {
                    UploadedProjects.push(project);
                }
            }
        }

        const data = {
            UserData: UserData,
            UserProfileData: UserProfileData,
            SavedProjects: SavedProjects,
            UploadedProjects: UploadedProjects
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
