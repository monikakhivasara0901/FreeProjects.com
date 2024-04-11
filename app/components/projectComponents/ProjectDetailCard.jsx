import React, { useEffect, useMemo, useState } from "react";
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
import emptyBookmark from "@/public/icons/emptyBookmark.png";
import filledBookmark from "@/public/icons/filledBookmark.png";
import StarRatingComponent from "react-star-rating-component";
import axios from "axios";

const ProjectDetailCard = ({ handleShowProject, project }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);
  const [projectData, setProjectData] = useState(project);

  const images = [
    { src: Image1, alt: "Image1", color: "bg-orange-500" },
    { src: Image2, alt: "Image2", color: "bg-white" },
    { src: Image3, alt: "Image3", color: "bg-green-500" },
  ];

  const handleInteraction = async (interactionType) => {
    try {
      
      const response = await fetch("/api/tracklikes/", {
        method: "POST", // Change method to POST
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: projectData._id,
          interactionType: interactionType,
        }),
      });
      console.log(response);
    
      if (interactionType === "like") {
        setLiked(!liked);
      } else if (interactionType === "save") {
        setSaved(!saved);
      }

    } catch (error) {
      console.error("Error interacting with project:", error);
    }
  };
  const showNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const showPrevImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const redirectToLink = (link) => {
    window.open(link);
  };

  useEffect(() => {
    setProjectData(project);
  }, [project]);

  return (
    <div className="flex flex-wrap items-center justify-between border-2 ml-3 mt-3 h-60 w-[98%] hover:shadow-2xl hover:bg-gray-600 hover: z-50">
      <div className="flex flex-none h-[95%] w-[35%] ml-1 items-center relative">
        <div className="flex-1 h-[100%] overflow-auto scrollbar-hide">
          {projectData.images.map((image, index) => (
            <Image
              key={index}
              className={`flex-none w-[100%] h-[100%] ${image.color}`}
              src={image}
              alt={"none"}
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

      <div className="flex-1 border-r-2 p-2 h-[100%] w-[40%] mx-1 items-center justify-around">
        <h1 className="font-bold text-xl m-1">{projectData.projectName}</h1>
        <h1 className="font-bold text-sm m-1">
          {projectData.universityOrCollegeName}
        </h1>
        <p className="text-wrap text-sm m-1 mb-2 h-[40%]">
          {projectData.description.slice(0, 230)}...
        </p>
        {/* tachnologies used */}
        <div className="flex flex-col justify-start items-start">
          <h1 className="font-bold text-sm">Technologies Used</h1>
          <div className="flex flex-row justify-start items-center flex-wrap">
            {projectData.stackUsed != undefined &&
              projectData.stackUsed.map((data) => (
                <h1 className="text-xs mr-2">{data}</h1>
              ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-between items-center flex-none h-[100%] w-[25%] mx-1">
        <div className="flex flex-row justify-between items-center w-[100%] mb-1">
          <div className="flex flex-col justify-betwee items-center m-1">
            <h1 className="text-sm m-1">
              Likes<span> : {projectData.likes}</span>
            </h1>
            <h1 className="text-sm m-1">
              Views<span> : {projectData.views}</span>
            </h1>
            {/* <StarRatingComponent
              className="ml-1"
              name="rate1"
              starCount={5}
              value={projectData.rating}
            /> */}
          </div>
          <div className="flex flex-col justify-betwee items-center m-1">
            <button
              className="h-5 w-5 m-1"
              onClick={() => handleInteraction("like")}
            >
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
           
              <button className="h-5 w-5 m-1" onClick={() => redirectToLink(projectData!=undefined ? projectData.gitHubLink:"")}>
                <Image
                  src={github}
                  alt="github"
                  className="w-[20px] h-[20px]"
                  style={{ filter: "invert(100%)" }}
                />
              </button>
           
            <button
              className="h-5 w-5 m-1"
              onClick={() => handleInteraction("save")}
            >
              {saved ? (
                <Image
                  src={filledBookmark}
                  alt="filledBookmark"
                  className="w-[20px] h-[20px]"
                  style={{ filter: "invert(100%)" }}
                />
              ) : (
                <Image
                  src={emptyBookmark}
                  alt="emptyBookmark"
                  className="w-[20px] h-[20px]"
                  style={{ filter: "invert(100%)" }}
                />
              )}
            </button>
          </div>
        </div>
        <div>
          <h1>
            Status :{" "}
            {projectData.status == 1
              ? "On Going"
              : projectData.status == 2
              ? "Completed"
              : "Live"}
          </h1>
        </div>
        <div className="flex flex-col justify-center items-center w-[90%] mb-1">
          <button
            onClick={() => {
              handleShowProject(project);
              handleInteraction("view");
            }}
            className="w-[100%] h-8 m-1  border-2  border-white rounded-xl hover:bg-blue-500 "
          >
            Explore Details
          </button>

          {projectData.status === 3 && (
            <button className="w-[100%] h-8 m-1 border-2  border-white rounded-xl">
              Live Project
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailCard;
