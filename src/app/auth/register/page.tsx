"use client";

import { useEffect, useState, useRef, useLayoutEffect } from "react";
import { useRouter } from "next/navigation";
import Input from "@/components/Input";
import { register } from "@/firebase/auth";
import Button from "@/components/Button";

const Solutions = () => {
  const [error, setError] = useState<string | null>(null);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  // TODO check code against firebase
  const [code, setCode] = useState<string | null>(null);

  const router = useRouter();

  useLayoutEffect(() => {
    setCode(sessionStorage.getItem("code") ?? "");

    if (!code) {
      router.push("/auth");
    }
  }, []);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email || !password || !code) return;

    try {
      const userCredential = await register(email, password);
      console.log(userCredential);
    } catch (error) {
      setError(error as string);
    }
  };

  return (
    <div className="flex w-full h-full justify-center items-center">
      <form className="flex items-end justify-end gap-4 flex-col">
        <Input
          handleChange={(e) => setEmail(e.target.value)}
          value={email}
          title="EMAIL"
        />
        <Input
          handleChange={(e) => setPassword(e.target.value)}
          value={password}
          title="PASSWORD"
        />
        <Input
          handleChange={(e) => setPassword(e.target.value)}
          value={password}
          title="CONFIRM PASSWORD"
        />
        <div className="flex w-full justify-start">
          <p>{error}</p>
        </div>
        <div className="h-11 w-full mt-4">
          <Button handleClick={onSubmit}>Submit</Button>
        </div>
      </form>
    </div>
  );
};

export default Solutions;
