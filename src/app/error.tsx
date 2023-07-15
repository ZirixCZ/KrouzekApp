"use client";
import Button from "../components/Button";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-4">
      <h2>Something went wrong!</h2>
      <p>{error.message}</p>
      <div className="h-11 w-16">
        <Button handleClick={reset}>Reload</Button>
      </div>
    </div>
  );
}
