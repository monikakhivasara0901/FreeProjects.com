const ProjectDetailCard = ({}) => {
  return (
    <div className="flex flex-wrap items-center  justify-between border-2 ml-3 p-2 h-52 w-[95%]">
      <div className="flex flex-none border-2 h-[100%] w-[35%] mx-1  items-center overflow-auto scrollbar-hide">
        <img className="flex-none w-[100%] h-[100%] bg-orange-500" src="" alt="Image1" />
        <img className="flex-none w-[100%] h-[100%] bg-white" src="" alt="Image2" />
        <img className="flex-none w-[100%] h-[100%] bg-green-500" src="" alt="Image3" />
      </div>
      <div className="flex-1 border-r-2 h-[100%] w-[40%] mx-1 bg-red-500 items-center justify-center">
        <h1 className="">Project Name</h1>
        <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam doloribus dignissimos aperiam aliquam eaque, possimus nam rem harum libero esse?</p>
      </div>
      <div className="flex-none h-[100%] w-[25%] mx-1">
        <h1>Rating</h1>
      </div>
    </div>
  );
};

export default ProjectDetailCard;
