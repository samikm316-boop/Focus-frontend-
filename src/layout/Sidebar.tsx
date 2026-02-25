export default function Sidebar({ activeTab, setActiveTab }: any) {
  const tabs = [
    { id: "ai", label: "AI Chat" },
    { id: "study", label: "Ask About Study" },
    { id: "workout", label: "Ask About Workout" },
    { id: "groups", label: "Groups" },
    { id: "settings", label: "Settings" }
  ];

  return (
    <div style={{ width: 220, background: "#111827", padding: 20 }}>
      <h2>Focus+</h2>

      {tabs.map(tab => (
        <div
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          style={{
            marginTop: 20,
            cursor: "pointer",
            color: activeTab === tab.id ? "#3b82f6" : "white"
          }}
        >
          {tab.label}
        </div>
      ))}
    </div>
  );
}
