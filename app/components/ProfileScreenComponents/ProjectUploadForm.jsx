// import React, { useState } from "react";

// const ProjectUploadForm = () => {
//   const [selectedTechnologies, setSelectedTechnologies] = useState([]);
//   const technologiesData = [
//     { id: 1, domain: "Frontend", name: "React" },
//     { id: 2, domain: "Frontend", name: "Vue.js" },
//     { id: 3, domain: "Frontend", name: "Angular" },
//     { id: 4, domain: "Frontend", name: "Svelte" },
//     { id: 5, domain: "Backend", name: "Node.js" },
//     { id: 6, domain: "Backend", name: "Django" },
//     { id: 7, domain: "Backend", name: "Express.js" },
//     { id: 8, domain: "Backend", name: "Flask" },
//     { id: 9, domain: "Database", name: "MongoDB" },
//     { id: 10, domain: "Database", name: "MySQL" },
//     { id: 11, domain: "Database", name: "PostgreSQL" },
//     { id: 12, domain: "Database", name: "SQLite" },
//     { id: 13, domain: "Database", name: "Firebase" },
//     { id: 14, domain: "Other", name: "Next.js" },
//     { id: 15, domain: "Other", name: "Laravel" },
//     { id: 16, domain: "Other", name: "Deno" },
//     { id: 17, domain: "Other", name: "Gatsby.js" },
//     { id: 18, domain: "Other", name: "Nuxt.js" },
//     { id: 19, domain: "Other", name: "Gulp.js" },
//     { id: 20, domain: "Other", name: "NPM" },
//     { id: 21, domain: "Other", name: "Yarn" },
//     { id: 22, domain: "Other", name: "NPM" },
//     { id: 23, domain: "Other", name: "Yarn" },
//     { id: 24, domain: "Other", name: "NPM" },
//     { id: 25, domain: "Other", name: "Yarn" },
//     { id: 26, domain: "Other", name: "NPM" },
//     { id: 27, domain: "Other", name: "Yarn" },
//     { id: 28, domain: "Other", name: "NPM" },
//     { id: 29, domain: "Other", name: "Yarn" },
//     { id: 30, domain: "Other", name: "NPM" },
//     { id: 31, domain: "Other", name: "Yarn" },
//     { id: 32, domain: "Backend", name: "NPM" },

//     // Add more technologies in different domains as needed
//   ];
//   const [formData, setFormData] = useState({
//     title: "",
//     teamMembers: "",
//     teamMemberNames: "",
//     teamMemberEmails: "",
//     techStacks: [],
//     otherTechStack: "",
//     description: "",
//     university: "",
//     githubLink: "",
//     image: null,
//   });

