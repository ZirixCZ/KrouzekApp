"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import firebaseApp from "@/firebase/config";
import Image from "next/image";

const Auth = () => {
  const [code, setCode] = useState("");

  const handleSetCode = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCode(e.target.value.toUpperCase());
  };

  const router = useRouter();

  React.useEffect(() => {}, []);

  const handleButtonClick = async () => {
    if (code) {
      router.push(`/auth/register?code=${code}`);
    }
  };

  return (
    <div className="flex w-full h-full justify-center items-center">
      <div className="flex flex-col">
        <div className="flex items-end justify-end gap-x-4">
          <Input handleChange={handleSetCode} value={code} />
          {code && (
            <div className="h-11 w-16 absolute">
              <Button handleClick={handleButtonClick}>
                <Image
                  src="/img/arrow.svg"
                  width={20}
                  height={20}
                  alt="arrow"
                />
              </Button>
            </div>
          )}
        </div>
        <a href="/auth/login">Login</a>
      </div>
    </div>
  );
};

export default Auth;
