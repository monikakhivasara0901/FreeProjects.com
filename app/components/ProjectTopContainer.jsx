const ProjectTopContainer = ({}) => {
  let technologies = [
    "HTML",
    "CSS",
    "JavaScript",
    "Java",
    "Python",
    "React",
    "Node.js",
    "Ruby",
  ];
  return (
    <div className="flex-1 ">
      <div className="flex flex-row items-center h-10 bg-[#303b5f]">
        <div className="flex-row w-[70%]">
          {technologies.map((item) => (
            <button key={item} className="m-1 ml-2">
              {item}
            </button>
          ))}
        </div>
        <div className="flex items-center w-[30%] justify-center pl-2">
           <input type="text" className="w-[80%] h-8 rounded-md text-gray-400 p-1 bg-gray-200" placeholder="Search Here..."/>
            <button className="ml-2 w-[18%] h-8  border-2  border-white rounded-xl">Search</button>
        </div>
      </div>
    </div>
  );
};

export default ProjectTopContainer;
