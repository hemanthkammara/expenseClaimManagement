import React from "react";
import load from "../assets/Circles-menu-3.gif";

export const Loading = ({ page }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: page,
      }}
    >
      <div>
        <img src={load} alt="" />
      </div>
    </div>
  );
};
