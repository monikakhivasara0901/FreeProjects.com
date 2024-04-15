import { NextRequest } from "next/server";
var jwt = require('jsonwebtoken');

export const getDataFromToken = async (request: NextRequest) => {
    try {
        const token =  await request.cookies.get('token')?.value || (request.headers.get('Authorization'))|| '';
        console.log("Token:", token); // Log retrieved token
        if (!token) {
            throw new Error("Token not provided");
        }
        
        const jwtSecret = "mysecret";
        const decodedToken: any = jwt.verify(token, jwtSecret);
        
        return decodedToken.id;
    } catch (error: any) {
        throw new Error(error.message);
    }
}


