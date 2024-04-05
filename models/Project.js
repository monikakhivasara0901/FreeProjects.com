import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({

    projectName:{
        type:String,
        required:[true, "Please provide the project name"]
    },
    teamLeaderName: {
        type: String,
        required: [true, "Please provide the team leader's name"]
    },
    numberOfTeamMembers: {
        type: Number,
        required: [true, "Please provide the number of team members"]
    },
    teamMembers: [
        {
            name: String,
            email: String,
            socialMedia: {
                linkedIn: String
               
            }
        }
    ],
    universityOrCollegeName: {
        type: String,
        required: [true, "Please provide the university or college name"]
    },
    stackUsed: {
        type: [String],
        required: [true, "Please provide at least one stack used"]
    },
    description: String,
    tags: [String],
    images: [String], // Store file URLs
    status: {
        type: String,
        enum: ["Ongoing", "Completed", "Live"],
        default: "Ongoing"
    },
    likes: {
        type: Number,
        default: 0
    },
    views: {
        type: Number,
        default: 0
    },
    ratings: {
        type: Number,
        default: 0
    },
    comments: [
        {
            userId: mongoose.Schema.Types.ObjectId,
            text: String,
            createdAt: {
                type: Date,
                default: Date.now
            }
        }
    ],
    uploadDate: {
        type: Date,
        default: Date.now
    },
    externalLinks: String,
});

const Project = mongoose.models.projects || mongoose.model("projects", projectSchema);

export default Project;


