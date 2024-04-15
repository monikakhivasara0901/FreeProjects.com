import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import deleteImg from "@/public/icons/delete.png";
import { technologiesData } from "@/utils/data";

// Function to convert file to base64
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

const ProjectUploadForm = ({ setShowWindow, onRefresh }) => {
  const [selectedTechnologies, setSelectedTechnologies] = useState([]);
  const [formData, setFormData] = useState({
    projectName: "Project-1",
    teamLeaderName: "Radhey Kedar",
    numberOfTeamMembers: 3,
    teamMembers: [
      {
        name: "Radhey Kedar",
        email: "radhey@gmail.com",
        linkedIn: "https://www.linkedin.com/in/radhey",
      },
      {
        name: "Monika Jain",
        email: "monika@gmail.com",
        linkedIn: "https://www.linkedin.com/in/monika",
      },
      {
        name: "Atharva Kore",
        email: "atharva@example.com",
        linkedIn: "https://www.linkedin.com/in/atharva",
      },
    ],
    universityOrCollegeName: "PCCOE",
    stackUsed: [],
    description:
      "CodeFind is a revolutionary platform designed to streamline the process of discovering open-source projects and their corresponding source code across multiple repositories. Developers can effortlessly explore an extensive range of projects, accessing their source code and documentation from a centralized location. With intuitive search functionalities, comprehensive project details, and seamless integration with popular version control platforms, CodeFind empowers developers to efficiently find, evaluate, and contribute to open-source projects, fostering collaboration and innovation within the developer community.",
    projectExecutionSteps:"Set up your development environment by cloning the project repository from GitHub and installing dependencies. Configure environment variables and start the backend server, then launch the frontend development server. Access the application via localhost, explore projects, and access their source code. Consider contributing to projects and providing feedback for improvement.",
    tags: [],
    images: [],
    status: 1,
    projectLink: "www.freeprojects.com",
    gitHubLink: "https://github.com/Radhey-R-Kedar/FreeProjects.com.git",
  });


  const handleCheckboxChange = (technology) => {
    const isSelected = selectedTechnologies.some((t) => t.id === technology.id);
    if (isSelected) {
      setSelectedTechnologies(
        selectedTechnologies.filter((t) => t.id !== technology.id)
      );
    } else {
      setSelectedTechnologies([...selectedTechnologies, technology]);
      setFormData((prevData) => ({
        ...prevData,
        stackUsed: selectedTechnologies.map((technology) => technology.name),
      }));
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleTeamMembersChange = (e, index) => {
    const { name, value } = e.target;
    const newTeamMembers = [...formData.teamMembers];
    newTeamMembers[index][name] = value;
    setFormData((prevData) => ({
      ...prevData,
      teamMembers: newTeamMembers,
    }));
  };

  const addTeamMember = () => {
    setFormData((prevData) => ({
      ...prevData,
      teamMembers: [
        ...prevData.teamMembers,
        { name: "", email: "", linkedIn: "" },
      ],
    }));
  };

  const deleteTeamMember = (index) => {
    setFormData((prevData) => {
      const updatedTeamMembers = [...prevData.teamMembers];
      updatedTeamMembers.splice(index, 1);
      return {
        ...prevData,
        teamMembers: updatedTeamMembers,
      };
    });
  };
  // Function to handle file upload and convert to base64
  const handleFileUpload = async (e) => {
    const files = Array.from(e.target.files);
    const base64Images = await Promise.all(
      files.map(async (file) => {
        const base64 = await convertToBase64(file);
        return base64;
      })
    );
    setFormData((prevData) => ({
      ...prevData,
      images: [...prevData.images, ...base64Images],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/uploadProject", formData);
      if (response.data.success) {
        onRefresh();
        setShowWindow(1);
      }
    } catch (error) {
      console.error("Error submitting project:", error);
    }
  };

  return (
    <div className="container mx-auto bg-slate-700 p-8 rounded-lg shadow-md">
      <h2 className="text-3xl text-white font-semibold text-center mb-6">
        Upload Your Project
      </h2>
      <form onSubmit={handleSubmit} className="flex flex-1 flex-col">
        <div className="flex flex-1  flex-row justify-center items-center">
          <div className="flex flex-1 w-[50%] flex-col ">
            <div className="m-2">
              <label
                htmlFor="projectName"
                className="block text-sm font-medium text-white mb-1"
              >
                Project Name:
              </label>
              <input
                type="text"
                id="projectName"
                name="projectName"
                placeholder="Enter project name"
                value={formData.projectName}
                onChange={handleChange}
                className="input-field w-96 h-8 text-black rounded-sm bg-gray-300 pl-2"
                required
              />
            </div>
            <div className="m-2">
              <label
                htmlFor="teamLeaderName"
                className="block text-sm font-medium text-white mb-1"
              >
                Team Leader Name:
              </label>
              <input
                type="text"
                id="teamLeaderName"
                name="teamLeaderName"
                placeholder="Enter team leader name"
                value={formData.teamLeaderName}
                onChange={handleChange}
                className="input-field w-96 h-8 text-black rounded-sm bg-gray-300 pl-2"
                required
              />
            </div>
            <div className="m-2">
              <label
                htmlFor="numberOfTeamMembers"
                className="block text-sm font-medium text-white mb-1"
              >
                Number of Team Members:
              </label>
              <input
                type="number"
                id="numberOfTeamMembers"
                name="numberOfTeamMembers"
                placeholder="Enter number of team members"
                value={formData.numberOfTeamMembers}
                onChange={handleChange}
                className="input-field w-96 h-8 text-black rounded-sm bg-gray-300 pl-2"
                required
              />
            </div>

            <div className="m-2">
              <label
                htmlFor="universityOrCollegeName"
                className="block text-sm font-medium text-white mb-1"
              >
                University or College Name:
              </label>
              <input
                type="text"
                id="universityOrCollegeName"
                name="universityOrCollegeName"
                placeholder="Enter university or college name"
                value={formData.universityOrCollegeName}
                onChange={handleChange}
                className="input-field w-96 h-8 text-black rounded-sm bg-gray-300 pl-2"
                required
              />
            </div>
          </div>

          <div className="flex flex-1 flex-col">
            <div className="m-2">
              <label
                htmlFor="tags"
                className="block text-sm font-medium text-white mb-1"
              >
                Tags (comma-separated):
              </label>
              <input
                type="text"
                id="tags"
                name="tags"
                placeholder="Enter tags"
                value={formData.tags.join(",")}
                onChange={(e) => {
                  setFormData((prevData) => ({
                    ...prevData,
                    tags: e.target.value.split(","),
                  }));
                }}
                className="input-field w-96 h-8 text-black rounded-sm bg-gray-300 pl-2"
              />
            </div>

            <div className="m-2">
              <label
                htmlFor="status"
                className="block text-sm font-medium text-white mb-1"
              >
                Status:
              </label>
              <select
                id="status"
                name="status"
                value={formData.status}
                onChange={handleChange}
                className="input-field w-96 h-8 text-black rounded-sm bg-gray-300 pl-2"
              >
                <option value={1}>Ongoing</option>
                <option value={2}>Completed</option>
                <option value={3}>Live</option>
              </select>
            </div>
            <div className="m-2">
              <label
                htmlFor="gitHubLink"
                className="block text-sm font-medium text-white mb-1"
              >
                GitHub Links:
              </label>
              <input
                type="text"
                id="gitHubLink"
                name="gitHubLink"
                placeholder="Enter external links"
                value={formData.gitHubLink}
                onChange={handleChange}
                className="input-field w-96 h-8 text-black rounded-sm bg-gray-300 pl-2"
              />
            </div>
            <div className="m-2">
              <label
                htmlFor="gitHubLink"
                className="block text-sm font-medium text-white mb-1"
              >
                Live Project Links:
              </label>
              <input
                type="text"
                id="projectLink"
                name="projectLink"
                placeholder="Enter external links"
                value={formData.projectLink}
                onChange={handleChange}
                className="input-field w-96 h-8 text-black rounded-sm bg-gray-300 pl-2"
              />
            </div>
          </div>
        </div>

        <div className="m-2 flex flex-col  mt-4">
          <label
            htmlFor="images"
            className="block text-sm font-medium text-white mb-1 w-[40%]"
          >
            Upload Project Images (you can select multiple)*:
          </label>
          <input
            type="file"
            id="images"
            name="images"
            accept="image/*"
            required
            multiple
            onChange={handleFileUpload}
            className="input-field w-96 h-8 text-white rounded-sm pl-2"
          />
        </div>

        <div className="mt-3">
          <label
            htmlFor="description"
            className="block text-sm font-medium text-white mb-1"
          >
            Description:
          </label>
          <textarea
            id="description"
            name="description"
            placeholder="Enter description"
            value={formData.description}
            onChange={handleChange}
            className="input-field w-full text-black rounded-sm bg-gray-300 pl-2 scrollbar-hide"
            rows="4"
            required
          />
        </div>
        <div className="mt-3">
          <label
            htmlFor="projectExecutionSteps"
            className="block text-sm font-medium text-white mb-1"
          >
            Steps to run the Project:
          </label>
          <textarea
            id="projectExecutionSteps"
            name="projectExecutionSteps"
            placeholder="Enter description"
            value={formData.projectExecutionSteps}
            onChange={handleChange}
            className="input-field w-full text-black rounded-sm bg-gray-300 pl-2 scrollbar-hide"
            rows="4"
            required
          />
        </div>

        <div className="col-span-2 border border-gray-400 p-4 pt-0 rounded-lg mt-3">
          <div className="flex flex-row items-end m-2">
            <div className="w-[50%]">
              <h3 className="text-xl font-semibold text-white mb-2">
                Team Members:
              </h3>
            </div>
            <div className="flex  w-[50%]  justify-end">
              <button
                type="button"
                onClick={addTeamMember}
                className="btn-primary border-2 text-black p-1 pl-2 pr-2 rounded-xl m-2 bg-[#787e97] hover:bg-[#484f6a]"
              >
                Add Team Member
              </button>
            </div>
          </div>
          {formData.teamMembers.map((member, index) => (
            <div
              key={index}
              className="flex flex-row justify-between items-center gap-4 m-2"
            >
              <input
                type="text"
                placeholder="Name"
                name="name"
                value={member.name}
                onChange={(e) => handleTeamMembersChange(e, index)}
                className="input-field h-8 w-96 text-black rounded-sm bg-gray-300 pl-2"
                required
              />
              <input
                type="email"
                placeholder="Email"
                name="email"
                value={member.email}
                onChange={(e) => handleTeamMembersChange(e, index)}
                className="input-field h-8  w-72 text-black rounded-sm bg-gray-300 pl-2"
                required
              />
              <input
                type="text"
                placeholder="LinkedIn"
                name="linkedIn"
                value={member.linkedIn}
                onChange={(e) => handleTeamMembersChange(e, index)}
                className="input-field  w-72 h-8 text-black rounded-sm bg-gray-300 pl-2"
              />
              <div className="bg-red-600 p-1 rounded-sm">
                <Image
                  src={deleteImg}
                  alt="Delete"
                  onClick={() => deleteTeamMember(index)}
                  className="w-[30px] h-[20px] "
                  style={{ filter: "invert(100%)" }}
                />
              </div>
            </div>
          ))}
        </div>

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

        <div className="col-span-2 mt-3">
          <button
            type="submit"
            className="btn-primary border border-gray-400 text-white bg-blue-500 hover:bg-blue-600 py-2 px-4 rounded-md"
          >
            Upload Project
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProjectUploadForm;
