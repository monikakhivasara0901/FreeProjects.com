import ProjectDetailCard from "@/app/components/projectComponents/ProjectDetailCard";
import ProjectDescriptionBox from "@/app/components/ProjectDescriptionBox";
import { useEffect, useMemo, useState } from "react";

const ProjectViewContainer = ({ matchedProjects, selectedFilters }) => {
  const [showProjectDetails, setShowProjectDetails] = useState(false);
  const [showProjectDetailsData, setShowProjectDetailsData] = useState(false);

  const memoizedValue = useMemo(() => matchedProjects, [matchedProjects]);

  const handleShowProject = (projectDetails) => {
    setShowProjectDetailsData(projectDetails);
    setShowProjectDetails(true);
  };

  return (
    <div className="flex-1">
      <div className="flex flex-row items-center justify-between h-10 pl-2 pr-2 bg-[#0a1537]">
        <div className="flex flex-row items-center w-20">
          <h1 className="text-white">Filters : </h1>
        </div>
        <div className="flex flex-row w-full h-8 justify-start overflow-scroll scrollbar-hide">
          {selectedFilters.map((filter, index) => (
            <h1 key={index} className="w-auto h-10 m-1 mr-3">
              {filter}
            </h1>
          ))}
        </div>

        <div className="flex ml-1 flex-end w-20">
          <h3 className="mr-1">
            {matchedProjects !== undefined ? matchedProjects.length : 0}
          </h3>{" "}
          Items
        </div>
      </div>
      {showProjectDetails ? (
        <ProjectDescriptionBox
          setShowProjectDetails={setShowProjectDetails}
          showProjectDetailsData={showProjectDetailsData}
        />
      ) : (
        <div className="flex-none h-[96%] w-[100%] whitespace-nowrap overflow-auto scrollbar-hide p-1 bg-slate-700">
          {memoizedValue != undefined &&
            memoizedValue.map((project) => (
              <ProjectDetailCard
                key={project.document.id}
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
