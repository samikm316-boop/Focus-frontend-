import ChatPanel from "../ai/ChatPanel";
import HistoryPanel from "../ai/HistoryPanel";
import { useChat } from "../ai/useChat";

export default function AiTab() {
  const {
    messages,
    sendMessage,
    loading,
    loadMessages,
    conversationId
  } = useChat();

  return (
    <div style={{ display: "flex", height: "100%" }}>
      <ChatPanel
        messages={messages}
        sendMessage={sendMessage}
        loading={loading}
      />
      <HistoryPanel
        loadMessages={loadMessages}
        activeId={conversationId}
      />
    </div>
  );
}
