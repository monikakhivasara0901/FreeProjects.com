const NavBar = ({setLoginSignup, setType}) => {
  const handleLoginSignup = (type) => {
    setType(type);
    setLoginSignup(true);
  }
    return <div>
      <nav className="p-3 bg-[#0A1436]" >
      
          <div className=" flex flex-row justify-between items-center">
            <div>
              <h1 className="m-2 text-3xl font-bold">FreeProjects.com</h1>
              <div className="flex-row">
                <a className="m-2" href="/home">
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
              <button onClick={() => handleLoginSignup("login")} className="p-2 w-20 border-2 border-white rounded-2xl m-2">
                Login
              </button>
              <button onClick={() => handleLoginSignup("signup")} className="p-2 w-20 border-2 border-white rounded-2xl m-2">
                Sign up
              </button>
            </div>
          </div>
        </nav>
    </div>
  }
  
  export default NavBar