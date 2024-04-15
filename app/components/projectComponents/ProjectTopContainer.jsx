import { useState } from 'react';

const ProjectTopContainer = ({ filters, setFilters, handleApplyFilters }) => {
  const [searchText, setSearchText] = useState('');

  const handleAddTechnology = (technology) => {
    if (!filters.Technology.includes(technology)) {
      setFilters({
        ...filters,
        Technology: [...filters.Technology, technology],
      });
      // Call handleApplyFilters after updating state
      // handleApplyFilters();
    }
  };
  
  const handleSearch = () => {
    if (searchText.trim() !== '') {
      setFilters({
        ...filters,
        SearchBox: [...filters.SearchBox, searchText.trim()],
      });
      // Call handleApplyFilters after updating state
      // handleApplyFilters();
      setSearchText('');
    }
  };
  
  const handleSearchInputChange = (event) => {
    setSearchText(event.target.value);
  };



  let technologies = [
    "HTML",
    "CSS",
    "JavaScript",
    "Java",
    "Python",
    "React",
    "Node.js",
    "Ruby",
  ];

  return (
    <div className="flex-1">
      <div className="flex flex-row items-center h-10 bg-[#303b5f]">
        <div className="flex-row w-[70%]">
          {technologies.map((item) => (
            <button key={item} className="m-1 ml-2" onClick={() => handleAddTechnology(item)}>
              {item}
            </button>
          ))}
        </div>
        <div className="flex items-center w-[30%] justify-center pl-2">
          <input
            type="text"
            className="w-[80%] h-8 rounded-md text-black p-1 bg-gray-200"
            placeholder="Search Here..."
            value={searchText}
            onChange={handleSearchInputChange}
          />
          <button className="ml-2 w-[18%] h-8 border-2 border-white rounded-xl hover:bg-blue-800" onClick={handleSearch}>
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectTopContainer;
