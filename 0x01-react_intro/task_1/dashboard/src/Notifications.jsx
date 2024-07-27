import React from "react";
import closeIcon from './close.png'
import "./Notifications.css";
const Notifications = () => {
  return (
    <div className="notifications">
      <p>Here is the list of notifications</p>
      <button style={{float: "right", marginTop: -60, background: "#fff", border: "none"}} aria-label="close">
        <img src={closeIcon} alt="close" width="20" height="20"/>
      </button>
    </div>
  );
};

export default Notifications;
