import React from "react";
import "./Notifications.css";
import closeIcon from "../assets/t_close1437.jpg";
import { getLatestNotification } from "../Utils/utils";
import NotificationItem from "./NotificationItem";
const Notifications = () => {
  return (
    <div className="notifications">
      <p>Here is the list of notifications</p>
      <button
        onClick={() => console.log("Close button has been clicked")}
        style={{
          float: "right",
          marginTop: -50,
          background: "#fff",
          border: "none",
          fontSize: 32,
        }}
        aria-label="close"
      >
        <img src={closeIcon} alt="close" aria-label="close" width="40" />
      </button>
      <ul>
        <NotificationItem type="urgent" value="New course available" />
        <NotificationItem type="urgent" value="New resume available" />
        <NotificationItem type="urgent" html={getLatestNotification()} />
      </ul>
    </div>
  );
};

export default Notifications;
