"use client";
import { useState } from "react";
import LoginSignUp from "@/app/components/LoginSignUp";
import Image from "next/image";
import profilepic from "@/public/images/profile-pic-temp.webp";
import Link from "next/link";
import { useRouter } from "next/navigation";

const NavBar = () => {
  const [loginSignUp, setLoginSignup] = useState(false);
  const [type, setType] = useState(true);
  const router = useRouter();
  const handleLoginSignup = (type) => {
    if (type == "login") {
      setType(false);
    } else {
      setType(true);
    }
    setLoginSignup(true);
  };

  const handleProfileClick = () => {
    router.push("/profile"); 
  };
  return (
    <div>
      {loginSignUp && (
        <LoginSignUp type={type} setLoginSignup={setLoginSignup} />
      )}
      <nav className="p-3 bg-gradient-to-r from-[#f1f2b5] to-[#135058]">
        <div className=" flex flex-row justify-between items-center">
          <div>
            <h1 className="m-2 text-3xl font-bold text-black">FreeProjects.com</h1>
            <div className="flex-row">
              <a className="m-2 text-black" href="/">
                Home
              </a>
              <a className="m-2 text-black" href="/projects">
                Projects
              </a>
              <a className="m-2 text-black" href="#">
                About us
              </a>
            </div>
          </div>

          <div className="flex flex-row justify-center items-center h-[100%]">
            <button
              onClick={() => handleLoginSignup("login")}
              className="p-2 w-20 border-2 border-[#98a8ab] rounded-2xl m-2"
            >
              Login
            </button>
            <button
              onClick={() => handleLoginSignup("signup")}
              className="p-2 w-20 border-2 border-[#98a8ab] rounded-2xl m-2"
            >
              Sign up
            </button>
            <Link href="/profile">
              <div className="border-2 border-[#98a8ab] border-spacing-7 rounded-full m-2" onClick={handleProfileClick}>
                <Image src={profilepic} alt="profile" width={60} height={60}  className="rounded-full"/>
              </div>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
