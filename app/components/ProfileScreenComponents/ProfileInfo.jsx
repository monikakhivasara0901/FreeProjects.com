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
import { useEffect, useRef, useState } from "react";

function convertToBase64(file) {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => {
      resolve(fileReader.result);
    };
    fileReader.onerror = (error) => {
      reject(error);
    };
  });
}

const ProfileInfo = ({
  onRefresh,
  UserProfileData,
  UploadedProjects,
  handleShowProject,
}) => {
  const fileInputRef = useRef(null);
  const [edit, setEdit] = useState(false);
  const [selectedTechnologies, setSelectedTechnologies] = useState([]);
  const [ProfileData, setProfileData] = useState(UserProfileData);

  useEffect(() => {
    setProfileData(UserProfileData);
  }, [UserProfileData]);

  const redirectTo = (link) => {
    window.open(link);
  };

  const handlePhotoChange = async (e) => {
    const file = e.target.files[0];
    try {
      const base64String = await convertToBase64(file);
      setProfileData({ ...ProfileData, avatarUrl: base64String });
    } catch (error) {
      console.error("Error converting photo to base64:", error);
    }
  };

  const handleImageClick = () => {
    // Trigger file input click event
    fileInputRef.current.click();
  };

  const updateProfile = async () => {
    try {
      const response = await fetch("/api/updateProfile", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: ProfileData._id, // Assuming _id is the unique identifier of the profile
          data: ProfileData, // Send the updated profile data
        }),
      });

      if (response.ok) {
        const updatedProfileData = await response.json();
        setProfileData(updatedProfileData);
        onRefresh(); // Update the state with the updated profile data
        // Optionally, show a success message or perform any other actions
      } else {
        // Handle errors
      }
    } catch (error) {
      console.error("Error updating profile:", error);
      // Handle errors
    }
  };

  const handleCheckboxChange = (technology) => {
    const isSelected = selectedTechnologies.some((t) => t.id === technology.id);
    if (isSelected) {
      setSelectedTechnologies(
        selectedTechnologies.filter((t) => t.id !== technology.id)
      );
    } else {
      setSelectedTechnologies([...selectedTechnologies, technology]);
      setProfileData((ProfileData) => ({
        ...ProfileData,
        skills: selectedTechnologies.map((technology) => technology.name),
      }));
    }
  };

  const handleInputChange = (e, field) => {
    setProfileData({
      ...ProfileData,
      [field]: e.target.value,
    });
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
              onClick={() => {
                setEdit(false);
                updateProfile();
              }}
            />
          )}
          {edit ? (
            <input
              className="text-3xl mt-[9%] font-bold rounded-sm pl-1 bg-slate-300 text-black w-64"
              type="text"
              placeholder="FullName"
              value={ProfileData != undefined && ProfileData.fullName}
              onChange={(e) => handleInputChange(e, "fullName")}
            />
          ) : (
            <h1 className="text-3xl mt-[9%] font-bold">
              {ProfileData != undefined && ProfileData.fullName}
            </h1>
          )}
        </div>
        <div className="absolute left-[7%] top-[5%] rounded-full  m-2">
          <Image
            src={ProfileData != undefined? ProfileData.avatarUrl:profilepic}
            alt="profile"
            className="h-48 w-48 rounded-full "
            width={100}
            height={100}
          />
          {edit && (
            <div className="relative">
            <Image
              src={photocamera}
              alt="edit Profile photo"
              className="absolute right-3 bottom-3 cursor-pointer"
              width={30}
              height={30}
              style={{ filter: "invert(100%)" }}
              onClick={handleImageClick}
            />
            {/* Hidden file input */}
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handlePhotoChange}
              style={{ display: "none" }}
            />
          </div>
          )}
        </div>
        <div className="flex flex-col justify-center items-start ml-[27%]">
          {edit ? (
            <input
              className="mt-1 rounded-sm pl-1 bg-slate-300 text-black w-64"
              type="text"
              placeholder="UserName"
              value={ProfileData != undefined && ProfileData.username}
              onChange={(e) => handleInputChange(e, "username")}
            />
          ) : (
            <h1 className="text-base">
              {ProfileData != undefined && ProfileData.username}
            </h1>
          )}
          {edit ? (
            <input
              className="mt-1 rounded-sm pl-1 bg-slate-300 text-black w-64"
              type="email"
              placeholder="email"
              value={ProfileData != undefined && ProfileData.email}
              onChange={(e) => handleInputChange(e, "email")}
            />
          ) : (
            <h1 className="text-base">
              {ProfileData != undefined && ProfileData.email}
            </h1>
          )}
        </div>
      </div>

      <div className="flex flex-row w-[100%]">
        <div className="flex flex-col  items-start border-2 border-slate-500 m-3 p-4 rounded-md w-[45%] ">
          <h1 className="text-3xl font-semibold mb-2">Links</h1>

          {/* linked in */}
          <div className="flex flex-row  items-center m-2">
            <Image
              src={linkedin}
              alt="Linked In"
              width={20}
              height={20}
              style={{ filter: "invert(100%)" }}
              onClick={() =>
                redirectTo(ProfileData != undefined ? ProfileData.linkedIn : "")
              }
            />
            {edit ? (
              <input
                type="text"
                className="ml-2 rounded-sm pl-1 bg-slate-300 text-black w-64"
                placeholder={ProfileData != undefined && ProfileData.linkedIn}
                value={ProfileData != undefined && ProfileData.linkedIn}
                onChange={(e) => handleInputChange(e, "linkedIn")}
              />
            ) : (
              <h1 className="ml-2 text-white">
                {ProfileData != undefined && ProfileData.linkedIn}
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
              onClick={() =>
                redirectTo(ProfileData != undefined ? ProfileData.gitHub : "")
              }
            />
            {edit ? (
              <input
                className="ml-2 rounded-sm pl-1 bg-slate-300 text-black w-64"
                type="text"
                placeholder="Github"
                value={ProfileData != undefined && ProfileData.gitHub}
                onChange={(e) => handleInputChange(e, "gitHub")}
              />
            ) : (
              <h1 className="ml-2">
                {ProfileData != undefined && ProfileData.gitHub}
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
              onClick={() =>
                redirectTo(
                  ProfileData != undefined ? ProfileData.websiteUrl : ""
                )
              }
            />
            {edit ? (
              <input
                type="text"
                className="ml-2 rounded-sm pl-1 bg-slate-300 text-black w-64"
                placeholder="Personal Website"
                value={ProfileData != undefined && ProfileData.websiteUrl}
                onChange={(e) => handleInputChange(e, "websiteUrl")}
              />
            ) : (
              <h1 className="ml-2">
                {ProfileData != undefined && ProfileData.websiteUrl}
              </h1>
            )}
          </div>
        </div>

        <div className="flex flex-col items-start border-2 border-slate-500 m-3 p-4 rounded-md w-[55%]">
          <h1 className="text-3xl font-semibold mb-2">Projects</h1>
          <div className="flex flex-col w-[100%] h-40 overflow-y-auto scrollbar-hide">
            {UploadedProjects !== undefined &&
              UploadedProjects.map((project, index) => (
                <div
                  className="flex flex-row items-center m-2"
                  onClick={() => handleShowProject(project)}
                  key={index}
                >
                  <Image
                    src={layer}
                    alt="project Description"
                    width={20}
                    height={20}
                    style={{ filter: "invert(100%)" }}
                  />

                  <h1 className="ml-2">{project.projectName}</h1>
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
              value={ProfileData != undefined && ProfileData.bio}
              onChange={(e) => handleInputChange(e, "bio")}
            />
          ) : (
            <p className="ml-2">
              {ProfileData != undefined && ProfileData.bio}
            </p>
          )}
        </div>
      </div>

      {edit ? (
        <div className="flex flex-col justify-center border-2 border-slate-500 m-3 rounded-md ">
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
      ):(
        <div className="flex flex-col ml-4 pt-2 pb-2 pl-0">
        <h2 className="text-lg font-bold">My Skills:</h2>
        {(ProfileData!=undefined && ProfileData.skills!=undefined) && <div className="flex flex-wrap">
          {ProfileData!=undefined && ProfileData.skills.map((technology,index) => (
            <div key={index} className="flex items-center w-28">
              <h1 className="ml-2">{technology}</h1>
            </div>
          ))}
        </div>}
      </div>
      )}
    </div>
  );
};

export default ProfileInfo;
