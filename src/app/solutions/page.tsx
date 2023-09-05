"use client";

import { useEffect, useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { arta } from "react-syntax-highlighter/dist/esm/styles/hljs";
import Solution from "../../components/Solution";
import { SolutionInterface } from "@/types/solutions";
import { solutionData } from "../../constants/solutionData";
import useMediaQuery from "@/hooks/useMediaQuery";

const Solutions = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const codeString = "int main() { return 0; }";

  const isMobile = useMediaQuery(755);

  return (
    <div
      className={`flex ${
        isOpen ? "w-7/12 xl:w-1/2" : "w-full"
      } h-full flex-col justify-start items-center`}
    >
      <div className="sm:w-27rem flex flex-col items-center gap-14 overflow-y-scroll">
        {solutionData.map((item: SolutionInterface) => (
          <Solution
            section={item}
            handleOpen={toggleOpen}
            isDesktop={!isMobile}
          />
        ))}
        {isOpen && (
          <div className="absolute top-0 right-0 w-1/3">
            <a
              onClick={toggleOpen}
              className="cursor-pointer absolute right-4 top-6"
            >
              <u>Close</u>
            </a>
            <a
              onClick={() => alert("downloaded...")}
              className="cursor-pointer absolute right-4 top-14"
            >
              <u>Download</u>
            </a>
            <div className="h-screen bg-syntax-background">
              <SyntaxHighlighter language="C" style={arta}>
                {codeString}
              </SyntaxHighlighter>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Solutions;
