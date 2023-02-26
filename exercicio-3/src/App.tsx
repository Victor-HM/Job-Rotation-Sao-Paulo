import { useEffect, useState } from "react";

function App() {
  type DataRequest = Array<{
    dia: number;
    valor: number;
  }>;

  const [request, setRequest] = useState<DataRequest>([]);

  useEffect(() => {
    async function RequestData() {
      const response = await fetch("http://localhost:5173/dados.json");

      const data = await response.json();

      await setRequest(data);
    }

    RequestData();
  }, []);

  function higherValue() {
    var max = request.reduce((prev, current) => {
      return prev.valor > current.valor ? prev : current;
    });

    return max;
  }

  function smallerValue() {
    const findIndex = request.findIndex((arr) => {
      return arr.valor === 0;
    });

    let subArray = request;
    let removeValuesNulls: any = [];
    for (let i = 0; i < subArray.length; i++) {
      subArray[i].valor === 0 && subArray.splice(i, 1);
    }

    var min = request.reduce((prev, current) => {
      return prev.valor < current.valor ? prev : current;
    });

    return min;
  }

  function mediaValue() {
    let soma = 0;
    for (let i = 0; i < request.length; i++) {
      soma = soma + request[i].valor;
    }

    const media = soma / request.length;

    let days = [];

    for (let i = 0; i < request.length; i++) {
      media > request[i].valor && days.push(request[i]);
    }

    // var days = request.reduce((prev, current) => {
    //   return prev.valor > current.valor ? prev : current;
    // });

    return days.length;
  }

  console.log(request.length ? mediaValue() : "");

  return (
    <div className="text-white flex items-center flex-col gap-10">
      <h1 className="w-1/2 text-center font-bold">
        Dado um vetor que guarda o valor de faturamento diário de uma
        distribuidora, faça um programa, na linguagem que desejar, que calcule e
        retorne:
      </h1>
      <div className="grid grid-cols-3 gap-10">
        <div className="flex flex-col gap-3 items-center">
          <span>O dia que mais faturaram</span>
          <strong>Dia</strong>
          {request.length ? <p>{higherValue().dia}</p> : <></>}
          <strong>Valor</strong>
          {request.length ? <p>{higherValue().valor}</p> : <></>}
        </div>

        <div className="flex flex-col gap-3 items-center">
          <span>O dia que menos faturaram</span>
          <strong>Dia</strong>
          {request.length ? <p>{smallerValue().dia}</p> : <></>}
          <strong>Valor</strong>
          {request.length ? <p>{smallerValue().valor}</p> : <></>}
        </div>

        <div className="flex flex-col gap-3 items-center">
          <span>Dias que superaram a média mensal</span>
          <strong>Dias</strong>
          {request.length ? <p>{mediaValue()}</p> : <></>}
        </div>
      </div>
    </div>
  );
}

export default App;
