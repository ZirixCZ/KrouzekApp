"use client";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import Input from "../components/Input";
import AuthButton from "../components/AuthButton";

const Auth = () => {
  const [code, setCode] = useState("");
  const router = useRouter();

  const handleSetCode = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCode(e.target.value.toUpperCase());
  };

  const handleButtonClick = () => {
    // TODO: check if code is valid against firebase
    if (code) {
      router.push("/topics");
    }
  };

  return (
    <div className="flex w-full h-full justify-center items-center">
      <div className="flex items-end gap-x-4">
        <Input handleChange={handleSetCode} value={code} />
        {code && <AuthButton handleClick={handleButtonClick} />}
      </div>
    </div>
  );
};

export default Auth;
