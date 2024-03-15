import { NextPage } from "next";
import NavBar from "../components/NavBar";
import ProjectTopContainer from "../components/ProjectTopContainer";
import FilterBox from "../components/FilterBox";
import ProjectViewContainer from "../components/ProjectViewContainer";

interface Props {}

const Page: NextPage<Props> = ({}) => {
  return (
    <div className="flex flex-col flex-1  h-[110vh]">
      <NavBar />
      <ProjectTopContainer />
      <div className="flex h-[100%] flex-row">
        <FilterBox />
        <ProjectViewContainer/>
      </div>
    </div>
  );
};

export default Page;
