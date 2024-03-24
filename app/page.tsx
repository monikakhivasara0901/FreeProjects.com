
"use client";
import { NextPage } from "next";
import { useState } from "react";
import NavBar from "@/app/components/NavBar";
import LoginSignUp from "@/app/components/LoginSignUp";
import FunctionCard from "@/app/components/FunctionCard";
interface Props {}

const Page: NextPage<Props> = ({}) => {
  
  return (
    <div className="flex-1 p-3 bg-[#0A1436]">
      
      <NavBar />
      <FunctionCard />
    </div>
  );
};

export default Page;