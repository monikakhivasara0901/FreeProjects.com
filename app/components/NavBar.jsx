'use client';
import { useState } from "react";
import LoginSignUp from "@/app/components/LoginSignUp";

const NavBar = () => {
  const [loginSignUp, setLoginSignup] = useState(false);
  const [type, setType] = useState(true);
  const handleLoginSignup = (type) => {
    if (type == "login") {
      setType(false);
    } else {
      setType(true);
    }
    setLoginSignup(true);
  };
  return (
    <div>
      {loginSignUp && (
        <LoginSignUp
          type={type}
          setLoginSignup={setLoginSignup}
        />
      )}
      <nav className="p-3 bg-[#0A1436]">
        <div className=" flex flex-row justify-between items-center">
          <div>
            <h1 className="m-2 text-3xl font-bold">FreeProjects.com</h1>
            <div className="flex-row">
              <a className="m-2" href="/">
                Home
              </a>
              <a className="m-2" href="/projects">
                Projects
              </a>
              <a className="m-2" href="#">
                About us
              </a>
              <a className="m-2" href="#">
                Demo
              </a>
            </div>
          </div>

          <div className="flex-row justify-center items-center h-[100%]">
            <button
              onClick={() => handleLoginSignup("login")}
              className="p-2 w-20 border-2 border-white rounded-2xl m-2"
            >
              Login
            </button>
            <button
              onClick={() => handleLoginSignup("signup")}
              className="p-2 w-20 border-2 border-white rounded-2xl m-2"
            >
              Sign up
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
