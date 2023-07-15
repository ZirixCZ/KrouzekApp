import * as React from "react";

const SvgComponent = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={456}
    height={1}
    fill="none"
    {...props}
  >
    <path fill="#535562" d="M0 0h456v1H0z" />
  </svg>
);
export default SvgComponent;
