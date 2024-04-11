import profilepic from "@/public/images/profile-pic-temp.webp";
import github from "@/public/icons/github.png";
import linkedin from "@/public/icons/linkedin.png";
import link from "@/public/icons/link.png";
import editprofile from "@/public/icons/editprofile.png";
import saveporfile from "@/public/icons/saveprofile.png";
import photocamera from "@/public/icons/photo-camera.png";
import layer from "@/public/icons/layer.png";
import Image from "next/image";
import Link from "next/link";
import { technologiesData } from "@/utils/data";
import { useEffect, useState } from "react";

const ProfileInfo = ({ UserProfileData }) => {
  const [edit, setEdit] = useState(false);
  const [selectedTechnologies, setSelectedTechnologies] = useState([]);
  const [ProfileData, setProfileData] = useState(UserProfileData);

  useEffect(() => {
    setProfileData(UserProfileData);
  });

  const projects = [
    { id: 1, name: "Project 1" },
    { id: 2, name: "Project 2" },
    { id: 3, name: "Project 3" },
    { id: 4, name: "Project 4" },
    { id: 5, name: "Project 5" },
    { id: 6, name: "Project 6" },
  ];

  const handleCheckboxChange = (technology) => {
    const isSelected = selectedTechnologies.some((t) => t.id === technology.id);
    if (isSelected) {
      setSelectedTechnologies(
        selectedTechnologies.filter((t) => t.id !== technology.id)
      );
    } else {
      setSelectedTechnologies([...selectedTechnologies, technology]);
    }
  };

  return (
    <div className="flex flex-col h-[95vh] overflow-y-auto scrollbar-hide">
      <div className="flex  flex-none flex-col h-[34%] w-[100%] relative">
        <div className="bg-[#0A1436] h-[50%] w-[100%] pl-[27%] relative">
          {!edit ? (
            <Image
              src={editprofile}
              alt="edit Profile"
              className="absolute right-5 top-4"
              width={30}
              height={30}
              style={{ filter: "invert(100%)" }}
              onClick={() => setEdit(true)}
            />
          ) : (
            <Image
              src={saveporfile}
              alt="Save Profile"
              className="absolute right-5 top-4"
              width={30}
              height={30}
              style={{ filter: "invert(100%)" }}
              onClick={() => setEdit(false)}
            />
          )}
          {edit ? (
            <input
              className="text-3xl mt-[9%] font-bold rounded-sm pl-1 bg-slate-300 text-black w-64"
              type="text"
              placeholder="FullName"
            />
          ) : (
            <h1 className="text-3xl mt-[9%] font-bold">
              {ProfileData != undefined ? ProfileData.fullName : "FullName"}
            </h1>
          )}
        </div>
        <div className="absolute left-16 top-[5%] rounded-full  m-2">
          <Image
            src={profilepic}
            alt="profile"
            className="h-48 w-48 rounded-full "
            width={100}
            height={100}
          />
          {edit && (
            <Image
              src={photocamera}
              alt="edit Profile photo"
              className="absolute right-3 bottom-3"
              width={30}
              height={30}
              style={{ filter: "invert(100%)" }}
              // onClick={() => setEdit(true)}
            />
          )}
        </div>
        <div className="flex flex-col justify-center items-start ml-[27%]">
          {!edit ? (
            <h1 className="text-base">
              {ProfileData != undefined ? ProfileData.username : "Username"}
            </h1>
          ) : (
            <input
              className="mt-1 rounded-sm pl-1 bg-slate-300 text-black w-64"
              type="text"
              placeholder="UserName"
            />
          )}
          {!edit ? (
            <h1 className="text-base">
              {ProfileData != undefined ? ProfileData.email : "Email"}
            </h1>
          ) : (
            <input
              className="mt-1 rounded-sm pl-1 bg-slate-300 text-black w-64"
              type="email"
              placeholder="email"
            />
          )}
        </div>
      </div>

      <div className="flex flex-row w-[100%]">
        <div className="flex flex-col  items-start border-2 border-slate-500 m-3 p-4 rounded-md w-[40%] ">
          <h1 className="text-3xl font-semibold mb-2">Links</h1>

          {/* linked in */}
          <div className="flex flex-row  items-center m-2">
            <Image
              src={linkedin}
              alt="Linked In"
              width={20}
              height={20}
              style={{ filter: "invert(100%)" }}
            />
            {edit ? (
              <input
                type="text"
                className="ml-2 rounded-sm pl-1 bg-slate-300 text-black w-64"
                placeholder="Linked In"
              />
            ) : (
              <h1 className="ml-2">
                {ProfileData != undefined
                  ? ProfileData.linkedIn
                  : "LinkedIn.com"}
              </h1>
            )}
          </div>
          <div className="flex flex-row items-center m-2">
            <Image
              src={github}
              alt="profile"
              width={20}
              height={20}
              style={{ filter: "invert(100%)" }}
            />
            {edit ? (
              <input
                className="ml-2 rounded-sm pl-1 bg-slate-300 text-black w-64"
                type="text"
                placeholder="Github"
              />
            ) : (
              <h1 className="ml-2">
                {ProfileData != undefined ? ProfileData.gitHub : "github.com"}
              </h1>
            )}
          </div>
          <div className="flex flex-row items-center m-2">
            <Image
              src={link}
              alt="Personal Website"
              width={20}
              height={20}
              style={{ filter: "invert(100%)" }}
            />
            {edit ? (
              <input
                type="text"
                className="ml-2 rounded-sm pl-1 bg-slate-300 text-black w-64"
                placeholder="Personal Website"
              />
            ) : (
              <h1 className="ml-2">
                {ProfileData != undefined ? ProfileData.websiteUrl : "github.com"}
              </h1>
            )}
          </div>
        </div>

        <div className="flex flex-col items-start border-2 border-slate-500 m-3 p-4 rounded-md w-[60%]">
          <h1 className="text-3xl font-semibold mb-2">Projects</h1>
          <div className="flex flex-col w-[100%] h-40 overflow-y-auto scrollbar-hide">
            {projects.map((project, index) => (
              <div className="flex flex-row items-center m-2" key={index}>
                <Image
                  src={layer}
                  alt="project Description"
                  width={20}
                  height={20}
                  style={{ filter: "invert(100%)" }}
                />
                {edit ? (
                  <input
                    className="ml-2 rounded-sm pl-1 bg-slate-300 text-black w-64"
                    type="text"
                    placeholder={project.name}
                  />
                ) : (
                  <h1 className="ml-2">{project.name}</h1>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-start border-2 border-slate-500 m-3 p-4 rounded-md ">
        <h1 className="text-3xl font-semibold mb-2">About</h1>
        <div className="flex flex-col justify-center items-center w-full h-full">
          {edit ? (
            <textarea
              className="w-full h-full ml-2 border-collapse bg-transparent rounded-sm p-1 bg-slate-300 text-white"
              placeholder="About yourself"
            />
          ) : (
            <p className="ml-2">
              {ProfileData != undefined ? ProfileData.bio : "Bio"}
            </p>
          )}
        </div>
      </div>

      <div className="flex flex-col justify-center border-2 border-slate-500 m-3 rounded-md ">
        {edit && (
          <div className="flex flex-col border-b-2 border-slate-500 p-2">
            <h2 className="text-lg font-bold mb-2">All Technologies</h2>
            <div className="flex overflow-auto scrollbar-hide">
              {Array.from(
                new Set(technologiesData.map((tech) => tech.domain))
              ).map((domain) => (
                <div key={domain} className="mr-4">
                  <h2 className="text-lg font-bold">{domain}</h2>
                  <div className="p-2 h-40 flex flex-wrap">
                    {technologiesData
                      .filter((tech) => tech.domain === domain)
                      .map((technology) => (
                        <div
                          key={technology.id}
                          className="flex items-center mb-2 w-28"
                        >
                          <input
                            type="checkbox"
                            id={technology.name}
                            checked={selectedTechnologies.some(
                              (t) => t.id === technology.id
                            )}
                            onChange={() => handleCheckboxChange(technology)}
                            className="mr-2"
                          />
                          <label htmlFor={technology.name}>
                            {technology.name}
                          </label>
                        </div>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        <div className="flex flex-col ml-4 pt-2 pb-2 pl-0">
          <h2 className="text-lg font-bold">Technologies:</h2>
          <div className="flex flex-wrap">
            {selectedTechnologies.map((technology) => (
              <div key={technology.id} className="flex items-center w-28">
                <input
                  type="checkbox"
                  id={`selected-${technology.name}`}
                  checked
                  readOnly
                  className="mr-2"
                />
                <label htmlFor={`selected-${technology.name}`}>
                  {technology.name}
                </label>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
