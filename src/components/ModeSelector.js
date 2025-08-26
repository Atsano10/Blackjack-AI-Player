import React, { useState } from "react";

function ModeSelector({ onStart }) {
  const [selected, setSelected] = useState("manual");

  return (
    <div className="mode-selector">
      <h2>Select Mode</h2>
      <div>
        <label>
          <input
            type="radio"
            value="manual"
            checked={selected === "manual"}
            onChange={() => setSelected("manual")}
          />
          Manual
        </label>
        <label>
          <input
            type="radio"
            value="automatic"
            checked={selected === "automatic"}
            onChange={() => setSelected("automatic")}
          />
          Automatic
        </label>
      </div>
      <button onClick={() => onStart(selected)}>Start</button>
    </div>
  );
}

export default ModeSelector;
