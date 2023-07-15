import Solution from "../../components/Solution";
import { SolutionInterface } from "@/types/solutions";
import { solutionData } from "../../constants/solutionData";

const Solutions = () => {
  return (
    <div className="flex w-full h-full flex-col justify-start items-center">
      <div className="sm:w-27rem flex flex-col items-center gap-14">
        {solutionData.map((item: SolutionInterface) => (
          <Solution {...item} />
        ))}
      </div>
    </div>
  );
};

export default Solutions;
