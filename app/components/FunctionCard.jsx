"use client";

import Image from "next/image";
import img2 from "@/public/images/img2.jpeg";
import { useRouter } from "next/navigation";
const FunctionCard = ({}) => {
  const router = useRouter();
  const handleProfileClick = () => {
    router.push("/profile");
  };

  return (
    <div className="flex flex-row justify-around p-3 bg-gradient-to-r from-[#ffffff] to-[#ffffff] h-[40rem]">
      <div className="flex flex-col w-[25%] justify-center items-start ml-[10%]">
        <div className="flex flex-col justify-start items-start">
          <h1 className="text-4xl font-bold m-1 text-black">Showcase</h1>
          <h1 className="text-4xl font-bold m-1 text-black">your</h1>
          <h1 className="text-4xl font-bold m-1 text-black">innovation</h1>
          <h1 className="text-4xl font-bold m-1 text-black">Here!</h1>
          <h6 className="text-xs mt-2 text-black">
            <b>Share and discover projects</b>
          </h6>
        </div>
        <div className="flex mt-5 w-[40%]">
          <button
            onClick={() => handleProfileClick()}
            className="flex justify-center items-center w-[100%] p-1 border-2 border-[#0F3443] bg-[#0F3443] rounded-2xl"
          >
            Get Started
          </button>
        </div>
      </div>

      <div className="flex w-[60%] justify-center items-center">
        <div className="border-2 border-white h-[60%] w-[80%]">
          <Image
            className={`flex-none w-[100%] h-[100%] `}
            src={img2}
            alt={"not loaded properly"}
          />
        </div>
      </div>
    </div>
  );
};

const AboutUsCard = ({}) => {
  return (
    <div className="flex flex-row justify-around p-3 bg-[#0F3443] h-[30rem]">
      <div className="flex flex-col w-[60%] justify-center items-start ml-[5%] mr-[5%]">
        <div className="flex flex-col justify-start items-start">
          <h1 className="text-4xl font-bold m-1 text-white">About Us</h1>
          <p className="text-sm text-gray-200 font-serif">
            At [Your Project/Organization Name], we are passionate about
            [describe the core focus of your project, e.g., technology,
            education, sustainability, etc.]. Our mission is to [briefly
            describe the primary goal or purpose of your project, e.g., "empower
            individuals through technology," "make education accessible to all,"
            "promote sustainable living," etc.].
          </p>
        </div>
      </div>

      <div className="flex flex-col w-[60%] justify-center items-start ml-[5%] mr-[5%]">
        <div className="flex flex-col justify-start items-start">
          <h1 className="text-4xl font-bold m-1 text-white">Get Involved</h1>
          <p className="text-sm text-gray-200 font-serif">
            We invite you to join us on this journey. Whether you're interested
            in [mention ways people can engage with your project, e.g., using
            your products/services, joining your community, contributing to your
            cause, etc.], there's a place for you in our [Your
            Project/Organization Name] family.
          </p>
        </div>
      </div>
    </div>
  );
};

export { FunctionCard, AboutUsCard };
