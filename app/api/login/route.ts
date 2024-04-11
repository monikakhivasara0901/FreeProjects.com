
import { NextRequest, NextResponse } from "next/server";
import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/User";
var bcryptjs = require('bcryptjs');
var jwt = require('jsonwebtoken');

export async function POST(request: NextRequest){
    try {
        const reqBody = await request.json();
        const { email, password } = reqBody;
        
        await connect();

        const user = await User.findOne({email:email});
        
        if(!user) {
            return NextResponse.json({ error: "User does not exist" }, { status: 400 });
        }

        const validPassword = await bcryptjs.compare(password, user.password);
        if(!validPassword) {
            return NextResponse.json({ error: "Invalid password" }, { status: 400 });
        }

        const tokenData = {
            id: user._id,
            username: user.username,
            email: user.email
        };
        

        const token = jwt.sign(tokenData, "mysecret", { expiresIn: "1d" });

        const response = NextResponse.json({
            message: "Login successful",
            success: true,
        });
        response.cookies.set("token", token, {
            httpOnly: true
        });
        return response;

    } catch (error: any) {
        return NextResponse.json({
            message: error.message,
            success: false,
        });
    }
}
