import Add from "../components/Add";

const UploadButton = () => {
  return (
    <div className="flex w-full h-full bg-upload-button-main">
      <div className="flex justify-center items-center w-1/3 bg-upload-button-section">
        <Add />
      </div>
      <div className="flex justify-center items-center w-2/3 text-lg font-bold">
        UPLOAD
      </div>
    </div>
  );
};

export default UploadButton;
