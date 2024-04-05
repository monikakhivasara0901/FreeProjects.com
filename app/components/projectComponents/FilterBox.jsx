'use client'
import DropdownMenu from "@/app/components/projectComponents/DropdownMenu";
import {technologyNames} from "@/utils/data"
import {institutes} from "@/utils/data"

const FilterBox = ({}) => {
  
  return (
    <div className=" bg-blue-950 w-[25%] p-2">
        <h1 className="w-[100%] border-b-2 pb-1 text-xl font-bold pl-3">Filter & Refine</h1>
      <div className="flex-1 justify-center items-center p-1 pt-3">
        <DropdownMenu title ="Technology" data={technologyNames}/>
        <DropdownMenu title ="University" data={institutes}/>
      </div>
    </div>
  );
};

export default FilterBox;
