const FunctionCard = ({}) => {
    return (
      <div className="flex flex-row p-3 bg-[#0A1436] h-[30rem]">
        <div className="flex flex-col w-[50%] justify-center items-center">
        <div className="flex flex-col justify-start items-start">
          <h1 className="text-4xl font-bold m-1">Showcase</h1>
          <h1 className="text-4xl font-bold m-1">your</h1>
          <h1 className="text-4xl font-bold m-1">innovation</h1>
          <h1 className="text-4xl font-bold m-1">Here!</h1>
          <h6 className="text-xs mt-2">Share and discover projects</h6>
        </div>
  <div className="w-[60%] mt-1">
  <button className="m-2 p-1 border-2 border-red-600 bg-red-600 rounded-2xl">Get Started</button>
  
  </div>
        </div>
  
        <div className="flex w-[50%] justify-center items-center">
        <div className="border-2 border-white h-[60%] w-[80%]" ></div>
        </div>
      </div>
    );
  };
  
  export default FunctionCard;
  