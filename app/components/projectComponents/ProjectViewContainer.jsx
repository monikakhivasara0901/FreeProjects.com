import ProjectDetailCard from "@/app/components/projectComponents/ProjectDetailCard";
import ProjectDescriptionBox from "@/app/components/ProjectDescriptionBox";
import { useEffect, useState } from "react";

const ProjectViewContainer = ({ matchedProjects }) => {
  const filters = [
    "HTML",
    "CSS",
    "JavaScript",
    "HTML",
    "CSS",
    "JavaScript",
    "HTML",
    "CSS",
    "JavaScript",
  ];

  // console.log(matchedProjects, "matchedProjects");

  const [showProjectDetails, setShowProjectDetails] = useState(false);
  const [showProjectDetailsData, setShowProjectDetailsData] = useState(false);

  const [matchedProjectsData, setMatchedProjectsData] = useState();

  // console.log(matchedProjectsData, "matchedProjectsData");

  useEffect(() => {
    setMatchedProjectsData(matchedProjects);
  }, [matchedProjects]);

  const handleShowProject = (projectDetails) => {
    setShowProjectDetailsData(projectDetails);
    setShowProjectDetails(true);
    console.log(projectDetails);
    console.log("clicked");
  };

  return (
    <div className="flex-1">
      <div className="flex flex-row items-center justify-between h-10 pl-2 pr-2 bg-[#0a1537]">
        <div className="flex flex-row items-center">
          <h1 className="pl-2">Filters : </h1>
          <div className=" flex flex-row max-w-[80%] p-2 overflow-x-scroll scrollbar-hide">
            {filters.map((item) => (
              <div className="mr-2">{item}</div>
            ))}
          </div>
        </div>
        <div className="flex ml-1 flex-end w-20">
          <h3 className="mr-1">300</h3> Items
        </div>
      </div>
      {showProjectDetails ? (
        <ProjectDescriptionBox
          setShowProjectDetails={setShowProjectDetails}
          showProjectDetailsData={showProjectDetailsData}
        />
      ) : (
        <div className="flex-none h-[96%] w-[100%] whitespace-nowrap overflow-auto scrollbar-hide p-1 bg-slate-700">
          {/* <ProjectDetailCard handleShowProject={handleShowProject} project={project}/> */}
          {matchedProjectsData != undefined &&
            matchedProjectsData.map((project) => (
              <ProjectDetailCard
                handleShowProject={handleShowProject}
                project={project.document}
              />
            ))}
        </div>
      )}
    </div>
  );
};

export default ProjectViewContainer;
