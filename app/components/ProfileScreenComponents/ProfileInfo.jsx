import profilepic from "@/public/images/profile-pic-temp.webp";
import Image from "next/image";
import Link from "next/link";
// // Schema for saved projects
// const savedProjectSchema = new mongoose.Schema({
//     projectId: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: 'Project' // Reference to the Project model
//     }
// });

// // Schema for GitHub likes
// const gitHubLikeSchema = new mongoose.Schema({
//     repositoryName: String,
//     repositoryUrl: String
// });

// // Schema for social media profiles
// const socialMediaSchema = new mongoose.Schema({
//     platform: String,
//     url: String
// });

// // Schema for skills
// const skillSchema = new mongoose.Schema({
//     name: String,
//     proficiency: {
//         type: String,
//         enum: ['Beginner', 'Intermediate', 'Advanced']
//     }
// });

// // Schema for uploaded projects
// const uploadedProjectSchema = new mongoose.Schema({
//     projectId: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: 'Project' // Reference to the Project model
//     }
// });

// // Schema for user profile
// const userProfileSchema = new mongoose.Schema({
//     userId: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: 'User' // Reference to the User model
//     },
//     username: {
//         type: String,
//         required: [true, "Please provide a username"],
//         unique: true
//     },
//     email: {
//         type: String,
//         required: [true, "Please provide an email"],
//         unique: true
//     },
//     fullName: String,
//     bio: String,
//     avatarUrl: String,
//     universityOrCollege: String, // University or college name
//     linkedIn: String,
//     websiteUrl: String,
//     location: String,
//     savedProjects: [savedProjectSchema], // Array of saved projects
//     gitHubLikes: [gitHubLikeSchema], // Array of GitHub likes
//     socialMedia: [socialMediaSchema], // Array of social media profiles
//     skills: [skillSchema], // Array of skills
//     uploadedProjects: [uploadedProjectSchema], // Array of uploaded projects
//     createdAt: {
//         type: Date,
//         default: Date.now
//     }
// });

const ProfileInfo = ({}) => {
  return (
    <div className="flex flex-col h-[95vh] relative">
      <div className="bg-[#0A1436] h-[20%] w-[100%]"></div>
      <Image
        src={profilepic}
        alt="profile"
        className="h-48 w-48 rounded-full border-2 border-white m-2 absolute left-16 top-[5%]"
        width={100}
        height={100}
      />
      <div className="flex flex-col justify-center items-start ml-[25%]">
        <h1 className="text-3xl font-bold">FullName</h1>
        <h1 className="text-base">username</h1>
        <h1>Univercity</h1>
        
      </div>
    </div>
  );
};

export default ProfileInfo;
