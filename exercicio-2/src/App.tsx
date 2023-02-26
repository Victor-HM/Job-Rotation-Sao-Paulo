import { useState, FormEvent } from "react";

import { Button } from "./components/Button";
import { Input } from "./components/Input";

import { Atom } from "phosphor-react";

function App() {
  const [num, setNum] = useState<number>();

  function Fibonacci(event: FormEvent) {
    event.preventDefault();
    let sequence: Array<number> = [0, 1];
    let length: number = 2;

    if (num === 0 || num === 1) {
      alert(`o numero ${num} pertence na sequência de Fibonnaci`);
    } else {
      for (let i = 0; i <= 100; i++) {
        sequence.push(sequence[length - 1] + sequence[length - 2]);

        length = length + 1;
      }
      const index = sequence.findIndex((arr) => arr === num);

      if (index !== -1) {
        alert(`o numero ${num} pertence na sequência de Fibonnaci`);
      } else {
        alert(`o numero ${num} NÃO pertence na sequência de Fibonnaci`);
      }
    }
  }

  console.log(typeof num);

  return (
    <div className="flex justify-center text-white py-10">
      <div className="w-1/2 flex flex-col items-center gap-5">
        <div>
          <h1 className="text-2xl font-bold">Sequência de Fibonacci</h1>
        </div>

        <form className="flex flex-col gap-3">
          <div className="flex flex-col">
            <label htmlFor="input">Insira um valor</label>
            <Input
              type="number"
              placeholder="Insira um valor"
              svg={<Atom size={24} />}
              setNum={setNum}
            />
          </div>
          <Button type="submit" placeholder="Verificar" onClick={Fibonacci} />
        </form>
      </div>
    </div>
  );
}

export default App;
