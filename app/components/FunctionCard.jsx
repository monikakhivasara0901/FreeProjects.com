// const FunctionCard = ({}) => {
//   return (
//     <div className="flex flex-row justify-around p-3 bg-[#0A1436] h-[30rem]">
//       <div className="flex flex-col w-[30%] justify-center items-start ml-[10%]">
//         <div className="flex flex-col justify-start items-start">
//           <h1 className="text-4xl font-bold m-1">Showcase</h1>
//           <h1 className="text-4xl font-bold m-1">your</h1>
//           <h1 className="text-4xl font-bold m-1">innovation</h1>
//           <h1 className="text-4xl font-bold m-1">Here!</h1>
//           <h6 className="text-xs mt-2">Share and discover projects</h6>
//         </div>
//         <div className="flex mt-5 w-[40%]">
//           <button className="flex justify-center items-center w-[100%] p-1 border-2 border-red-600 bg-red-600 rounded-2xl">
//             Get Started
//           </button>
//         </div>
//       </div>

//       <div className="flex w-[60%] justify-center items-center">
//         <div className="border-2 border-white h-[60%] w-[80%]"></div>
//       </div>
//     </div>
//   );
// };

// export default FunctionCard;



const FunctionCard = ({}) => {
  return (
    <div className="flex flex-row justify-around p-3 bg-gradient-to-r from-[#f1f2b5] to-[#135058] h-[50rem]">
      <div className="flex flex-col w-[25%] justify-center items-start ml-[10%]">
        <div className="flex flex-col justify-start items-start">
          <h1 className="text-4xl font-bold m-1 text-black">Showcase</h1>
          <h1 className="text-4xl font-bold m-1 text-black">your</h1>
          <h1 className="text-4xl font-bold m-1 text-black">innovation</h1>
          <h1 className="text-4xl font-bold m-1 text-black">Here!</h1>
          <h6 className="text-xs mt-2 text-black">Share and discover projects</h6>
        </div>
        <div className="flex mt-5 w-[40%]">
          <button className="flex justify-center items-center w-[100%] p-1 border-2 border-red-600 bg-red-600 rounded-2xl">
            Get Started
          </button>
        </div>
      </div>

      <div className="flex w-[60%] justify-center items-center">
        <div className="border-2 border-white h-[60%] w-[80%]"></div>
      </div>
    </div>
  );
};

const AboutUsCard = ({}) => {
  return (
    <div className="flex flex-row justify-around p-3 bg-[#0F3443] h-[30rem]">
      <div className="flex flex-col w-[60%] justify-center items-start ml-[10%]">
        <div className="flex flex-col justify-start items-start">
          <h1 className="text-4xl font-bold m-1 text-white">About Us</h1>
          <p className="text-sm text-gray-200 font-serif">
            At [Your Project/Organization Name], we are passionate about [describe the core focus of your project, e.g., technology, education, sustainability, etc.]. Our mission is to [briefly describe the primary goal or purpose of your project, e.g., "empower individuals through technology," "make education accessible to all," "promote sustainable living," etc.].
          </p>
        </div>
      </div>

     

      <div className="flex flex-col w-[60%] justify-center items-start ml-[10%]">
        <div className="flex flex-col justify-start items-start">
          <h1 className="text-4xl font-bold m-1 text-white">Get Involved</h1>
          <p className="text-sm text-gray-200 font-serif">
            We invite you to join us on this journey. Whether you're interested in [mention ways people can engage with your project, e.g., using your products/services, joining your community, contributing to your cause, etc.], there's a place for you in our [Your Project/Organization Name] family.
          </p>
        </div>
      </div>

    </div>
  );
};

export { FunctionCard, AboutUsCard };



