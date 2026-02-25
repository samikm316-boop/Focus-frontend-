import { useState } from "react";

const API = "https://focus-backend-production-b26c.up.railway.app";

export function useChat() {
  const [messages, setMessages] = useState<any[]>([]);
  const [conversationId, setConversationId] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);

  const sendMessage = async (text: string) => {
    if (!text.trim()) return;

    setLoading(true);
    setMessages(prev => [...prev, { role: "user", content: text }]);

    const res = await fetch(`${API}/api/chat-stream`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: text, conversationId })
    });

    const reader = res.body!.getReader();
    const decoder = new TextDecoder();

    let aiText = "";
    setMessages(prev => [...prev, { role: "assistant", content: "" }]);

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;

      const chunk = decoder.decode(value);

      if (chunk.startsWith("__CONVO_ID__:")) {
        const id = parseInt(chunk.replace("__CONVO_ID__:", "").trim());
        setConversationId(id);
        continue;
      }

      aiText += chunk;

      setMessages(prev => {
        const copy = [...prev];
        copy[copy.length - 1].content = aiText;
        return copy;
      });
    }

    setLoading(false);
  };

  const loadMessages = async (id: number) => {
    const res = await fetch(`${API}/api/messages/${id}`);
    const data = await res.json();
    setMessages(data);
    setConversationId(id);
  };

  return { messages, sendMessage, loading, loadMessages, conversationId };
}
