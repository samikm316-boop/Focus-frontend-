import { useState } from "react";

export default function WorkoutTab() {
  const [exercise, setExercise] = useState("");

  return (
    <div style={{ padding: 40 }}>
      <h2>Ask About Workout</h2>

      <p>
        Ask how to perform an exercise or which muscles it targets.
      </p>

      <input
        value={exercise}
        onChange={(e) => setExercise(e.target.value)}
        placeholder="Example: How to do a deadlift?"
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
        Ask Workout AI
      </button>
    </div>
  );
}
