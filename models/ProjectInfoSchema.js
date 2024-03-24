import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
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
    files: [String], // Store file URLs or file IDs
    ratings: [Number], // Array of ratings
    reviews: [
        {
            userId: mongoose.Schema.Types.ObjectId, // Reference to user
            text: String
        }
    ],
    visibility: {
        type: String,
        enum: ["public", "private"],
        default: "public"
    },
    status: {
        type: String,
        enum: ["ongoing", "completed", "abandoned"],
        default: "ongoing"
    },
    likes: [
        {
            userId: mongoose.Schema.Types.ObjectId // Reference to user
        }
    ],
    comments: [
        {
            userId: mongoose.Schema.Types.ObjectId, // Reference to user
            text: String,
            createdAt: {
                type: Date,
                default: Date.now
            }
        }
    ],
    views: {
        type: Number,
        default: 0
    },
    uploadDate: {
        type: Date,
        default: Date.now
    },
    updateHistory: [
        {
            description: String,
            timestamp: {
                type: Date,
                default: Date.now
            }
        }
    ],
    collaborators: [
        {
            name: String,
            email: String,
            contactInfo: String
        }
    ],
    externalLinks: [String],
    dependencies: [String],
    license: String
});

const Project = mongoose.models.projects || mongoose.model("projects", projectSchema);

export default Project;
