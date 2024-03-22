"use client";
import { NextPage } from "next";
import NavBar from "../components/NavBar";
import FunctionCard from "../components/FunctionCard";
import LoginSignUp from "../components/LoginSignUp";
import { useState } from "react";
interface Props {}

const Page: NextPage<Props> = ({}) => {
  const [loginSignUp, setLoginSignup] = useState(false);
  const [type, setType] = useState("login");
  return (
    <div className="flex-1 p-3 bg-[#0A1436]">
      <NavBar setLoginSignup={setLoginSignup} setType={setType}/>
      {loginSignUp && <LoginSignUp type={type} setType={setType} setLoginSignup={setLoginSignup}/>}
      <FunctionCard />
    </div>
  );
};

export default Page;
