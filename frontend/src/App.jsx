import { useState } from "react";
import "./App.css";

function App() {
  const [text, setText] = useState("");

  const submitText = async () => {
    await fetch("http://localhost:8080/api/messages", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ content: text }),
    });

    setText("");
    alert("Text saved!");
  };

  return (
    <div className="container">
      <h2>🚀 DevOps Pulse</h2>

      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter deployment message"
      />

      <button onClick={submitText}>Submit</button>
    </div>
  );
}

export default App;
