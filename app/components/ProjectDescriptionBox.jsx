import React, { useState } from "react";
import Image1 from "@/public/images/image1.jpg";
import Image2 from "@/public/images/image2.jpeg";
import Image3 from "@/public/images/image3.jpeg";
import Image from "next/image";
import leftArrow from "@/public/icons/left-arrow.png";
import rightArrow from "@/public/icons/right-arrow.png";
import heart from "@/public/icons/heart.png";
import heartFill from "@/public/icons/heart-fill.png";
import github from "@/public/icons/github.png";
import linkedin from "@/public/icons/linkedin.png";
import gobackarrow from "@/public/icons/go-back-arrow.png";
import email from "@/public/icons/email.png";
import StarRatingComponent from "react-star-rating-component";

const ProjectDescriptionBox = ({
  setShowProjectDetails,
  showProjectDetailsData,
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [liked, setLiked] = useState(false);

  const images = [
    { src: Image1, alt: "Image1", color: "bg-orange-500" },
    { src: Image2, alt: "Image2", color: "bg-white" },
    { src: Image3, alt: "Image3", color: "bg-green-500" },
  ];

  const showNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const showPrevImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const project = {
    projectName: "Project-1",
    teamLeaderName: "Radhey Kedar",
    numberOfTeamMembers: 3,
    teamMembers: [
      {
        name: "Radhey Kedar",
        email: "radhey@gmail.com",
        linkedIn: "https://www.linkedin.com/in/radhey",
      },
      {
        name: "Monika Jain",
        email: "monika@gmail.com",
        linkedIn: "https://www.linkedin.com/in/monika",
      },
      {
        name: "Atharva Kore",
        email: "atharva@example.com",
        linkedIn: "https://www.linkedin.com/in/atharva",
      },
    ],
    universityOrCollegeName: "PCCOE",
    stackUsed: [],
    description:
      "CodeFind is a revolutionary platform designed to streamline the process of discovering open-source projects and their corresponding source code across multiple repositories. Developers can effortlessly explore an extensive range of projects, accessing their source code and documentation from a centralized location. With intuitive search functionalities, comprehensive project details, and seamless integration with popular version control platforms, CodeFind empowers developers to efficiently find, evaluate, and contribute to open-source projects, fostering collaboration and innovation within the developer community.",
    projectExecutionSteps:
      "Set up your development environment by cloning the project repository from GitHub and installing dependencies. Configure environment variables and start the backend server, then launch the frontend development server. Access the application via localhost, explore projects, and access their source code. Consider contributing to projects and providing feedback for improvement.",
    tags: [],
    images: [],
    status: 1,
    projectLink: "www.freeprojects.com",
    gitHubLink: "https://github.com/Radhey-R-Kedar/FreeProjects.com.git",
  };

  console.log(showProjectDetailsData);
  const redirectToGitHub = () => {
    const githubLink = showProjectDetailsData.gitHubLink;
    window.open(githubLink);
  };
  const redirectToLinkedIn = (linkedIn) => {
    window.open(linkedIn);
  };

  return (
    <div className="flex flex-col items-center p-2 bg-gray-800 justify-between w-[98%] h-[100vh] overflow-y-scroll scrollbar-hide">
      <div className="flex flex-none h-[500px] w-[100%] m-4 items-center relative">
        <Image
          src={gobackarrow}
          style={{ filter: "invert(50%)" }}
          alt=""
          onClick={() => setShowProjectDetails(false)}
          className="absolute top-5 rounded-full left-5 w-[30px] h-[30px]"
        />
        <div className="flex-1 h-[100%] overflow-auto scrollbar-hide">
          {showProjectDetailsData.images.map((image, index) => (
            <Image
              key={index}
              className={`flex-none w-[100%] h-[100%] ${image.color}`}
              src={image}
              alt={"None"}
              width={500} // Example width
              height={500} // Example height
              style={{
                display: index === currentImageIndex ? "block" : "none",
              }}
            />
          ))}
          <button
            className="absolute top-1/2 transform -translate-y-1/2 left-1"
            style={{ filter: "invert(50%)" }}
            onClick={showPrevImage}
          >
            <Image src={leftArrow} alt="" className="w-[20px] h-[25px]" />
          </button>
          <button
            className="absolute top-1/2 transform -translate-y-1/2 right-1"
            style={{ filter: "invert(50%)" }}
            onClick={showNextImage}
          >
            <Image src={rightArrow} alt="" className="w-[20px] h-[25px]" />
          </button>
        </div>
      </div>

      <div className="flex flex-row w-[100%] m-4">
        <div className="flex-1 p-2 h-[100%] w-[75%] mx-1 items-center justify-around">
          <h1 className="font-bold text-xl m-4">
            {showProjectDetailsData.projectName}
          </h1>
          <h1 className="font-bold text-lg m-4">
            {showProjectDetailsData.universityOrCollegeName}
          </h1>
          <h1 className="font-bold text-xl m-4">Project Description</h1>
          <p className="text-wrap text-sm m-4 h-[40%]">
            {showProjectDetailsData.description}
          </p>
        </div>

        <div className="flex flex-col justify-between items-center flex-none h-[100%] w-[25%] mx-1">
          <div className="flex flex-row justify-between items-center w-[100%] mb-1">
            <div className="flex flex-col justify-betwee items-center m-1">
              <h1 className="text-sm m-1">
                Likes<span> : {showProjectDetailsData.likes}</span>
              </h1>
              <h1 className="text-sm m-1">
                Views<span> : {showProjectDetailsData.views}</span>
              </h1>
              <StarRatingComponent
                className="ml-1"
                name="rate1"
                starCount={5}
                value={showProjectDetailsData.rating}
              />
            </div>
            <div className="flex flex-col justify-betwee items-center m-1">
              <button className="h-5 w-5 m-1" onClick={() => setLiked(!liked)}>
                {liked ? (
                  <Image
                    src={heartFill}
                    alt="heart"
                    className="w-[20px] h-[20px]"
                    style={{ filter: "invert(100%)" }}
                  />
                ) : (
                  <Image
                    src={heart}
                    alt="heart"
                    className="w-[20px] h-[20px]"
                    style={{ filter: "invert(100%)" }}
                  />
                )}
              </button>
              {/* <button className="h-5 w-5 m-1">
                <Image
                  src={linkedin}
                  alt="linkedin"
                  className="w-[20px] h-[20px]"
                  style={{ filter: "invert(100%)" }}
                />
              </button> */}

              <button className="h-5 w-5 m-1" onClick={redirectToGitHub}>
                <Image
                  src={github}
                  alt="github"
                  className="w-[20px] h-[20px]"
                  style={{ filter: "invert(100%)" }}
                />
              </button>
            </div>
          </div>
          <div>
            <h1>Status : {showProjectDetailsData.status}</h1>
          </div>
          <div className="flex flex-col justify-center items-center w-[90%] mb-1">
            <button className="w-[100%] h-8 m-1  border-2  border-white rounded-xl">
              Explore Details
            </button>
            {showProjectDetailsData.status === "Live" && (
              <button className="w-[100%] h-8 m-1 border-2  border-white rounded-xl">
                Live Project
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="flex flex-col w-[100%] p-2 h-[100%] mx-1 mt-3 mb-3">
        <h1 className="font-bold text-2xl mb-2 m-4">
          Team Leader Name : {showProjectDetailsData.teamLeaderName}
        </h1>
        <h1 className="font-bold text-xl m-4">
          University or College Name :{" "}
          {showProjectDetailsData.universityOrCollegeName}
        </h1>
        <h1 className="font-bold text-lg m-4">
          Number of Team Members : {showProjectDetailsData.numberOfTeamMembers}
        </h1>
        <div className="flex flex-col justify-start items-start m-4  w-[100%]">
          <h1 className="font-bold text-2xl">Team Members:</h1>
          {showProjectDetailsData.teamMembers.map((member, index) => (
            <div
              key={index}
              className="flex flex-row justify-start items-start ml-4 w-[100%]"
            >
              <div className="w-1/3 m-1">
                {index + 1}. {member.name}
              </div>
              <div className="w-1/3 m-1 flex flex-row items-center">
                <Image
                  src={email}
                  alt="email"
                  className="w-[20px] h-[20px]"
                  style={{ filter: "invert(100%)" }}
                />{" "}
                <h1 className=" ml-2"> {member.email}</h1>
              </div>

              <button
                className="h-5 w-5 m-1 flex flex-row items-center"
                onClick={() => redirectToLinkedIn(member.link)}
              >
                <Image
                  src={linkedin}
                  alt="linkedin"
                  className="w-[20px] h-[20px]"
                  style={{ filter: "invert(100%)" }}
                />
                <h1 className=" ml-2"> {member.linkedIn}</h1>
              </button>
            </div>
          ))}
        </div>
        <div className="flex flex-col justify-start items-start m-4">
          <h1 className="font-bold text-xl">Tags</h1>
          <div className="flex flex-row justify-start items-center flex-wrap">
            {showProjectDetailsData.tags.map((tag, index) => (
              <h1 key={index} className="text-xs m-1 mr-2">
                {tag}
              </h1>
            ))}
          </div>
        </div>
        {/* tachnologies used */}
        <div className="flex flex-col justify-start items-start m-4">
          <h1 className="font-bold text-xl">Technologies Used</h1>
          <div className="flex flex-row justify-start items-center flex-wrap">
            {showProjectDetailsData.stackUsed.map((tech, index) => (
              <h1 key={index} className="text-xs m-1 mr-2">
                {tech}
              </h1>
            ))}
          </div>
        </div>

        <div className="flex flex-col justify-start items-start m-4">
          <h1 className="font-bold text-xl m-1">Project Execution Steps</h1>
          <p className="text-wrap text-sm m-1 mb-2 h-[40%]">
            {showProjectDetailsData.projectExecutionSteps}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectDescriptionBox;
