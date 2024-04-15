import ProjectDetailCard from "@/app/components/projectComponents/ProjectDetailCard";
import ProjectDescriptionBox from "@/app/components/ProjectDescriptionBox";
import { useEffect, useMemo, useState } from "react";
import deleteImg from "@/public/icons/delete.png";
import Image from "next/image";

const ProjectViewContainer = ({
  matchedProjects,
  selectedFilters,
  setFilters,
  handleApplyFilters,
}) => {
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
        <div className="flex flex-row items-center w-28">
          <h1 className="text-white">Filters : </h1>
        </div>
        <div className="flex flex-row w-full h-8 justify-start overflow-scroll scrollbar-hide">
          {selectedFilters.map((filter, index) => (
            <h1 key={index} className="w-auto h-10 m-1 mr-3">
              {filter}
            </h1>
          ))}
        </div>
        <div className="flex  bg-red-600 rounded-lg p-1">
          <Image
            src={deleteImg}
            alt="DeleteImg"
            onClick={() => {
              setFilters({
                Technology: [],
                University: [],
                SearchBox: [],
              });

              // handleApplyFilters();
            }}
            className="w-[30px] h-[20px] "
            style={{ filter: "invert(100%)" }}
          />
        </div>
        <div className="flex ml-1 flex-end w-20">
          <h3 className="mr-1">
            {matchedProjects !== undefined ? matchedProjects.length : 0}
          </h3>{" "}
          Projects
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
