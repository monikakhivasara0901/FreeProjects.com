'use client'
import { NextPage } from "next";
import NavBar from "../components/NavBar"
import FunctionCard from "../components/FunctionCard"
import LoginSignUp from "../components/LoginSignUp"
interface Props {}

const Page: NextPage<Props> = ({}) => {
  return (
    <div className="flex-1 p-3 bg-[#0A1436]">
      <NavBar/>
      <LoginSignUp/>
            <FunctionCard/>
    </div>
  );
};

export default Page;
