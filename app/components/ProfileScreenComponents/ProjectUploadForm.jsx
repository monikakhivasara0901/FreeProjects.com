

// import React, { useState } from 'react';

// const ProjectUploadForm = () => {
//   const [formData, setFormData] = useState({
//     title: '',
//     teamMembers: '',
//     teamMemberNames: '',
//     teamMemberEmails: '',
//     techStacks: [],
//     otherTechStack: '',
//     description: '',
//     university: '',
//     githubLink: '',
//     image: null,
//   });

//   const [showTechStackOptions, setShowTechStackOptions] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleTechStackOptionClick = (value) => {
//     if (formData.techStacks.includes(value)) {
//       setFormData((prevData) => ({
//         ...prevData,
//         techStacks: prevData.techStacks.filter((stack) => stack !== value),
//       }));
//     } else {
//       setFormData((prevData) => ({
//         ...prevData,
//         techStacks: [...prevData.techStacks, value],
//       }));
//     }
//   };

//   const handleImageChange = (e) => {
//     setFormData((prevData) => ({
//       ...prevData,
//       image: e.target.files[0],
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission here
//   };

//   return (
//     <div className="container mx-auto bg-slate-700 p-8 rounded-lg shadow-md">
//       <h2 className="text-3xl text-white-800 font-semibold text-center mb-6">Upload Your Project</h2>
//       <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         <div className="md:pl-6">
//           <label htmlFor="title" className="block text-sm font-medium text-white mb-1">Title:</label>
//           <input
//             type="text"
//             id="title"
//             name="title"
//             placeholder="Enter title"
//             value={formData.title}
//             onChange={handleChange}
//             className="input-field placeholder-gray-400 rounded-md px-4 py-2 bg-gray-100 border border-gray-300 text-gray-800 focus:outline-none focus:border-blue-500"
//             required
//           />
           
//         </div>
//         <div className="md:pl-6">
//           <label htmlFor="teamMembers" className="block text-sm font-medium text-white mb-1">Number of Team Members:</label>
//           <input
//             type="number"
//             id="teamMembers"
//             name="teamMembers"
//             placeholder="Enter number of team members"
//             value={formData.teamMembers}
//             onChange={handleChange}
//             className="input-field placeholder-gray-400 rounded-md px-4 py-2 bg-gray-100 border border-gray-300 text-gray-800 focus:outline-none focus:border-blue-500"
//             required
//           />
//         </div>
//         <div className="md:pl-6">
//           <label htmlFor="teamMemberNames" className="block text-sm font-medium text-white mb-1">Names of Team Members:</label>
//           <input
//             type="text"
//             id="teamMemberNames"
//             name="teamMemberNames"
//             placeholder="Enter names of team members"
//             value={formData.teamMemberNames}
//             onChange={handleChange}
//             className="input-field placeholder-gray-400 rounded-md px-4 py-2 bg-gray-100 border border-gray-300 text-gray-800 focus:outline-none focus:border-blue-500"
//             required
//           />
//         </div>
//         <div className="md:pl-6">
//           <label htmlFor="teamMemberEmails" className="block text-sm font-medium text-white mb-1">Emails of Team Members:</label>
//           <input
//             type="email"
//             id="teamMemberEmails"
//             name="teamMemberEmails"
//             placeholder="Enter emails of team members"
//             value={formData.teamMemberEmails}
//             onChange={handleChange}
//             className="input-field placeholder-gray-400 rounded-md px-4 py-2 bg-gray-100 border border-gray-300 text-gray-800 focus:outline-none focus:border-blue-500"
//             required
//           />
//         </div>
//         <div className="md:pl-6">
//           <label htmlFor="description" className="block text-sm font-medium text-white mb-1">Description:</label>
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
//           <label htmlFor="university" className="block text-sm font-medium text-white mb-1">University:</label>
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
//           <label htmlFor="githubLink" className="block text-sm font-medium text-white mb-1">GitHub Link:</label>
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
//           <label htmlFor="image" className="block text-sm font-medium text-white mb-1">Upload Image:</label>
//           <label className="custom-file-upload" style={{ display: 'inline-block', cursor: 'pointer', padding: '8px 20px', backgroundColor: '#4CAF50', color: '#fff', borderRadius: '5px', transition: 'background-color 0.3s ease' }}>
//             <input
//               type="file"
//               id="image"
//               name="image"
//               accept="image/*"
//               onChange={handleImageChange}
//               required
//               style={{ display: 'none' }}
//             />
//             Choose Image
//           </label>
//         </div>
//         <div className="md:pl-6">
//   <label htmlFor="techStacks" className="block text-sm font-medium text-gray-800 mb-1">Tech Stacks:</label>
//   <div className="relative border border-gray-300 rounded-md">
//     <div
//       className="form-multiselect block w-full mt-1 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 cursor-pointer"
//       onClick={() => setShowTechStackOptions(!showTechStackOptions)}
//     >
//       {formData.techStacks.length === 0 ? (
//         <div className="text--800 px-4 py-2">Select Tech Stacks</div>
//       ) : (
//         formData.techStacks.map((stack) => (
//           <div key={stack} className="text-gray-800 px-4 py-2">{stack}</div>
//         ))
//       )}
//     </div>
//     {showTechStackOptions && (
//       <div className="absolute top-full left-0 right-0 bg-white border border-gray-300 rounded-b-md shadow-md mt-1">
//         <label className="block px-4 py-2 cursor-pointer hover:bg-gray-100">
//           <input
//             type="checkbox"
//             value="HTML"
//             checked={formData.techStacks.includes('HTML')}
//             onChange={() => handleTechStackOptionClick('HTML')}
//             className="mr-2 cursor-pointer"
//           />
//           HTML
//         </label>
//         <label className="block px-4 py-2 cursor-pointer hover:bg-gray-100">
//           <input
//             type="checkbox"
//             value="CSS"
//             checked={formData.techStacks.includes('CSS')}
//             onChange={() => handleTechStackOptionClick('CSS')}
//             className="mr-2 cursor-pointer"
//           />
//           CSS
//         </label>
//         {/* Add more tech stack options similarly */}
//       </div>
//     )}
//   </div>
// </div>

//         <div className="md:pl-6">
//           <label htmlFor="otherTechStack" className="block text-sm font-medium text-white mb-1">Other Tech Stack:</label>
//           <input
//             type="text"
//             id="otherTechStack"
//             name="otherTechStack"
//             placeholder="Specify other tech stack"
//             value={formData.otherTechStack}
//             onChange={handleChange}
//             className="input-field placeholder-gray-400 rounded-md px-4 py-2 bg-gray-100 border border-gray-300 text-gray-800 focus:outline-none focus:border-blue-500"
//           />
//         </div>
//         <div className="col-span-2">
//           <button type="submit" className="bg-blue-500 text-white py-3 px-6 rounded-md hover:bg-blue-600 transition duration-300 ease-in-out w-full">Upload Project</button>
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

