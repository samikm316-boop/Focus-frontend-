import { useState } from "react";

export default function StudyTab() {
  const [question, setQuestion] = useState("");

  return (
    <div style={{ padding: 40 }}>
      <h2>Ask About Study</h2>

      <p>
        This section will allow users to select Notes,
        Flashcards, or Quizzes and ask AI questions about them.
      </p>

      <input
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="Ask something about your notes..."
        style={{
          width: "100%",
          padding: 12,
          marginTop: 20,
          borderRadius: 8,
          border: "1px solid #ccc"
        }}
      />

      <button
        style={{
          marginTop: 20,
          padding: "10px 20px",
          background: "#2563eb",
          color: "white",
          border: "none",
          borderRadius: 8
        }}
      >
        Ask Study AI
      </button>
    </div>
  );
}
