"use client";
import { NextPage } from "next";
import NavBar from "../components/NavBar";
import ProjectTopContainer from "../components/ProjectTopContainer";
import FilterBox from "../components/FilterBox";
import ProjectViewContainer from "../components/ProjectViewContainer";
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
