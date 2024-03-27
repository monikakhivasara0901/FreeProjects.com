import { NextRequest, NextResponse } from "next/server";
import { getDataFromToken } from "@/helpers/getDataFromToken";
import {connect} from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import UserProfile from "@/models/profile";
import Project from "@/models/ProjectInfoSchema";

export async function GET(request: NextRequest) {
    await connect();
    try {
        const { userId } = getDataFromToken(request);
        const UserData = await User.findOne({ _id: userId });
        const UserProfileData = await UserProfile.findOne({ _id: UserData.userProfile });
        
        let SavedProjects =[];
        let UplodedProjects =[];

        // SaveProjects
        for (let i = 0; i < UserProfileData.savedProjects.length; i++) {
            const project = await Project.findOne({ _id: UserProfileData.savedProjects[i] });
            if (project) {
                SavedProjects.push(project);
            }
        }

        // UploadedProjects
        for (let i = 0; i < UserProfileData.UploadedProjects.length; i++) {
            const project = await Project.findOne({ _id: UserProfileData.UploadedProjects[i] });
            if (project) {
                UplodedProjects.push(project);
            }
        }

        const data = {
            UserData: UserData,
            UserProfileData: UserProfileData,
            savedProjects: SavedProjects,
            uploadedProjects: UplodedProjects
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
