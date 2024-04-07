"use client";
import { NextPage } from "next";
import ProjectTopContainer from "@/app/components/projectComponents/ProjectTopContainer";
import FilterBox from "@/app/components/projectComponents/FilterBox";
import ProjectViewContainer from "@/app/components/projectComponents/ProjectViewContainer";
import { useEffect, useState } from "react";

interface Props {}

const Page: NextPage<Props> = ({}) => {
  const [matchedProjects, setMatchedProjects] = useState([]);
  const [filters, setFilters] = useState({ Technology: [], University: [] });

  // Combine technologies and universities into a single array
  const selectedFilters = [...filters.Technology, ...filters.University];

  const handleApplyFilters=()=>{
    console.log(selectedFilters,"--------------------");
    
    fetch("/api/search", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        technologies: selectedFilters,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setMatchedProjects(data.matchedProjects);
      });
  }

  useEffect(() => {
  },[matchedProjects])

  useEffect(() => {
    fetch("/api/search", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        technologies: [],
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setMatchedProjects(data.matchedProjects);
      });
  }, []); // Fetch data whenever selectedFilters array changes

  return (
    <div className="flex flex-col flex-1 h-[110vh]">
      <ProjectTopContainer />
      <div className="flex h-[100%] flex-row">
        <FilterBox handleApplyFilters={handleApplyFilters} setFilters={setFilters} filters={filters} />
        <ProjectViewContainer matchedProjects={matchedProjects} />
      </div>
    </div>
  );
};

export default Page;
