"use client";
import { NextPage } from "next";
import ProjectTopContainer from "@/app/components/projectComponents/ProjectTopContainer";
import FilterBox from "@/app/components/projectComponents/FilterBox";
import ProjectViewContainer from "@/app/components/projectComponents/ProjectViewContainer";
import { useEffect, useState } from "react";

interface Props {}

const Page: NextPage<Props> = ({}) => {

  const [matchedProjects, setMatchedProjects] = useState([]);

  useEffect(() => {
    fetch("/api/search", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            "technologies": ["HTML", "CSS"]
        }),
        }).then((res) => res.json())
        .then((data) => {
          setMatchedProjects(data.matchedProjects);
        });
  }, []);

  return (
    <div className="flex flex-col flex-1  h-[110vh]">
      <ProjectTopContainer />
      <div className="flex h-[100%] flex-row">
        <FilterBox />
        <ProjectViewContainer matchedProjects={matchedProjects}/>
      </div>
    </div>
  );
};

export default Page;
