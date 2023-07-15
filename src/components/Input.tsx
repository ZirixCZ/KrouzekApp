import React, { Dispatch, SetStateAction } from "react";

interface InputProps {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

const Input = ({ handleChange, value }: InputProps) => {
  return (
    <div className="flex flex-col">
      <p className="text-white text-sm font-semibold pb-2">CODE</p>
      <input
        onChange={handleChange}
        value={value}
        type="text"
        autoComplete="off"
        className="bg-input-background rounded-md h-11 w-80 px-4 outline-none"
      />
    </div>
  );
};

export default Input;
