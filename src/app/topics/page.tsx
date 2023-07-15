"use client";

import Table from "@/components/Table";
import Arrow from "@/components/Arrow";
import Edit from "@/components/Edit";
import Delete from "@/components/Delete";

const Topics = () => {
  const data = [
    {
      name: "Printing",
      actions: [
        {
          query: "/",
          children: <Arrow fill="#fff" width={30} height={30} />,
        },
        {
          query: "/edit",
          children: <Edit fill="#fff" width={30} height={25} />,
        },
        {
          query: "/delete",
          children: <Delete fill="#fff" width={30} height={25} />,
        },
      ],
    },
    {
      name: "Memory allocation",
      actions: [
        {
          query: "/arrow",
          children: <Arrow fill="#fff" width={30} height={30} />,
        },
        {
          query: "/edit",
          children: <Edit fill="#fff" width={30} height={25} />,
        },
        {
          query: "/",
          children: <Delete fill="#fff" width={30} height={25} />,
        },
      ],
    },
    {
      name: "Pointer logic",
      actions: [
        {
          query: "/arrow",
          children: <Arrow fill="#fff" width={30} height={30} />,
        },
        {
          query: "/edit",
          children: <Edit fill="#fff" width={30} height={25} />,
        },
        {
          query: "/",
          children: <Delete fill="#fff" width={30} height={25} />,
        },
      ],
    },
  ];

  const headings = [
    {
      name: "TOPIC",
      width: "3/4",
    },
    {
      name: "ACTION",
      width: "1/4",
    },
  ];

  return (
    <div className="w-full h-full flex justify-center align-center">
      <div className="w-32rem h-fit ">
        <Table title="Topics" headings={headings} data={data} />
      </div>
    </div>
  );
};
export default Topics;
