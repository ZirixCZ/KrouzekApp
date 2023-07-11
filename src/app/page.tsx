"use client";
import { useState, useEffect } from "react";
import Input from "../components/Input";
import AuthButton from "../components/AuthButton";

const Auth = () => {
  const [code, setCode] = useState("");

  const handleSetCode = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCode(e.target.value.toUpperCase());
  };

  useEffect(() => {
    console.log(code);
  }, [code]);
  return (
    <div className="flex w-full h-full justify-center items-center">
      <div className="flex items-end gap-x-4">
        <Input handleChange={handleSetCode} />
        {code && <AuthButton />}
      </div>
    </div>
  );
};

export default Auth;
