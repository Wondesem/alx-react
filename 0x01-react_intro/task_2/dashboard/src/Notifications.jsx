import React from "react";
import closeIcon from './t_close1437.jpg'
import "./Notifications.css";
const Notifications = () => {
  return (
    <div className="notifications">
      <p>Here is the list of notifications</p>
      <button style={{float: "right", marginTop: -60, background: "#fff", border: "none", fontSize: 32}} aria-label="close">
        <img src={closeIcon} alt="close"/>
      </button>
    </div>
  );
};

export default Notifications;
