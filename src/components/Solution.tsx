import { SolutionInterface, SectionsInterface } from "@/types/solutions";
import SolutionTable from "./SolutionTable";

interface SolutionProps {
  section: SolutionInterface;
  handleOpen: () => void;
}
const Solution = (props: SolutionProps) => {
  return (
    <div className="flex flex-col justify-center items-start">
      <h2 className="text-2xl font-semibold pb-6">{props.section.title}</h2>
      {props.section.sections.map((section: SectionsInterface) => {
        return (
          <div>
            <p className="font-semibold pb-7">{section.title}</p>
            <div className="w-27rem h-fit flex flex-row justify-between items-center">
              <SolutionTable
                rows={section.submissions}
                handleOpen={props.handleOpen}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Solution;
