"use client";
import DropdownMenu from "@/app/components/projectComponents/DropdownMenu";
import { technologyNames } from "@/utils/data";
import { institutes } from "@/utils/data";

const FilterBox = ({ setFilters, filters, handleApplyFilters }) => {
  return (
    <div className=" bg-blue-950 w-[25%] p-2 ">
      <div className="flex flex-row border-b-2 pb-1 w-[100%]">
        <h1 className="w-[70%] pb-1 text-xl font-bold pl-3">Filter & Refine</h1>
        <button
          // onClick={() => handleApplyFilters()}
          className="w-[30%] border-2 text-sm font-bold p-1 rounded-lg hover:scale-105 hover:bg-blue-800"
        >
          Apply
        </button>
      </div>
      <div className="flex-1 justify-center items-center p-1 pt-3">
        <DropdownMenu
          filters={filters}
          setFilters={setFilters}
          title="Technology"
          data={technologyNames}
        />
        <DropdownMenu
          filters={filters}
          setFilters={setFilters}
          title="University"
          data={institutes}
        />
      </div>
    </div>
  );
};

export default FilterBox;
