import Image from "next/image";

interface AuthButtonProps {
  handleClick: () => void;
}

const AuthButton = ({ handleClick }: AuthButtonProps) => {
  return (
    <button
      onClick={handleClick}
      className="bg-authbutton-background flex items-center justify-center rounded-md h-11 w-16"
    >
      <Image src="/img/arrow.svg" width={20} height={20} alt="arrow" />
    </button>
  );
};

export default AuthButton;
