interface ButtonProps {
  handleClick?: (e?: any) => void;
  children: React.ReactNode;
  isSubmit?: boolean;
}

const Button = ({ handleClick, children, isSubmit }: ButtonProps) => {
  return (
    <button
      onClick={handleClick}
      type={isSubmit ? "submit" : "button"}
      className="bg-authbutton-background flex items-center justify-center rounded-md h-full w-full"
    >
      {children}
    </button>
  );
};

export default Button;