//   const handleCheckboxChange = (technology) => {
//     const isSelected = selectedTechnologies.some((t) => t.id === technology.id);
//     if (isSelected) {
//       setSelectedTechnologies(
//         selectedTechnologies.filter((t) => t.id !== technology.id)
//       );
//     } else {
//       setSelectedTechnologies([...selectedTechnologies, technology]);
//     }
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prevData => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleTeamMembersChange = (e, index) => {
//     const { name, value } = e.target;
//     const newTeamMembers = [...formData.teamMembers];
//     newTeamMembers[index][name] = value;
//     setFormData(prevData => ({
//       ...prevData,
//       teamMembers: newTeamMembers,
//     }));
//   };

  

//   const addTeamMember = () => {
//     setFormData(prevData => ({
//       ...prevData,
//       teamMembers: [...prevData.teamMembers, { name: '', email: '', linkedIn: '' }],
//     }));
//   };

  

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('/api/projects', formData);
//       console.log(response.data);
//     } catch (error) {
//       console.error('Error submitting project:', error);
//     }
//   };

//   return (
//     <div className="container mx-auto bg-slate-700 p-8 rounded-lg shadow-md">
//       <h2 className="text-3xl text-white-800 font-semibold text-center mb-6">
//         Upload Your Project
//       </h2>
//       <form
//         onSubmit={handleSubmit}
//         className="grid grid-cols-1 md:grid-cols-2 gap-6"
//       >
//         <div className="md:pl-6">
//           <label
//             htmlFor="title"
//             className="block text-sm font-medium text-white mb-1"
//           >
//             Title:
//           </label>
//           <input
//             type="text"
//             id="projectName"
//             name="projectName"
//             placeholder="Enter project name"
//             value={formData.projectName}
//             onChange={handleChange}
//             className="input-field w-72 h-8 text-black"
//             required
//           />
//         </div>
//         <div className="md:pl-6">
//           <label
//             htmlFor="teamMembers"
//             className="block text-sm font-medium text-white mb-1"
//           >
//             Number of Team Members:
//           </label>
//           <input
//             type="number"
//             id="numberOfTeamMembers"
//             name="numberOfTeamMembers"
//             placeholder="Enter number of team members"
//             value={formData.numberOfTeamMembers}
//             onChange={handleChange}
//             className="input-field w-72 h-8 text-black"
//             required
//           />
//         </div>
//         <div className="md:pl-6">
//           <label
//             htmlFor="teamMemberNames"
//             className="block text-sm font-medium text-white mb-1"
//           >
//             Names of Team Members:
//           </label>
//           <input
//             type="text"
//             id="universityOrCollegeName"
//             name="universityOrCollegeName"
//             placeholder="Enter university or college name"
//             value={formData.universityOrCollegeName}
//             onChange={handleChange}
//             className="input-field w-96 h-8 text-black"
//             required
//           />
//         </div>
//         <div className="md:pl-6">
//           <label
//             htmlFor="teamMemberEmails"
//             className="block text-sm font-medium text-white mb-1"
//           >
//             Emails of Team Members:
//           </label>
//           <input
//             type="text"
//             id="stackUsed"
//             name="stackUsed"
//             placeholder="Enter stack used"
//             value={formData.stackUsed}
//             onChange={handleChange}
//             className="input-field w-96 h-8 text-black"
//             required
//           />
//         </div>
//         <div className="md:pl-6">
//           <label
//             htmlFor="description"
//             className="block text-sm font-medium text-white mb-1"
//           >
//             Description:
//           </label>
//           <textarea
//             id="description"
//             name="description"
//             placeholder="Enter description"
//             value={formData.description}
//             onChange={handleChange}
//             className="input-field placeholder-gray-400 rounded-md px-4 py-2 bg-gray-100 border border-gray-300 text-gray-800 focus:outline-none focus:border-blue-500"
//             required
//           ></textarea>
//         </div>
//         <div className="md:pl-6">
//           <label
//             htmlFor="university"
//             className="block text-sm font-medium text-white mb-1"
//           >
//             University:
//           </label>
//           <input
//             type="text"
//             id="university"
//             name="university"
//             placeholder="Enter university"
//             value={formData.university}
//             onChange={handleChange}
//             className="input-field placeholder-gray-400 rounded-md px-4 py-2 bg-gray-100 border border-gray-300 text-gray-800 focus:outline-none focus:border-blue-500"
//             required
//           />
//         </div>
//         <div className="md:pl-6">
//           <label
//             htmlFor="githubLink"
//             className="block text-sm font-medium text-white mb-1"
//           >
//             GitHub Link:
//           </label>
//           <input
//             type="text"
//             id="githubLink"
//             name="githubLink"
//             placeholder="Enter GitHub link"
//             value={formData.githubLink}
//             onChange={handleChange}
//             className="input-field placeholder-gray-400 rounded-md px-4 py-2 bg-gray-100 border border-gray-300 text-gray-800 focus:outline-none focus:border-blue-500"
//             required
//           />
//         </div>
//         <div className="md:pl-6">
//           <label
//             htmlFor="image"
//             className="block text-sm font-medium text-white mb-1"
//           >
//             Upload Image:
//           </label>
//           <label
//             className="custom-file-upload"
//             style={{
//               display: "inline-block",
//               cursor: "pointer",
//               padding: "8px 20px",
//               backgroundColor: "#4CAF50",
//               color: "#fff",
//               borderRadius: "5px",
//               transition: "background-color 0.3s ease",
//             }}
//           >
//             <input
//               type="file"
//               id="image"
//               name="image"
//               accept="image/*"
//               onChange={handleImageChange}
//               required
//               style={{ display: "none" }}
//             />
//             Choose Image
//           </label>
//         </div>
        
//         <div className="col-span-2">
//         <div className="md:pl-6">
//           <label
//             htmlFor="techStacks"
//             className="block text-sm font-medium mb-1"
//           >
//             Tech Stacks:
//           </label>
//           <div className="relative rounded-md">
//             <div className="flex flex-col justify-center border-2 border-slate-500 m-3 rounded-md ">
//               <div className="flex flex-col border-b-2 border-slate-500 p-2">
//                 <h2 className="text-lg font-bold mb-2">All Technologies</h2>
//                 <div className="flex overflow-auto scrollbar-hide">
//                   {Array.from(
//                     new Set(technologiesData.map((tech) => tech.domain))
//                   ).map((domain) => (
//                     <div key={domain} className="mr-4">
//                       <h2 className="text-lg font-bold">{domain}</h2>
//                       <div className="p-2 h-40 flex flex-wrap">
//                         {technologiesData
//                           .filter((tech) => tech.domain === domain)
//                           .map((technology) => (
//                             <div
//                               key={technology.id}
//                               className="flex items-center mb-2 w-28"
//                             >
//                               <input
//                                 type="checkbox"
//                                 id={technology.name}
//                                 checked={selectedTechnologies.some(
//                                   (t) => t.id === technology.id
//                                 )}
//                                 onChange={() =>
//                                   handleCheckboxChange(technology)
//                                 }
//                                 className="mr-2"
//                               />
//                               <label htmlFor={technology.name}>
//                                 {technology.name}
//                               </label>
//                             </div>
//                           ))}
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//               <div className="flex flex-col ml-4 pt-2 pb-2 pl-0">
//                 <h2 className="text-lg font-bold">Selected Technologies:</h2>
//                 <div className="flex flex-wrap">
//                   {selectedTechnologies.map((technology) => (
//                     <div key={technology.id} className="flex items-center w-28">
//                       <input
//                         type="checkbox"
//                         id={`selected-${technology.name}`}
//                         checked
//                         readOnly
//                         className="mr-2"
//                       />
//                       <label htmlFor={`selected-${technology.name}`}>
//                         {technology.name}
//                       </label>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//           <button
//             type="submit"
//             className="bg-blue-500 text-white py-3 px-6 rounded-md hover:bg-blue-600 transition duration-300 ease-in-out w-full"
//           >
//             Upload Project
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default ProjectUploadForm;

import React, { useState } from 'react';
import axios from 'axios';

const ProjectUploadForm = () => {
  const [formData, setFormData] = useState({
    teamLeaderName: '',
    numberOfTeamMembers: '',
    teamMembers: [],
    universityOrCollegeName: '',
    stackUsed: '',
    description: '',
    collaborators: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleTeamMembersChange = (e, index) => {
    const { name, value } = e.target;
    const newTeamMembers = [...formData.teamMembers];
    newTeamMembers[index][name] = value;
    setFormData(prevData => ({
      ...prevData,
      teamMembers: newTeamMembers,
    }));
  };

  

  const addTeamMember = () => {
    setFormData(prevData => ({
      ...prevData,
      teamMembers: [...prevData.teamMembers, { name: '', email: '', linkedIn: '' }],
    }));
  };

  

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/projects', formData);
      console.log(response.data);
    } catch (error) {
      console.error('Error submitting project:', error);
    }
  };

  return (
    <div className="container mx-auto bg-slate-700 p-8 rounded-lg shadow-md">
      <h2 className="text-3xl text-white font-semibold text-center mb-6">Upload Your Project</h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
          <label htmlFor="projectName" className="block text-sm font-medium text-white mb-1">Project Name:</label>
          <input
            type="text"
            id="projectName"
            name="projectName"
            placeholder="Enter project name"
            value={formData.projectName}
            onChange={handleChange}
            className="input-field w-72 h-8 text-black"
            required
          />
        </div>
      <div>
  <label htmlFor="teamLeaderName" className="block text-sm font-medium text-white mb-1">Team Leader Name:</label>
  <input
    type="text"
    id="teamLeaderName"
    name="teamLeaderName"
    placeholder="Enter team leader name"
    value={formData.teamLeaderName}
    onChange={handleChange}
    className="input-field w-72 h-8 text-black" 
    style={{ color: 'black'}}
    required
  />
</div>


        <div>
          <label htmlFor="numberOfTeamMembers" className="block text-sm font-medium text-white mb-1">Number of Team Members:</label>
          <input
            type="number"
            id="numberOfTeamMembers"
            name="numberOfTeamMembers"
            placeholder="Enter number of team members"
            value={formData.numberOfTeamMembers}
            onChange={handleChange}
            className="input-field w-72 h-8 text-black"
            required
          />
        </div>
      

<div className="col-span-2 border border-gray-400 p-4 rounded-lg">
  <h3 className="text-xl font-semibold text-white mb-2">Team Members:</h3>
  
  {formData.teamMembers.map((member, index) => (
    <div key={index} className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
      <input
        type="text"
        placeholder="Name"
        name="name"
        value={member.name}
        onChange={e => handleTeamMembersChange(e, index)}
        className="input-field h-8 text-black"
        required
      />
      <input
        type="email"
        placeholder="Email"
        name="email"
        value={member.email}
        onChange={e => handleTeamMembersChange(e, index)}
        className="input-field h-8 text-black"
        required
      />
      <div className="flex items-center">
        <input
          type="text"
          placeholder="LinkedIn"
          name="linkedIn"
          value={member.linkedIn}
          onChange={e => handleTeamMembersChange(e, index)}
          className="input-field w-64 h-8 text-black"
        />
        {member.linkedIn && (
          <a
            href={member.linkedIn}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 ml-2"
          >
            LinkedIn
          </a>
        )}
      </div>
    </div>
  ))}

  <button type="button" onClick={addTeamMember} className="btn-primary border border-gray-400 text-white bg-blue-500 hover:bg-blue-600">Add Team Member</button>
</div>

        <div>
          <label htmlFor="universityOrCollegeName" className="block text-sm font-medium text-white mb-1">University or College Name:</label>
          <input
            type="text"
            id="universityOrCollegeName"
            name="universityOrCollegeName"
            placeholder="Enter university or college name"
            value={formData.universityOrCollegeName}
            onChange={handleChange}
            className="input-field w-96 h-8 text-black"
            required
          />
        </div>
        <div>
          <label htmlFor="stackUsed" className="block text-sm font-medium text-white mb-1">Stack Used:</label>
          <input
            type="text"
            id="stackUsed"
            name="stackUsed"
            placeholder="Enter stack used"
            value={formData.stackUsed}
            onChange={handleChange}
            className="input-field w-96 h-8 text-black"
            required
          />
        </div>
        <div className="col-span-2">
  <label htmlFor="description" className="block text-sm font-medium text-white mb-1">Description:</label>
  <textarea
    id="description"
    name="description"
    placeholder="Enter description"
    value={formData.description}
    onChange={handleChange}
    className="input-field w-full text-black"
    rows="4"
    required
  />
</div>

       
<div className="col-span-2">
  <button type="submit" className="btn-primary border border-gray-400 text-white bg-blue-500 hover:bg-blue-600 py-2 px-4 rounded-md">Upload Project</button>
</div>

      </form>
    </div>
  );
};

export default ProjectUploadForm;
