import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
  setNum: Function;
  svg: JSX.Element;
}

export function Input({ placeholder, setNum, svg, ...rest }: InputProps) {
  return (
    <div className="w-full bg-neutral-800 rounded-md flex justify-center gap-2 py-2 px-3 outline-none focus-within:border-2 focus-within:border-green-500">
      {svg}
      <input
        className="w-full block bg-transparent focus:outline-none  placeholder-gray-600 text-gray-500"
        onChange={(e) => setNum(parseInt(e.target.value))}
        {...rest}
      />
    </div>
  );
}
