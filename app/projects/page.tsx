"use client";
import { NextPage } from "next";
import NavBar from "@/app/components/NavBar";
import ProjectTopContainer from "@/app/components/projectComponents/ProjectTopContainer";
import FilterBox from "@/app/components/projectComponents/FilterBox";
import ProjectViewContainer from "@/app/components/projectComponents/ProjectViewContainer";
import { useState } from "react";

interface Props {}

const Page: NextPage<Props> = ({}) => {
  const [loginSignUp, setLoginSignup] = useState(false);
  const [type, setType] = useState("login");
  
  return (
    <div className="flex flex-col flex-1  h-[110vh]">
      <NavBar setLoginSignup={setLoginSignup} setType={setType} />
      <ProjectTopContainer />
      <div className="flex h-[100%] flex-row">
        <FilterBox />
        <ProjectViewContainer/>
      </div>
    </div>
  );
};

export default Page;
