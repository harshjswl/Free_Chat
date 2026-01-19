import { useState } from "react";
import "./App.css";

function App() {
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [lastMessage, setLastMessage] = useState("");

  const submitText = async () => {
    if (!text.trim()) return;

    setLoading(true);
    setSuccess(false);
    try {
      await fetch("http://localhost:8080/api/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ content: text }),
      });

      setLastMessage(text);
      setText("");
      setSuccess(true);

      setTimeout(() => setSuccess(false), 2500);
    } catch {
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="page">
      <div className="card fade-in">

        <h2 className="title">🚀 DevOps Pulse</h2>

        {/* Input Section */}
        <div className="input-group">
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter deployment message"
          />

          <button
            onClick={submitText}
            disabled={loading || !text.trim()}
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
        </div>

        {/* Status */}
        {success && (
          <div className="toast success">
            ✔ Message logged successfully
          </div>
        )}

        {/* Last Message */}
        {lastMessage && (
          <div className="message-card">
            <span className="label">Last Message</span>
            <p>{lastMessage}</p>
            <small>{new Date().toLocaleString()}</small>
          </div>
        )}

      </div>
    </div>
  );
}

export default App;
