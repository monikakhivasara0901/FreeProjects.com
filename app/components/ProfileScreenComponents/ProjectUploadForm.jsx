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
//     file: null,
//   });

//   const [showTechStackOptions, setShowTechStackOptions] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleTechStackChange = (e) => {
//     const { value, checked } = e.target;
//     if (checked) {
//       setFormData((prevData) => ({
//         ...prevData,
//         techStacks: [...prevData.techStacks, value],
//       }));
//     } else {
//       setFormData((prevData) => ({
//         ...prevData,
//         techStacks: prevData.techStacks.filter((stack) => stack !== value),
//       }));
//     }
//   };

//   const handleToggleTechStackOptions = () => {
//     setShowTechStackOptions(!showTechStackOptions);
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
//       <h2 className="text-3xl text-white font-semibold text-center mb-6">Upload Your Project</h2>
//       <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-5">
//         <div className="md:pl-6">
//           <label htmlFor="title" className="block text-sm font-medium text-white mb-1">Title:</label>
//           <input
//             type="text"
//             id="title"
//             name="title"
//             placeholder="Enter title"
//             value={formData.title}
//             onChange={handleChange}
//             className="input-field placeholder-black rounded-sm pl-1 bg-slate-300 text-black"
//             required
//             style={{ color: 'black' }}

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
//             className="input-field placeholder-black rounded-sm pl-1 bg-slate-300 text-black"
//             required
//             style={{ color: 'black' }}

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
//             className="input-field placeholder-black rounded-sm pl-1 bg-slate-300 text-black"
//             required
//             style={{ color: 'black' }}

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
//             className="input-field placeholder-black rounded-sm pl-1 bg-slate-300 text-black"
//             required
//             style={{ color: 'black' }}

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
//             className="input-field placeholder-black rounded-sm pl-1 bg-slate-300 text-black"
//             required
//             style={{ color: 'black' }}

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
//             className="input-field placeholder-black rounded-sm pl-1 bg-slate-300 text-black"
//             required
//             style={{ color: 'black' }}

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
//             className="input-field placeholder-black rounded-sm pl-1 bg-slate-300 text-black"
//             required
//             style={{ color: 'black' }}

//           />
//         </div>

//         <div className="md:pl-6">
//           <label htmlFor="image" className="block text-sm font-medium text-white mb-1">Upload Image:</label>
//           <label className="custom-file-upload" style={{ display: 'inline-block', cursor: 'pointer', padding: '8px 20px', backgroundColor: 'white', color: 'black', borderRadius: '5px', transition: 'background-color 0.3s ease' }}>
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
//           <label htmlFor="techStacks" className="block text-sm font-medium text-white mb-1">Tech Stacks:</label>
//           <div className="relative">
//             <div
//               className="form-multiselect block w-full mt-1 rounded-md border-black shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 cursor-pointer"
//               onClick={handleToggleTechStackOptions}
//             >
//               {formData.techStacks.length === 0 ? (
//                 <div className="text-black">Select Tech Stacks</div>
//               ) : (
//                 formData.techStacks.map((stack) => (
//                   <div key={stack} className="text-black-800">{stack}</div>
//                 ))
//               )}
//             </div>
//             {showTechStackOptions && (
//               <div className="absolute top-full left-0 right-0 bg-white border border-white-300 rounded-md shadow-md mt-1">
//                 <label className="block px-4 py-2 cursor-pointer hover:bg-gray-100">
//                   <input
//                     type="checkbox"
//                     value="HTML"
//                     checked={formData.techStacks.includes('HTML')}
//                     onChange={() => handleTechStackOptionClick('HTML')}
//                     className="mr-2 cursor-pointer placeholder-black"
//                     style={{ color: 'black' }}

//                   />
//                   HTML
//                 </label>
//                 <label className="block px-4 py-2 cursor-pointer hover:bg-black-800">
//                   <input
//                     type="checkbox"
//                     value="CSS"
//                     checked={formData.techStacks.includes('CSS')}
//                     onChange={() => handleTechStackOptionClick('CSS')}
//                     className="mr-2 cursor-pointer placeholder-black"
//                     style={{ color: 'black' }}

