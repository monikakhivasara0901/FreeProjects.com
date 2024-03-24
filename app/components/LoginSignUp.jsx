import { useState } from "react";

const LoginSignUp = ({ type, setType, setLoginSignup }) => {
  const [signup, setSignup] = useState(type == "login" ? false : true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [username, setUsername] = useState("");
  const [fullname, setFullName] = useState("");

  const handleLoginSignUpSubmit = (event) => {
    event.preventDefault();
    console.log(signup);
    if (signup) {
      console.log("Signup");
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
        .then((response) => response.json())
        .then((data) => {
            console.log("response",data);
            if(data.success){
              setLoginSignup(false)
            }
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    } else {
      console.log("Login");
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
        .then((response) => response.json())
        .then((data) => {
          console.log("responce",data);
          if(data.success){
            setLoginSignup(false)
          }
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  };

  const toggleSignup = () => {
    setSignup((prevState) => !prevState);
    setType((prevState) => (prevState == "login" ? "signup" : "login"));
  };

  return (
    <div className="flex w-[100vw] h-[100vh] justify-center items-center bg-[#03050c]">
      <form
      onSubmit={handleLoginSignUpSubmit}
      className="flex items-center justify-center absolute left-[40%]"
    >
      <button
        onClick={() => setLoginSignup(false)}
        className="absolute top-2 right-2 text-2xl bg-gray-500 hover:bg-gray-600 cursor-pointer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 text-black border-2 border-gray-350 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <button
            type="submit"
            onClick={(signup) => handleLoginSignUpSubmit(signup)}
            className="w-full bg-blue-500 text-white px-4 py-3 rounded-md hover:bg-blue-600 transition duration-300 ease-in-out"
          >
            {signup ? "Sign Up" : "Login"}
          </button>
        </form>
        <p className="mt-4 text-center text-gray-800">
          {signup ? "Already have an account?" : "Create New Account?"}
          <button
            onClick={toggleSignup}
            className="text-blue-600 hover:underline ml-1"
          >
            {signup ? "Login" : "Sign Up"}
          </button>
        </p>
      </div>
    </form>
    </div>
  );
};

export default LoginSignUp;
