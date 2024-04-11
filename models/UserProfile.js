import mongoose from 'mongoose';

// Schema for saved projects
const savedProjectSchema = new mongoose.Schema({
    projectId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Project' // Reference to the Project model
    }
});

// Schema for GitHub likes
// const gitHubLikeSchema = new mongoose.Schema({
//     repositoryName: String,
//     repositoryUrl: String
// });

// Schema for social media profiles
const socialMediaSchema = new mongoose.Schema({
    platform: String,
    url: String
});

// Schema for skills
const skillSchema = new mongoose.Schema({
    name: String,
    proficiency: {
        type: String,
        enum: ['Beginner', 'Intermediate', 'Advanced']
    }
});

// Schema for uploaded projects
const uploadedProjectSchema = new mongoose.Schema({
    projectId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Project' // Reference to the Project model
    }
});

// Schema for user profile
const userProfileSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Please provide a username"],
        unique: true
    },
    email: {
        type: String,
        required: [true, "Please provide an email"],
        unique: true
    },
    fullName: String,
    bio: String,
    avatarUrl: String,
    universityOrCollege: String, 
    linkedIn: String,
    websiteUrl: String,
    location: String,
    savedProjects: [savedProjectSchema], // Array of saved projects
    gitHub: String, // Array of GitHub likes
    socialMedia: [socialMediaSchema], // Array of social media profiles
    skills: [skillSchema], // Array of skills
    uploadedProjects: [uploadedProjectSchema], // Array of uploaded projects
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const UserProfile = mongoose.models.UserProfile || mongoose.model('UserProfile', userProfileSchema);

export default UserProfile;
