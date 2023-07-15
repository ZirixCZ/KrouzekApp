"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import Image from "next/image";

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
        {code && (
          <div className="h-11 w-16">
            <Button handleClick={handleButtonClick}>
              <Image src="/img/arrow.svg" width={20} height={20} alt="arrow" />
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Auth;
