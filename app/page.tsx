
"use client";
import { NextPage } from "next";
import {FunctionCard, AboutUsCard} from "@/app/components/FunctionCard";
interface Props {}

const Page: NextPage<Props> = ({}) => {
  
  return (
    <div className="flex-1 p-3 bg-[#ffffff]">
      <FunctionCard />
      <AboutUsCard />
    </div>
  );
};

export default Page;