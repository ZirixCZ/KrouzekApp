interface ButtonProps {
  handleClick: () => void;
  children: React.ReactNode;
}

const Button = ({ handleClick, children }: ButtonProps) => {
  return (
    <button
      onClick={handleClick}
      className="bg-authbutton-background flex items-center justify-center rounded-md h-full w-full"
    >
      {children}
    </button>
  );
};

export default Button;
