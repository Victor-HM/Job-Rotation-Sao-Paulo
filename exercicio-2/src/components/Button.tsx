import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  placeholder: string;
}

export function Button({ placeholder, ...props }: ButtonProps) {
  return (
    <button
      className="w-full h-10 flex justify-center items-center text-white bg-green-500 rounded-md hover:brightness-105"
      {...props}
    >
      <p>{placeholder}</p>
    </button>
  );
}
