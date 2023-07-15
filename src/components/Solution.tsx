import { SolutionInterface, SectionsInterface } from "@/types/solutions";
import SolutionTable from "./SolutionTable";

const Solution = (props: SolutionInterface) => {
  return (
    <div className="flex flex-col justify-center items-start">
      <h2 className="text-2xl font-semibold pb-6">{props.title}</h2>
      {props.sections.map((section: SectionsInterface) => {
        return (
          <div>
            <p className="font-semibold pb-7">{section.title}</p>
            <div className="w-60 h-fit flex flex-row justify-between items-center">
              <SolutionTable rows={section.submissions} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Solution;
