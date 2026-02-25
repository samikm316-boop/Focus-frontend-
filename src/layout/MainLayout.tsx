import { useState } from "react";
import Sidebar from "./Sidebar";
import AiTab from "../tabs/AiTab";
import StudyTab from "../tabs/StudyTab";
import WorkoutTab from "../tabs/WorkoutTab";
import GroupsTab from "../tabs/GroupsTab";
import SettingsTab from "../tabs/SettingsTab";

export default function MainLayout() {
  const [activeTab, setActiveTab] = useState("ai");

  const renderTab = () => {
    switch (activeTab) {
      case "ai":
        return <AiTab />;
      case "study":
        return <StudyTab />;
      case "workout":
        return <WorkoutTab />;
      case "groups":
        return <GroupsTab />;
      case "settings":
        return <SettingsTab />;
      default:
        return <AiTab />;
    }
  };

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <div style={{ flex: 1 }}>{renderTab()}</div>
    </div>
  );
}
