import { useEffect, useState } from "react";

const API = "https://focus-backend-production-b26c.up.railway.app";

export default function HistoryPanel({ loadMessages, activeId }: any) {
  const [conversations, setConversations] = useState<any[]>([]);

  const fetchConversations = async () => {
    const res = await fetch(`${API}/api/conversations`);
    const data = await res.json();
    setConversations(data);
  };

  useEffect(() => {
    fetchConversations();
  }, []);

  return (
    <div
      style={{
        width: 280,
        background: "#111827",
        padding: 16,
        borderLeft: "1px solid #1f2937",
        overflowY: "auto"
      }}
    >
      <h3 style={{ color: "white", marginBottom: 12 }}>
        Chat History
      </h3>

      {conversations.map((convo) => (
        <div
          key={convo.id}
          onClick={() => loadMessages(convo.id)}
          style={{
            padding: 10,
            marginBottom: 8,
            background:
              activeId === convo.id ? "#1e293b" : "#0f172a",
            color: "white",
            borderRadius: 6,
            cursor: "pointer"
          }}
        >
          Conversation #{convo.id}
        </div>
      ))}
    </div>
  );
}
