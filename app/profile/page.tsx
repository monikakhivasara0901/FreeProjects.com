"use client";
import { NextPage } from "next";
import Image from "next/image";
import profilepic from "@/public/images/profile-pic-temp.webp";
import ProjectUploadForm from "@/app/components/ProfileScreenComponents/ProjectUploadForm";
import linkedin from "@/public/icons/linkedin.png";
import github from "@/public/icons/github.png";
import link from "@/public/icons/link.png";
import menu from "@/public/icons/menu.png";
import ProjectDetailCard from "@/app/components/projectComponents/ProjectDetailCard";
import ProfileInfo from "@/app/components/ProfileScreenComponents/ProfileInfo";
import { useState } from "react";

interface Props {}

const Page: NextPage<Props> = ({}) => {
  const [showData, setShowData] = useState(0);

  return (
    <div className="flex flex-1 flex-row h-[95vh] w-[100%]">
      <div className="flex flex-none w-[25%]  p-2 bg-blue-950 flex-col justify-between items-center">
        <div className="flex flex-col justify-center items-center">
          <Image
            src={profilepic}
            alt="profile"
            className="h-48 w-48 rounded-full border-2 border-white m-2"
          />
          <div className="flex flex-row justify-between items-center m-1 w-[50%]">
            <button className="h-5 w-5 m-1">
              <Image
                src={link}
                alt="Personal Website"
                className="w-[20px] h-[20px]"
                style={{ filter: "invert(100%)" }}
              />
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
          <h1 className="mt-1 text-xl text-center font-bold">Full Name</h1>
          <h2 className="mt-1 text-base text-center font-bold">username</h2>
          <h3 className="mt-1 text-sm text-center font-bold">
            email@gmail.com
          </h3>
        </div>
        <h1>Created At</h1>
      </div>

      <div className="flex flex-1 flex-col w-[75%] bg-slate-700">
        <div className="flex w-[100%] justify-between bg-slate-800">
          <button
            onClick={() => setShowData(0)}
            className={`w-[10%] h-8 ${showData !== 1 && "border-r-2 border-r-slate-700"} flex flex-row items-center justify-center ${
              showData === 0 && "bg-slate-700 rounded-tr-lg"
            }`}
          >
            <Image
              src={menu}
              alt="Details"
              className="w-[30px] h-[20px]"
              style={{ filter: "invert(100%)" }}
            />
          </button>
          <button
            onClick={() => setShowData(1)}
            className={`w-[100%] h-8 ${showData !== 2 && "border-r-2 border-r-slate-700"} flex flex-row items-center ${
              showData === 1 && "bg-slate-700 rounded-t-lg"
            }`}
          >
            <h1 className="text-center w-[100%]">My Projects</h1>
            <h1 className="justify-center text-center w-[10%]">1</h1>
          </button>
          <button
            onClick={() => setShowData(2)}
            className={`w-[100%] h-8 ${showData !== 3 && "border-r-2 border-r-slate-700"} flex flex-row items-center ${
              showData === 2 && "bg-slate-700 rounded-t-lg"
            }`}
          >
            <h1 className="text-center w-[100%]">Saved Projects</h1>
            <h1 className="justify-center text-center w-[10%]">2</h1>
          </button>
          <button
            onClick={() => setShowData(3)}
            className={`w-[100%] h-8 border-r-2 ${
              showData === 3 && "bg-slate-700 rounded-t-lg"
            }`}
          >
            <h1 className="text-center w-[100%]">Upload New Project</h1>
          </button>
        </div>
        <div className="w-[100%] h-[100%] overflow-scroll scrollbar-hide">
          {showData == 0 && <ProfileInfo/>}
          {showData == 1 && (
            <>
              <ProjectDetailCard />
            </>
          )}
          {showData == 2 && (
            <>
              <ProjectDetailCard />
              <ProjectDetailCard />
            </>
          )}
          {showData == 3 && (
            <>
              <ProjectUploadForm/>
            </>
          )}
        </div>
      </div>

    </div>
  );
};

export default Page;
