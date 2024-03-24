// import mongoose from "mongoose";

// const teamLeaderNameScheema = new mongoose.Schema({
//     type: String,
//     required: [true, "Please provide the team leader's name"]
// });

// const projectSchema = new mongoose.Schema({
//     teamLeaderName: teamLeaderNameScheema,
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


import mongoose from "mongoose";

// Schema for team leader name
const teamLeaderNameSchema = new mongoose.Schema({
    type: {
        type: String,
        required: [true, "Please provide the team leader's name"]
    }
});

// Schema for team members
const teamMemberSchema = new mongoose.Schema({
    name: String,
    email: String,
    socialMedia: {
        linkedIn: String
        // Add more social media links if needed
    }
});

// Schema for comments
const commentSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId, // Reference to user
        ref: "User"
    },
    text: String,
    createdAt: {
        type: Date,
        default: Date.now
    }
});

// Schema for update history
const updateHistorySchema = new mongoose.Schema({
    description: String,
    timestamp: {
        type: Date,
        default: Date.now
    }
});

// Schema for likes
const likeSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId, // Reference to user
        ref: "User"
    }
});

// Schema for collaborators
const collaboratorSchema = new mongoose.Schema({
    name: String,
    email: String,
    contactInfo: String
});

// Define the main project schema using the individual schemas
const projectSchema = new mongoose.Schema({
    teamLeaderName: teamLeaderNameSchema,
    numberOfTeamMembers: {
        type: Number,
        required: [true, "Please provide the number of team members"]
    },
    teamMembers: [teamMemberSchema],
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
    reviews: [commentSchema],
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
    likes: [likeSchema],
    comments: [commentSchema],
    views: {
        type: Number,
        default: 0
    },
    uploadDate: {
        type: Date,
        default: Date.now
    },
    updateHistory: [updateHistorySchema],
    collaborators: [collaboratorSchema],
    externalLinks: [String],
    dependencies: [String],
    license: String
});

const Project = mongoose.models.projects || mongoose.model("projects", projectSchema);

export default Project;
