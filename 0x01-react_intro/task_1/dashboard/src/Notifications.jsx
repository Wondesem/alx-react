import React from "react";
import "./Notifications.css";
const Notifications = () => {
  return (
    <div className="notifications">
      <p>Here is the list of notifications</p>
      <button style={{float: "right", marginTop: -60, background: "#fff", border: "none"}} aria-label="close">
        x
      </button>
    </div>
  );
};

export default Notifications;
