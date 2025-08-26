import React from "react";

function Statistics({ mode }) {
  return (
    <div className="statistics">
      <h3>Statistics</h3>
      <p>
        {mode === "manual"
          ? "Statistics for your manual play will be shown here."
          : "Statistics for automatic play will be shown and used for strategy."}
      </p>
    </div>
  );
}

export default Statistics;
