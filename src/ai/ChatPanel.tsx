import { useState, useRef, useEffect } from "react";
import MessageBubble from "./MessageBubble";

export default function ChatPanel({ messages, sendMessage, loading }: any) {
  const [input, setInput] = useState("");
  const bottomRef = useRef<HTMLDivElement>(null);

  const handleSend = () => {
    if (!input.trim()) return;
    sendMessage(input);
    setInput("");
  };

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div
      style={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        background: "#0f172a",
        padding: 20
      }}
    >
      {/* Messages Area */}
      <div
        style={{
          flex: 1,
          overflowY: "auto",
          marginBottom: 20
        }}
      >
        {messages.map((msg: any, index: number) => (
          <MessageBubble key={index} role={msg.role} content={msg.content} />
        ))}
        <div ref={bottomRef} />
      </div>

      {/* Input Area */}
      <div style={{ display: "flex" }}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask Focus+..."
          style={{
            flex: 1,
            padding: 12,
            borderRadius: 8,
            border: "none",
            outline: "none"
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleSend();
          }}
        />
        <button
          onClick={handleSend}
          disabled={loading}
          style={{
            marginLeft: 10,
            padding: "12px 20px",
            background: "#2563eb",
            color: "white",
            border: "none",
            borderRadius: 8,
            cursor: "pointer"
          }}
        >
          {loading ? "..." : "Send"}
        </button>
      </div>
    </div>
  );
}
