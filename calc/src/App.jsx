import { useState } from 'react'
import './App.css'
import { useState } from "react";

export default function App() {
  const [amount, setAmount] = useState("");
  const [result, setResult] = useState([]);

  const handleCalculate = () => {
    let num = parseInt(amount);
    const denoms = [200, 100, 50];
    let output = [];

    denoms.forEach((d) => {
      let count = Math.floor(num / d);
      if (count > 0) {
        output.push(`${count} × ${d}`);
        num = num % d;
      }
    });

    if (num > 0) output.push(`المتبقي: ${num}`);

    setResult(output);
  };

  return (
    <div style={{ padding: 20 }}>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleCalculate()}
      />
      <button onClick={handleCalculate}>احسب</button>
      <div>
        {result.map((line, i) => (
          <p key={i}>{line}</p>
        ))}
      </div>
    </div>
  );
}
