// import mongoose from "mongoose";

// const projectSchema = new mongoose.Schema({
//     teamLeaderName: {
//         type: String,
//         required: [true, "Please provide the team leader's name"]
//     },
//     numberOfTeamMembers: {
//         type: Number,
//         required: [true, "Please provide the number of team members"]
//     },
//     teamMembers: [
//         {
//             name: String,
//             email: String,
//             socialMedia: {
//                 linkedIn: String
               
//             }
//         }
//     ],
//     universityOrCollegeName: {
//         type: String,
//         required: [true, "Please provide the university or college name"]
//     },
//     stackUsed: {
//         type: [String],
//         required: [true, "Please provide at least one stack used"]
//     },
//     description: String,
//     tags: [String],
//     files: [String], // Store file URLs or file IDs
//     ratings: [Number], // Array of ratings
//     reviews: [
//         {
//             userId: mongoose.Schema.Types.ObjectId, // Reference to user
//             text: String
//         }
//     ],
//     visibility: {
//         type: String,
//         enum: ["public", "private"],
//         default: "public"
//     },
//     status: {
//         type: String,
//         enum: ["ongoing", "completed", "abandoned"],
//         default: "ongoing"
//     },
//     likes: [
//         {
//             userId: mongoose.Schema.Types.ObjectId // Reference to user
//         }
//     ],
//     comments: [
//         {
//             userId: mongoose.Schema.Types.ObjectId, // Reference to user
//             text: String,
//             createdAt: {
//                 type: Date,
//                 default: Date.now
//             }
//         }
//     ],
//     views: {
//         type: Number,
//         default: 0
//     },
//     uploadDate: {
//         type: Date,
//         default: Date.now
//     },
//     updateHistory: [
//         {
//             description: String,
//             timestamp: {
//                 type: Date,
//                 default: Date.now
//             }
//         }
//     ],
//     collaborators: [
//         {
//             name: String,
//             email: String,
//             contactInfo: String
//         }
//     ],
//     externalLinks: [String],
//     dependencies: [String],
//     license: String
// });

// const Project = mongoose.models.projects || mongoose.model("projects", projectSchema);

// export default Project;

import mongoose, { Schema, Document } from 'mongoose';
import { User } from '../models/userSchema'; // Assuming you have defined User interface

// Define interfaces for the schemas

// Interface for the Team Member in Project schema
interface TeamMember {
    name: string;
    email: string;
    socialMedia?: {
        linkedIn?: string;
        // Add more social media links if needed
    };
}

// Interface for the Project schema
export interface Project extends Document {
    teamLeaderName: string;
    numberOfTeamMembers: number;
    teamMembers: TeamMember[];
    universityOrCollegeName: string;
    stackUsed: string[];
    description?: string;
    tags?: string[];
    files?: string[];
    ratings?: number[];
    reviews?: {
        userId: mongoose.Types.ObjectId;
        text: string;
    }[];
    visibility?: 'public' | 'private';
    status?: 'ongoing' | 'completed' | 'abandoned';
    likes?: {
        userId: mongoose.Types.ObjectId;
    }[];
    comments?: {
        userId: mongoose.Types.ObjectId;
        text: string;
        createdAt?: Date;
    }[];
    views?: number;
    uploadDate?: Date;
    updateHistory?: {
        description: string;
        timestamp?: Date;
    }[];
    collaborators?: {
        name: string;
        email: string;
        contactInfo?: string;
    }[];
    externalLinks?: string[];
    dependencies?: string[];
    license?: string;
}

// Define the Project schema
const projectSchema = new Schema<Project>({
    // Define your project schema here...
});

const ProjectModel = mongoose.models.projects || mongoose.model<Project>('projects', projectSchema);

export default ProjectModel;
