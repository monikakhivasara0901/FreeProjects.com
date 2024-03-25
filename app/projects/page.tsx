"use client";
import { NextPage } from "next";
import ProjectTopContainer from "@/app/components/projectComponents/ProjectTopContainer";
import FilterBox from "@/app/components/projectComponents/FilterBox";
import ProjectViewContainer from "@/app/components/projectComponents/ProjectViewContainer";
import { useState } from "react";

interface Props {}

const Page: NextPage<Props> = ({}) => {
  return (
    <div className="flex flex-col flex-1  h-[110vh]">
      <ProjectTopContainer />
      <div className="flex h-[100%] flex-row">
        <FilterBox />
        <ProjectViewContainer/>
      </div>
    </div>
  );
};

export default Page;
