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
    file: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleTechStackChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setFormData((prevData) => ({
        ...prevData,
        techStacks: [...prevData.techStacks, value],
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        techStacks: prevData.techStacks.filter((stack) => stack !== value),
      }));
    }
  };

  const handleFileChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      file: e.target.files[0],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
  };

  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-3xl font-semibold text-center text-blue-800 mb-6">Upload Your Project</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title:</label>
          <input 
            type="text" 
            id="title" 
            name="title" 
            placeholder="Enter title" 
            value={formData.title} 
            onChange={handleChange} 
            className="input-field" 
            required 
            style={{ color: '#333' }}
          />
        </div>
        <div>
          <label htmlFor="teamMembers" className="block text-sm font-medium text-gray-700">Number of Team Members:</label>
          <input 
            type="number" 
            id="teamMembers" 
            name="teamMembers" 
            placeholder="Enter number of team members" 
            value={formData.teamMembers} 
            onChange={handleChange} 
            className="input-field" 
            required 
            style={{ color: '#333' }}
          />
        </div>
        <div>
          <label htmlFor="teamMemberNames" className="block text-sm font-medium text-gray-700">Names of Team Members:</label>
          <input 
            type="text" 
            id="teamMemberNames" 
            name="teamMemberNames" 
            placeholder="Enter names of team members" 
            value={formData.teamMemberNames} 
            onChange={handleChange} 
            className="input-field" 
            required 
            style={{ color: '#333' }}
          />
        </div>
        <div>
          <label htmlFor="teamMemberEmails" className="block text-sm font-medium text-gray-700">Emails of Team Members:</label>
          <input 
            type="email" 
            id="teamMemberEmails" 
            name="teamMemberEmails" 
            placeholder="Enter emails of team members" 
            value={formData.teamMemberEmails} 
            onChange={handleChange} 
            className="input-field" 
            required 
            style={{ color: '#333' }}
          />
        </div>
        <div>
          <label htmlFor="techStacks" className="block text-sm font-medium text-gray-700">Tech Stacks:</label>
          <select 
            id="techStacks" 
            name="techStacks" 
            multiple 
            onChange={handleTechStackChange} 
            className="form-multiselect block w-full mt-1 rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            style={{ color: '#333' }}
          >
            <option value="HTML">HTML</option>
            <option value="CSS">CSS</option>
            <option value="JavaScript">JavaScript</option>
            <option value="React">React</option>
            <option value="Node.js">Node.js</option>
          </select>
          {/* Add more tech stacks similarly */}
        </div>
        <div>
          <label htmlFor="otherTechStack" className="block text-sm font-medium text-gray-700">Other Tech Stack:</label>
          <input 
            type="text" 
            id="otherTechStack" 
            name="otherTechStack" 
            placeholder="Specify other tech stack" 
            value={formData.otherTechStack} 
            onChange={handleChange} 
            className="input-field" 
            style={{ color: '#333' }}
          />
        </div>
        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description:</label>
          <textarea 
            id="description" 
            name="description" 
            placeholder="Enter description" 
            value={formData.description} 
            onChange={handleChange} 
            className="input-field" 
            required 
            style={{ color: '#333' }}
          ></textarea>
        </div>
        <div>
          <label htmlFor="university" className="block text-sm font-medium text-gray-700">University:</label>
          <input 
            type="text" 
            id="university" 
            name="university" 
            placeholder="Enter university" 
            value={formData.university} 
            onChange={handleChange} 
            className="input-field" 
            required 
            style={{ color: '#333' }}
          />
        </div>
        <div>
          <label htmlFor="githubLink"  className="block text-sm font-medium text-gray-700">GitHub Link:</label>
          <input 
            type="text" 
            id="githubLink" 
            name="githubLink" 
            placeholder="Enter GitHub link" 
            value={formData.githubLink} 
            onChange={handleChange} 
            className="input-field" 
            required 
            style={{ color: '#333' }}
          />
        </div>
        <div>
          <label htmlFor="file" className="block text-sm font-medium text-gray-700">Project File:</label>
          <input 
            type="file" 
            id="file" 
            name="file" 
            accept=".pdf,.doc,.docx,.zip,.rar" 
            onChange={handleFileChange} 
            className="input-field" 
            required 
            style={{ color: '#333' }}
          />
        </div>
        <div>
          <button type="submit" className="bg-blue-500 text-white py-3 px-6 rounded-md hover:bg-blue-600 transition duration-300 ease-in-out">Upload Project</button>
        </div>
      </form>
    </div>
  );
};

export default ProjectUploadForm;
