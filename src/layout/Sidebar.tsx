export default function Sidebar({ activeTab, setActiveTab }: any) {
  const tabs = [
    { id: "home", label: "Home" },
    { id: "ai", label: "AI Chat" },
    { id: "study", label: "Ask About Study" },
    { id: "workout", label: "Ask About Workout" },
    { id: "groups", label: "Groups" },
    { id: "settings", label: "Settings" }
  ];

  return (
    <div
      style={{
        width: 240,
        background: "#111827",
        padding: 20,
        display: "flex",
        flexDirection: "column"
      }}
    >
      <h2 style={{ marginBottom: 30 }}>Focus+</h2>

      {tabs.map(tab => (
        <div
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          style={{
            marginBottom: 20,
            cursor: "pointer",
            fontWeight: activeTab === tab.id ? "bold" : "normal",
            color: activeTab === tab.id ? "#3b82f6" : "white"
          }}
        >
          {tab.label}
        </div>
      ))}
    </div>
  );
}
