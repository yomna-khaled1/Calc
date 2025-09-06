import { useState } from "react";
import "./App.css";

// ========================
// InputField Component
function InputField({ amount, setAmount, onEnter }) {
  return (
    <input
      type="number"
      value={amount}
      onChange={(e) => setAmount(e.target.value)}
      onKeyDown={(e) => e.key === "Enter" && onEnter()}
      placeholder="ادخل المبلغ"
      style={{ padding: "8px", margin: "10px", fontSize: "16px" }}
    />
  );
}

// ========================
// CalculateButton Component
function CalculateButton({ onClick }) {
  return (
    <button onClick={onClick} style={{ padding: "8px 16px", fontSize: "16px" }}>
      احسب
    </button>
  );
}

// ========================
// ResultDisplay Component
function ResultDisplay({ result }) {
  return (
    <div style={{ marginTop: 20 }}>
      {result.map((line, i) => (
        <p key={i}>{line}</p>
      ))}
    </div>
  );
}

// ========================
// Calculator Component
function Calculator() {
  const [amount, setAmount] = useState("");
  const [result, setResult] = useState([]);

  const calculateDenominations = (amount) => {
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

    return output;
  };

  const handleCalculate = () => {
    setResult(calculateDenominations(amount));
  };

  return (
    <div style={{ textAlign: "center", marginTop: 20 }}>
      <h2> آلة حاسبة للفئات</h2>
      <InputField amount={amount} setAmount={setAmount} onEnter={handleCalculate} />
      <CalculateButton onClick={handleCalculate} />
      <ResultDisplay result={result} />
    </div>
  );
}

// ========================
// App Component
export default function App() {
  return (
    <div style={{ padding: 20 }}>
      <h1>تجربة المكونات المستقلة</h1>
      {<Calculator />}
    </div>
  );
}

