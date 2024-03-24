'use client'
import DropdownMenu from "@/app/components/projectComponents/DropdownMenu";

const FilterBox = ({}) => {
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
  let university = [
    "Harvard University",
    "MIT",
    "Stanford University",
    "University of Oxford",
    "University of Cambridge",
    "Caltech",
    "ETH Zurich",
    "London (UCL)",
    "Chicago",
    "Imperial College London"
  ];
  return (
    <div className=" bg-blue-950 w-[25%] p-2">
        <h1 className="w-[100%] border-b-2 pb-1 text-xl font-bold pl-3">Filter & Refine</h1>
      <div className="flex-1 justify-center items-center p-1 pt-3">
        <DropdownMenu title ="Technology" data={technologies}/>
        <DropdownMenu title ="University" data={university}/>
      </div>
    </div>
  );
};

export default FilterBox;
