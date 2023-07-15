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
        <div className="flex w-full h-full justify-end">
          <p
            dangerouslySetInnerHTML={{ __html: description }}
            className="text-sm font-normal leading-6"
          ></p>
          <div className="relative w-0 h-14">
            <div className="w-44 h-full ml-16">
              <UploadButton />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section;
