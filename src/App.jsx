import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>React Counter (Vite + useState)</h1>
      <h2>{count}</h2>
      <div>
        <button onClick={() => setCount(count + 1)}>Tambah</button>
        <button onClick={() => setCount(count - 1)} style={{ marginLeft: "10px" }}>
          Kurangi
        </button>
        <button onClick={() => setCount(0)} style={{ marginLeft: "10px" }}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;
