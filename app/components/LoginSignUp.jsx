"use client";
import Image from "next/image";
import { useState } from "react";

const LoginSignUp = ({ type, setLoginSignup }) => {
  const [signup, setSignup] = useState(type);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [conformpassword, setConformPassword] = useState("");
  const [username, setUsername] = useState("");
  const [fullname, setFullName] = useState("");

  const handleLoginSignUpSubmit = (event) => {
    event.preventDefault();
    if (signup) {
      console.log("signup");
      if (password == conformpassword && password.length > 3) {

        console.log("password match");
        fetch("http://localhost:3000/api/signup/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            fullname: fullname,
            username: username,
            email: email,
            password: password,
          }),
        })
          .then(async (response) => {
            const data= await response.json();
            console.log("response", data);
            if (data.success) {
              setLoginSignup(false);
            }else{
              alert(data.message)
            }
          })
          .catch((error) => {
            console.error("Error:", error);
          });
      } else {
        alert("password not match or less than 3 characters");
      }
    } else {
      console.log("login");
      fetch("http://localhost:3000/api/login/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      })
        .then(async (response) => {
          const data= await response.json();
          console.log("responce", data);
          if (data.success) {
            setLoginSignup(false);
          }else{
            alert(data.message)
          }
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  };

  const toggleSignup = (event) => {
    event.preventDefault();
    setSignup(!signup);
  };

  return (
    <div className="flex absolute justify-center items-center w-[100vw] h-[100vh] bg-transparent backdrop-filter backdrop-blur-[5px]">
      <div
        className="flex items-center justify-center absolute left-[40%]"
      >
        <button
          onClick={() => setLoginSignup(false)}
          className="absolute top-2 right-2 text-2xl cursor-pointer"
        >
          <Image src="/icons/close.png" alt="close" width={15} height={15} />
        </button>
        <div className="container w-[58vh] px-6 py-8 bg-white rounded-lg shadow-md justify-center items-center ">
          <h2 className="text-3xl font-semibold text-center text-gray-800 mb-2">
            {signup ? "Sign Up" : "Welcome back!"}
          </h2>
          <p className="text-center text-gray-700 mb-6">
            {signup
              ? "Join us to explore new opportunities."
              : "Your Next Project is Just a Click Away."}
          </p>
          <form className="space-y-4">
            {signup && (
              <div>
                <input
                  type="text"
                  id="fullname"
                  name="fullname"
                  placeholder="Full Name"
                  required
                  value={fullname}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full px-4 py-3 text-black border-2 border-gray-350 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
            )}
            {signup && (
              <div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 text-black border-2 border-gray-350 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
            )}
            <div>
              <input
                type="text"
                id="username"
                name="username"
                placeholder="Username"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-3 text-black border-2 border-gray-350 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 text-black border-2 border-gray-350 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            {signup && (
              <div>
                <input
                  type="password"
                  id="conformpassword"
                  name="conformpassword"
                  placeholder="Conform Password"
                  required
                  value={conformpassword}
                  onChange={(e) => setConformPassword(e.target.value)}
                  className="w-full px-4 py-3 text-black border-2 border-gray-350 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
            )}
            <button
              type="submit"
              onClick={(event) => handleLoginSignUpSubmit(event)}
              className="w-full bg-blue-500 text-white px-4 py-3 rounded-md hover:bg-blue-600 transition duration-300 ease-in-out"
            >
              {signup ? "Sign Up" : "Login"}
            </button>
          </form>
          <p className="mt-4 text-center text-gray-800">
            {signup ? "Already have an account?" : "Create New Account?"}
            <button
              onClick={(event) => toggleSignup(event)}
              className="text-blue-600 hover:underline ml-1"
            >
              {signup ? "Login" : "Sign Up"}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginSignUp;
