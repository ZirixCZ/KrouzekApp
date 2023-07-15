import Table from "@/components/Table";

const Topics = () => {
  const data = [
    {
      name: "Topic 1",
      actions: [
        {
          href: "/arrow",
          src: "/img/arrow.svg",
        },
        {
          href: "/edit",
          src: "/img/edit.svg",
        },
        {
          href: "/",
          src: "/img/delete.svg",
        },
      ],
    },
  ];

  const headings = [
    {
      name: "TOPICS",
      width: "3/4",
    },
    {
      name: "ACTION",
      width: "1/4",
    },
  ];
  return (
    <div className="w-full h-full">
      <div className="w-96 h-64">
        <Table title="Topics" headings={headings} data={data} />
      </div>
    </div>
  );
};
export default Topics;
