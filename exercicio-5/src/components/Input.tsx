import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
  setValue: Function;
}

export function Input({ placeholder, setValue, ...rest }: InputProps) {
  return (
    <div className="w-1/2 bg-neutral-800 rounded-md flex justify-center gap-2 py-2 px-3 outline-none focus-within:border-2 focus-within:border-green-500">
      <input
        className="w-full block bg-transparent focus:outline-none placeholder-neutral-600 text-gray-200"
        placeholder={placeholder}
        onChange={(e) => setValue(e.target.value)}
        {...rest}
      />
    </div>
  );
}
