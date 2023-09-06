"use client";

import { useState } from "react";
import Input from "@/components/Input";
import { login } from "@/firebase/auth";
import Button from "@/components/Button";

const Login = () => {
  const [error, setError] = useState<string | null>(null);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email || !password) return;

    try {
      await login(email, password);
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
        <div className="flex w-full justify-start">
          <a href="/auth">Register</a>
          <p>{error}</p>
        </div>
        <div className="h-11 w-full mt-4">
          <Button handleClick={onSubmit} isSubmit>Submit</Button>
        </div>
      </form>
    </div>
  );
};

export default Login;
