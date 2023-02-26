import { FormEvent, useState } from "react";
import { Button } from "./components/Button";
import { Input } from "./components/Input";

function App() {
  const [value, setValue] = useState<string>("");
  const [valueInverted, setValueInverted] = useState<string>("");

  function invertString(event: FormEvent) {
    event.preventDefault();

    let inverted = "";

    for (let i = value.length - 1; i >= 0; i--) {
      inverted += value[i];
    }
    setValueInverted(inverted);

    console.log(valueInverted);
  }

  return (
    <div className="flex justify-center text-white">
      <form className="w-1/2 flex flex-col items-center gap-8">
        <h1 className="text-2xl font-bold">Inverta caracteres</h1>

        <Input placeholder="Insira" setValue={setValue} />
        <Button type="submit" placeholder="Inverter" onClick={invertString} />

        <span className="text-xl">{valueInverted}</span>
      </form>
    </div>
  );
}

export default App;
