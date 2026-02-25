export default function MessageBubble({ role, content }: any) {
  const isUser = role === "user";

  return (
    <div
      style={{
        textAlign: isUser ? "right" : "left",
        marginBottom: 12
      }}
    >
      <div
        style={{
          display: "inline-block",
          padding: "10px 14px",
          borderRadius: 12,
          background: isUser ? "#2563eb" : "#1e293b",
          color: "white",
          maxWidth: "70%",
          wordBreak: "break-word"
        }}
      >
        {content}
      </div>
    </div>
  );
}
