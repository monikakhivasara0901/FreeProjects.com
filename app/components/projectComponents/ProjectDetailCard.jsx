import React, { useState } from "react";
import Image1 from "@/public/images/image1.jpg";
import Image2 from "@/public/images/image2.jpeg";
import Image3 from "@/public/images/image3.jpeg";
import Image from "next/image";
import leftArrow from "@/public/icons/left-arrow.png";
import rightArrow from "@/public/icons/right-arrow.png";

const ProjectDetailCard = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

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

  return (
    <div className="flex flex-wrap items-center justify-between border-2 ml-3 mt-3 h-56 w-[98%]">
      <div className="flex flex-none h-[95%] w-[35%] ml-1 items-center relative">
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

      <div className="flex-1 border-r-2 p-2 h-[100%] w-[40%] mx-1 items-center justify-center">
        <h1 className="font-bold text-xl mb-2">Project Name</h1>
        <p className="text-wrap text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
          doloribus dignissimos aperiam aliquam eaque, possimus nam rem harum
          libero esse?
        </p>
      </div>
      <div className="flex-none h-[100%] w-[25%] mx-1">
        <h1>Rating</h1>
      </div>
    </div>
  );
};

export default ProjectDetailCard;
