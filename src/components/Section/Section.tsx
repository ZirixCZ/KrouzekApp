import UploadButton from "@/components/UploadButton";

interface SectionProps {
  title: string;
  description: string;
}

const Section = ({ title, description }: SectionProps) => {
  return (
    <div className="w-fit h-full flex flex-row justify-start overflow-x-visible">
      <div className="flex flex-col gap-5">
        <div className="flex w-full h-full flex-1">
          <h2 className="text-2xl font-bold">{title}</h2>
        </div>
        <div className="flex w-full h-full flex-col 2xl:flex-row justify-start 2xl:justify-end gap-5 2xl:gap-0">
          <p
            dangerouslySetInnerHTML={{ __html: description }}
            className="text-sm font-normal leading-6"
          ></p>
          <div className="relative w-44 2xl:w-0 h-14">
            <div className="w-44 h-full ml-0 2xl:ml-16">
              <UploadButton />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section;
