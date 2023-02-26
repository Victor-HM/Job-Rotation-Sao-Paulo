import { BarChart } from "recharts";
import { Bar } from "recharts";
import { CartesianGrid } from "recharts";
import { XAxis } from "recharts";
import { YAxis } from "recharts";
import { Legend } from "recharts";
import { Tooltip } from "recharts";

function App() {
  const data = [
    {
      name: "SP",
      valor: 67.836,
    },
    {
      name: "RJ",
      valor: 36.678,
    },
    {
      name: "MG",
      valor: 29.229,
    },
    {
      name: "ES",
      valor: 27.165,
    },
    {
      name: "Outro",
      valor: 19.849,
    },
  ];

  return (
    <div className="flex flex-col items-center gap-10">
      <h1 className="text-white text-2xl">
        Dado o valor de faturamento mensal de uma distribuidora, detalhado por
        estado:
      </h1>
      <BarChart width={730} height={250} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="valor" name="Reais" fill="#8884d8" />
      </BarChart>
    </div>
  );
}

export default App;
