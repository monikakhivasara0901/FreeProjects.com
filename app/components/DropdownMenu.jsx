import React, { useState } from "react";
import upArrow from "../assets/down-arrow.png";
import downArrow from "../assets/down-arrow.png";

const DropdownMenu = ({title , data}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border-2 border-gray-500 rounded-lg justify-center items-center mb-1">
      <button
        onClick={toggleMenu}
        className={`flex flex-row justify-between w-full  rounded-lg p-2 ${isOpen? 'border-b-2': 'border-b-0'} border-gray-500`}
      >
        <h1>{title}</h1>
        {/* <img src={isOpen ? upArrow : downArrow} alt="arrow" /> */}
      </button>
 
      {isOpen && (
        <ul className="p-3 pt-1">
          {data.map(item=><button onClick={()=>{document.getElementById(`${title}_${item}`).checked = !document.getElementById(`${title}_${item}`).checked}} className="w-[100%] flex flex-row items-center">
            <input type="checkbox" id ={`${title}_${item}`} name={item} value={item}/>
            <li className="ml-2">{item}</li>
          </button>)}
        </ul>
      )}
    </div>
  );
};

export default DropdownMenu;