//                   />
//                   CSS
//                 </label>
//                 {/* Add more tech stack options similarly */}
//               </div>
//             )}
//           </div>
//         </div>
//         <div className="md:pl-6">
//           <label htmlFor="otherTechStack" className="block text-sm font-medium text-white mb-1">Other Tech Stack:</label>
//           <input
//             type="text"
//             id="otherTechStack"
//             name="otherTechStack"
//             placeholder="Specify other tech stack"
//             value={formData.otherTechStack}
//             onChange={handleChange}
//             className="input-field placeholder-black rounded-sm pl-1 bg-slate-300 text-black"
//             style={{ color: 'black' }}

//           />
//         </div>
//         <div className="col-span-2">
//           <button type="submit" className="bg-blue-500 text-white py-3 px-2 rounded-md hover:bg-blue-600 transition duration-300 ease-in-out w-full">Upload Project</button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default ProjectUploadForm;

import React, { useState } from 'react';

const ProjectUploadForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    teamMembers: '',
    teamMemberNames: '',
    teamMemberEmails: '',
    techStacks: [],
    otherTechStack: '',
    description: '',
    university: '',
    githubLink: '',
    image: null,
  });

  const [showTechStackOptions, setShowTechStackOptions] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleTechStackOptionClick = (value) => {
    if (formData.techStacks.includes(value)) {
      setFormData((prevData) => ({
        ...prevData,
        techStacks: prevData.techStacks.filter((stack) => stack !== value),
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        techStacks: [...prevData.techStacks, value],
      }));
    }
  };

  const handleImageChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      image: e.target.files[0],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
  };

  return (
    <div className="container mx-auto bg-slate-700 p-8 rounded-lg shadow-md">
      <h2 className="text-3xl text-white-800 font-semibold text-center mb-6">Upload Your Project</h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="md:pl-6">
          <label htmlFor="title" className="block text-sm font-medium text-white mb-1">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            placeholder="Enter title"
            value={formData.title}
            onChange={handleChange}
            className="input-field placeholder-gray-400 rounded-md px-4 py-2 bg-gray-100 border border-gray-300 text-gray-800 focus:outline-none focus:border-blue-500"
            required
          />
           
        </div>
        <div className="md:pl-6">
          <label htmlFor="teamMembers" className="block text-sm font-medium text-white mb-1">Number of Team Members:</label>
          <input
            type="number"
            id="teamMembers"
            name="teamMembers"
            placeholder="Enter number of team members"
            value={formData.teamMembers}
            onChange={handleChange}
            className="input-field placeholder-gray-400 rounded-md px-4 py-2 bg-gray-100 border border-gray-300 text-gray-800 focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="md:pl-6">
          <label htmlFor="teamMemberNames" className="block text-sm font-medium text-white mb-1">Names of Team Members:</label>
          <input
            type="text"
            id="teamMemberNames"
            name="teamMemberNames"
            placeholder="Enter names of team members"
            value={formData.teamMemberNames}
            onChange={handleChange}
            className="input-field placeholder-gray-400 rounded-md px-4 py-2 bg-gray-100 border border-gray-300 text-gray-800 focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="md:pl-6">
          <label htmlFor="teamMemberEmails" className="block text-sm font-medium text-white mb-1">Emails of Team Members:</label>
          <input
            type="email"
            id="teamMemberEmails"
            name="teamMemberEmails"
            placeholder="Enter emails of team members"
            value={formData.teamMemberEmails}
            onChange={handleChange}
            className="input-field placeholder-gray-400 rounded-md px-4 py-2 bg-gray-100 border border-gray-300 text-gray-800 focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="md:pl-6">
          <label htmlFor="description" className="block text-sm font-medium text-white mb-1">Description:</label>
          <textarea
            id="description"
            name="description"
            placeholder="Enter description"
            value={formData.description}
            onChange={handleChange}
            className="input-field placeholder-gray-400 rounded-md px-4 py-2 bg-gray-100 border border-gray-300 text-gray-800 focus:outline-none focus:border-blue-500"
            required
          ></textarea>
        </div>
        <div className="md:pl-6">
          <label htmlFor="university" className="block text-sm font-medium text-white mb-1">University:</label>
          <input
            type="text"
            id="university"
            name="university"
            placeholder="Enter university"
            value={formData.university}
            onChange={handleChange}
            className="input-field placeholder-gray-400 rounded-md px-4 py-2 bg-gray-100 border border-gray-300 text-gray-800 focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="md:pl-6">
          <label htmlFor="githubLink" className="block text-sm font-medium text-white mb-1">GitHub Link:</label>
          <input
            type="text"
            id="githubLink"
            name="githubLink"
            placeholder="Enter GitHub link"
            value={formData.githubLink}
            onChange={handleChange}
            className="input-field placeholder-gray-400 rounded-md px-4 py-2 bg-gray-100 border border-gray-300 text-gray-800 focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="md:pl-6">
          <label htmlFor="image" className="block text-sm font-medium text-white mb-1">Upload Image:</label>
          <label className="custom-file-upload" style={{ display: 'inline-block', cursor: 'pointer', padding: '8px 20px', backgroundColor: '#4CAF50', color: '#fff', borderRadius: '5px', transition: 'background-color 0.3s ease' }}>
            <input
              type="file"
              id="image"
              name="image"
              accept="image/*"
              onChange={handleImageChange}
              required
              style={{ display: 'none' }}
            />
            Choose Image
          </label>
        </div>
        <div className="md:pl-6">
  <label htmlFor="techStacks" className="block text-sm font-medium text-gray-800 mb-1">Tech Stacks:</label>
  <div className="relative border border-gray-300 rounded-md">
    <div
      className="form-multiselect block w-full mt-1 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 cursor-pointer"
      onClick={() => setShowTechStackOptions(!showTechStackOptions)}
    >
      {formData.techStacks.length === 0 ? (
        <div className="text--800 px-4 py-2">Select Tech Stacks</div>
      ) : (
        formData.techStacks.map((stack) => (
          <div key={stack} className="text-gray-800 px-4 py-2">{stack}</div>
        ))
      )}
    </div>
    {showTechStackOptions && (
      <div className="absolute top-full left-0 right-0 bg-white border border-gray-300 rounded-b-md shadow-md mt-1">
        <label className="block px-4 py-2 cursor-pointer hover:bg-gray-100">
          <input
            type="checkbox"
            value="HTML"
            checked={formData.techStacks.includes('HTML')}
            onChange={() => handleTechStackOptionClick('HTML')}
            className="mr-2 cursor-pointer"
          />
          HTML
        </label>
        <label className="block px-4 py-2 cursor-pointer hover:bg-gray-100">
          <input
            type="checkbox"
            value="CSS"
            checked={formData.techStacks.includes('CSS')}
            onChange={() => handleTechStackOptionClick('CSS')}
            className="mr-2 cursor-pointer"
          />
          CSS
        </label>
        {/* Add more tech stack options similarly */}
      </div>
    )}
  </div>
</div>

        <div className="md:pl-6">
          <label htmlFor="otherTechStack" className="block text-sm font-medium text-white mb-1">Other Tech Stack:</label>
          <input
            type="text"
            id="otherTechStack"
            name="otherTechStack"
            placeholder="Specify other tech stack"
            value={formData.otherTechStack}
            onChange={handleChange}
            className="input-field placeholder-gray-400 rounded-md px-4 py-2 bg-gray-100 border border-gray-300 text-gray-800 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="col-span-2">
          <button type="submit" className="bg-blue-500 text-white py-3 px-6 rounded-md hover:bg-blue-600 transition duration-300 ease-in-out w-full">Upload Project</button>
        </div>
      </form>
    </div>
  );
};

export default ProjectUploadForm;
