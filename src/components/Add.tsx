import * as React from "react";

const SvgComponent = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <path
      fill="#fff"
      d="M19.52 7.56v4.88h-6.96v6.8H7.4v-6.8H.48V7.56H7.4V.76h5.16v6.8h6.96Z"
    />
  </svg>
);

export default SvgComponent;
