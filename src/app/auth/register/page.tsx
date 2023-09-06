"use client";

import * as React from "react";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import Input from "@/components/Input";
import { register } from "@/firebase/auth";
import Button from "@/components/Button";
import { getValidCodesFromFirestore } from "@/firebase/firestore";
import { createUser } from "@/firebase/firestore";
import { initStorage } from "@/firebase/storage";
import { CodeInterface } from "@/types/code";

const Register = () => {
  const [error, setError] = useState<string | null>(null);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>(""); 
  const [code, setCode] = useState<string | null>(null);
  const [codeValid, setCodeValid] = useState<boolean>(false);
  const [codeData, setCodeData] = useState<CodeInterface | undefined>(); // TODO: type this [
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    setCode(searchParams.get("code") ?? "");
  }, []);

  const handleCodeValidation = async (code: string) => {
    if (!code) router.push(`/auth`);
    const codes = await getValidCodesFromFirestore();

    if (
      !codes.some((c: { code: string, name: string, surname: string }) => {
        if (c.code === code) {
          setCodeData(c)
          return true
        }
        return false
      })
    ) {
      router.push(`/auth`);
    }

    setCodeValid(true);
  };

  useEffect(() => {
    if (!code) return;

    handleCodeValidation(code);
  }, [code]);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email || !password || !code || !codeValid) return;

    try {
      const userCredential = await register(email, password);
      if (userCredential && codeData) {
        await createUser(codeData);
        await initStorage();
        router.push("/topics");
      }
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
          obscure
        />
        <Input
          handleChange={(e) => setConfirmPassword(e.target.value)}
          value={confirmPassword}
          title="CONFIRM PASSWORD"
          obscure
        />
        <div className="flex w-full justify-start">
          <p>{error}</p>
        </div>
        <div className="h-11 w-full mt-4">
          <Button handleClick={onSubmit} isSubmit>Submit</Button>
        </div>
      </form>
    </div>
  );
};

export default Register;
