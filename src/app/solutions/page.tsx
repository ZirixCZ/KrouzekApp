"use client";

import { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { arta } from "react-syntax-highlighter/dist/esm/styles/hljs";
import Solution from "../../components/Solution";
import { SolutionInterface } from "@/types/solutions";
import { solutionData } from "../../constants/solutionData";

const Solutions = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    console.log("toggle");
    setIsOpen(!isOpen);
  };

  const codeString = "int main() { return 0; }";

  return (
    <div
      className={`flex ${
        isOpen ? "w-1/2" : "w-full"
      } h-full flex-col justify-start items-center`}
    >
      <div className="sm:w-27rem flex flex-col items-center gap-14">
        {solutionData.map((item: SolutionInterface) => (
          <Solution section={item} handleOpen={toggleOpen} />
        ))}
        {isOpen && (
          <div className="absolute top-0 right-0 w-1/3">
            <a onClick={toggleOpen} className="cursor-pointer">
              <u>Close</u>
            </a>
            <SyntaxHighlighter language="C" style={arta}>
              {codeString}
            </SyntaxHighlighter>
          </div>
        )}
      </div>
    </div>
  );
};

export default Solutions;
