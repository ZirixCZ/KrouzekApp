import Section from "../../../components/Section/Section";
import { topicData, sections } from "../../../constants/topicsData";

const Topic = ({ params }: { params: { slug: string } }) => {
  // TODO: Fetch necessary data for the topic using params.slug

  return (
    <div className="flex flex-col justify-start items-center w-full h-full gap-11 sm:gap-14 md:gap-16 lg:gap-20 xl:gap-28">
      <div className="sm:w-27rem flex flex-col sm:items-center gap-14">
        <h1 className="text-4xl font-bold">{topicData.title.toUpperCase()}</h1>
        <p
          dangerouslySetInnerHTML={{ __html: topicData.description }}
          className="text-sm font-normal leading-6"
        ></p>
      </div>
      <div className="overflow-y-scroll w-full flex sm:justify-center">
        <div className="w-27rem flex flex-col gap-16">
          {sections.map((section) => (
            <Section title={section.title} description={section.description} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Topic;
