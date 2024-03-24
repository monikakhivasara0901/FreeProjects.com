import React, { useState } from "react";
import upArrow from "@/public/icons/up-arrow.png";
import downArrow from "@/public/icons/down-arrow.png";
import Image from "next/image";

const DropdownMenu = ({ title, data }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border-2 border-gray-500 rounded-lg justify-center items-center mb-1">
      <button
        onClick={toggleMenu}
        className={`flex flex-row justify-between w-full items-center rounded-lg p-2 pr-3 ${
          isOpen ? "border-b-2" : "border-b-0"
        } border-gray-500`}
      >
        <h1>{title}</h1>
        <Image
          src={isOpen ? upArrow : downArrow}
          alt="up arrow"
          className={`w-[15px] h-[15px] {isOpen ? 'rotate-180' : 'rotate-0'}`}
          style={{ filter: "invert(100%)" }}
        />
      </button>

      {isOpen && (
        <ul className="p-3 pt-1">
          {data.map((item) => (
            <button
              onClick={() => {
                document.getElementById(`${title}_${item}`).checked =
                  !document.getElementById(`${title}_${item}`).checked;
              }}
              className="w-[100%] flex flex-row items-center"
            >
              <input
                type="checkbox"
                id={`${title}_${item}`}
                name={item}
                value={item}
              />
              <li className="ml-2">{item}</li>
            </button>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DropdownMenu;
