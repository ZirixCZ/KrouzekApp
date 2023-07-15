import Section from "../../../components/Section/Section";

const Topic = ({ params }: { params: { slug: string } }) => {
  // TODO: Fetch necessary data for the topic using params.slug
  const data = {
    title: "Memory allocation",
    description:
      "In C, memory allocation is a crucial aspect of managing memory resources for efficient program execution. It involves dynamically allocating and deallocating memory during runtime using functions like <b>malloc</b>, <b>calloc</b>, <b>realloc</b>, and <b>free</b>.",
  };

  const sections = [
    {
      title: "The use of malloc",
      description:
        "In C, memory allocation is a crucial aspect of managing memory resources for efficient program execution. It involves dynamically allocating and deallocating memory during runtime using functions like <b>malloc</b>, <b>calloc</b>, <b>realloc</b>, and <b>free</b>.",
    },
    {
      title: "The use of calloc",
      description:
        "In C, memory allocation is a crucial aspect of managing memory resources for efficient program execution. It involves dynamically allocating and deallocating memory during runtime using functions like <b>malloc</b>, <b>calloc</b>, <b>realloc</b>, and <b>free</b>.",
    },
  ];

  return (
    <div className="flex flex-col justify-start items-center w-full h-full gap-48">
      <div className="sm:w-27rem flex flex-col sm:items-center gap-14">
        <h1 className="text-4xl font-bold">{data.title.toUpperCase()}</h1>
        <p
          dangerouslySetInnerHTML={{ __html: data.description }}
          className="text-sm font-normal leading-6"
        ></p>
      </div>
      <div className="overflow-y-scroll w-full flex sm:justify-center">
        <div className="w-27rem">
          {sections.map((section) => (
            <Section title={section.title} description={section.description} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Topic;
