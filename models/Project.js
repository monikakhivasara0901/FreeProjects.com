import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
  projectName: {
    type: String,
    required: [true, "Please provide the project name"],
  },
  teamLeaderName: {
    type: String,
    required: [true, "Please provide the team leader's name"],
  },
  numberOfTeamMembers: {
    type: Number,
    required: [true, "Please provide the number of team members"],
  },
  teamMembers: [
    {
      name: String,
      email: String,
      linkedIn: String,
    },
  ],
  universityOrCollegeName: {
    type: String,
    required: [true, "Please provide the university or college name"],
  },
  stackUsed: {
    type: [String],
    required: [true, "Please provide at least one stack used"],
  },
  description: String,
  projectExecutionSteps: String,
  tags: [String],
  images: [String], // Store file URLs
  status: {
    type: Number,
    enum: [1, 2, 3],
    default: 1,
  },
  likes: {
    type: Number,
    default: 0,
    min: 0,
  },
  views: {
    type: Number,
    default: 0,
    min: 0,
  },
  ratings: {
    type: Number,
    default: 0,
  },
  comments: [
    {
      userId: mongoose.Schema.Types.ObjectId,
      text: String,
      createdAt: {
        type: Date,
        default: Date.now,
      },
    },
  ],
  uploadDate: {
    type: Date,
    default: Date.now,
  },
  projectLink: String,
  gitHubLink: String,
});

const Project =
  mongoose.models.projects || mongoose.model("projects", projectSchema);

export default Project;
