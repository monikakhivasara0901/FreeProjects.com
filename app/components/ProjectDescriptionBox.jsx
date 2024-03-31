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
import StarRatingComponent from "react-star-rating-component";

const ProjectDescriptionBox = ({ setShowProjectDetails }) => {
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
    teamLeaderName: "Monika Jain",
    numberOfTeamMembers: 5,
    teamMembers: [
      {
        name: "Radhey",
        email: "alice@example.com",
        socialMedia: { linkedIn: "https://www.linkedin.com/in/alice" },
      },
      {
        name: "Atharva",
        email: "bob@example.com",
        socialMedia: { linkedIn: "https://www.linkedin.com/in/bob" },
      },
      {
        name: "Charlie",
        email: "charlie@example.com",
        socialMedia: { linkedIn: "https://www.linkedin.com/in/charlie" },
      },
      {
        name: "David",
        email: "david@example.com",
        socialMedia: { linkedIn: "https://www.linkedin.com/in/david" },
      },
      {
        name: "Eva",
        email: "eva@example.com",
        socialMedia: { linkedIn: "https://www.linkedin.com/in/eva" },
      },
    ],
    universityOrCollegeName: "Example University",
    stackUsed: ["HTML", "CSS", "JavaScript", "React", "Node.js", "MongoDB"],
    description: "This is a sample project description.",
    tags: ["Web Development", "Full Stack", "React", "MongoDB"],
    // Add more fields as needed
  };

  return (
    <div className="flex flex-col items-center p-2 bg-gray-800 justify-between w-[98%] h-[100vh] overflow-y-scroll scrollbar-hide">
      <div className="flex flex-none h-[500px] w-[100%] ml-1 items-center relative">
        <div className="flex-1 h-[100%] overflow-auto scrollbar-hide">
          {images.map((image, index) => (
            <Image
              key={index}
              className={`flex-none w-[100%] h-[100%] ${image.color}`}
              src={image.src}
              alt={image.alt}
              style={{
                display: index === currentImageIndex ? "block" : "none",
              }}
            />
          ))}
          <button
            className="absolute top-1/2 transform -translate-y-1/2 left-1"
            style={{ filter: "invert(100%)" }}
            onClick={showPrevImage}
          >
            <Image src={leftArrow} alt="" className="w-[20px] h-[25px]" />
          </button>
          <button
            className="absolute top-1/2 transform -translate-y-1/2 right-1"
            style={{ filter: "invert(100%)" }}
            onClick={showNextImage}
          >
            <Image src={rightArrow} alt="" className="w-[20px] h-[25px]" />
          </button>
        </div>
      </div>

      <div className="flex flex-row w-[100%]">
        <div className="flex-1 p-2 h-[100%] w-[75%] mx-1 items-center justify-around">
          <h1 className="font-bold text-xl m-1">Project Name</h1>
          <h1 className="font-bold text-sm m-1">University Name</h1>
          <p className="text-wrap text-sm m-1 mb-2 h-[40%]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
            doloribus dignissimos aperiam aliquam eaque, possimus nam rem harum
            libero esse?
          </p>
        </div>

        <div className="flex flex-col justify-between items-center flex-none h-[100%] w-[25%] mx-1">
          <div className="flex flex-row justify-between items-center w-[100%] mb-1">
            <div className="flex flex-col justify-betwee items-center m-1">
              <h1 className="text-sm m-1">
                Likes<span> : 0</span>
              </h1>
              <h1 className="text-sm m-1">
                Views<span> : 0</span>
              </h1>
              <StarRatingComponent
                className="ml-1"
                name="rate1"
                starCount={5}
                value={4}
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
              <button className="h-5 w-5 m-1">
                <Image
                  src={linkedin}
                  alt="linkedin"
                  className="w-[20px] h-[20px]"
                  style={{ filter: "invert(100%)" }}
                />
              </button>
              <button className="h-5 w-5 m-1">
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
            <h1>Status : Live/Completed/Ongoing</h1>
          </div>
          <div className="flex flex-col justify-center items-center w-[90%] mb-1">
            <button className="w-[100%] h-8 m-1  border-2  border-white rounded-xl">
              Explore Details
            </button>
            <button className="w-[100%] h-8 m-1 border-2  border-white rounded-xl">
              Live Project
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col w-[100%] p-2 h-[100%] mx-1">
        <h1 className="font-bold text-2xl mb-2">
          Team Leader Name : {project.teamLeaderName}
        </h1>
        <h1 className="font-bold text-xl">
          University or College Name : {project.universityOrCollegeName}
        </h1>
        <h1 className="font-bold text-lg">
          Number of Team Members : {project.numberOfTeamMembers}
        </h1>
        <div className="flex flex-col justify-start items-start mt-2  w-[100%]">
          <h1 className="font-bold text-2xl">Team Members:</h1>
          {project.teamMembers.map((member, index) => (
            <div
              key={index}
              className="flex flex-row justify-start items-start ml-4 w-[100%]"
            >
              <div className="w-1/3 m-1">{index+1}. {member.name}</div>
              <div className="w-1/3 m-1">Email: {member.email}</div>
              <div className="w-1/3 m-1">
                LinkedIn: {member.socialMedia.linkedin}
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col justify-start items-start">
          <h1 className="font-bold text-xl">Tags</h1>
          <div className="flex flex-row justify-start items-center flex-wrap">
            {project.tags.map((tag, index) => (
              <h1 key={index} className="text-xs m-1 mr-2">
                {tag}
              </h1>
            ))}
          </div>
        </div>
        {/* tachnologies used */}
        <div className="flex flex-col justify-start items-start">
          <h1 className="font-bold text-xl">Technologies Used</h1>
          <div className="flex flex-row justify-start items-center flex-wrap">
            {project.stackUsed.map((tech, index) => (
              <h1 key={index} className="text-xs m-1 mr-2">
                {tech}
              </h1>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDescriptionBox;
