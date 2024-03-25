
"use client";
import { NextPage } from "next";
import FunctionCard from "@/app/components/FunctionCard";
interface Props {}

const Page: NextPage<Props> = ({}) => {
  
  return (
    <div className="flex-1 p-3 bg-[#0A1436]">
      <FunctionCard />
      <FunctionCard />
    </div>
  );
};

export default Page;