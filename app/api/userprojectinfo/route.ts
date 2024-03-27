import { NextRequest, NextResponse } from "next/server";
import { getDataFromToken } from "@/helpers/getDataFromToken";
import {connect} from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import UserProfile from "@/models/profile";

export async function GET(request: NextRequest) {
    await connect();
    try {
        const { userId } = getDataFromToken(request);
        const UserData = await User.findOne({ _id: userId });
        const UserProfileData = await UserProfile.findOne({ _id: UserData.userProfile });
        const 
       

        const jobOpeningsData = await Promise.all(jobOpeningsDataPromises);

        console.log("jobOpeningsData", jobOpeningsData);

        return NextResponse.json({
            message: "Success",
            data: data,
            jobOpeningsData: jobOpeningsData // Sending jobOpeningsData in response
        });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: 'Internal Server Error' });
    }
}
