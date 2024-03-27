import ProjectDetailCard from "@/app/components/projectComponents/ProjectDetailCard";


const ProjectViewContainer = ({}) => {
  const filters=["HTML", "CSS", "JavaScript", "HTML", "CSS", "JavaScript", "HTML", "CSS", "JavaScript"]
  return (
    <div className="flex-1">
       <div className="flex flex-row items-center justify-between h-10 pl-2 pr-2 bg-[#0a1537]">
        <div className="flex flex-row items-center">
        <h1 className="pl-2">Filters : </h1>
        <div className=" flex flex-row max-w-[80%] p-2 overflow-x-scroll scrollbar-hide">{filters.map(item=><div className="mr-2">{item}</div>)}</div>
        </div>
        <div className="flex ml-1 flex-end w-20"><h3 className="mr-1">300</h3> Items</div>
    
      </div>
        <div className="flex-none h-[96%] w-[100%] whitespace-nowrap overflow-auto scrollbar-hide p-1 bg-slate-700">
        <ProjectDetailCard/>
        <ProjectDetailCard/>
        <ProjectDetailCard/>
        <ProjectDetailCard/>
    </div>
    </div>
  );
};

export default ProjectViewContainer;
