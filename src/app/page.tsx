"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

const Auth = () => {
  const [code, setCode] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    setCode(sessionStorage.getItem("code") ?? "");
  }, []);

  useEffect(() => {
    if (code === null) return;

    if (!code) {
      router.push(`auth`);
      return;
    }

    router.push(`topics`);
  }, [code]);

  return (
    <div className="flex w-full h-full justify-center items-center">
      <p className="text-2xl font-bold">Validating...</p>
    </div>
  );
};

export default Auth;
