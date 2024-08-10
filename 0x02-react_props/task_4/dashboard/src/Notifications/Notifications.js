import React from "react";
import propTypes from 'prop-types'
import "./Notifications.css";
import closeIcon from "../assets/t_close1437.jpg";
import { getLatestNotification } from "../Utils/utils";
import NotificationItem from "./NotificationItem";
const Notifications = ({displayDrawer}) => {
  return (
    <div className="Notifications-container">
      {displayDrawer ? (<div className="notifications">
        <div className="menuItem">
        <p>Your notifications</p>
      </div>
        <button
          onClick={() => console.log("Close button has been clicked")}
          style={{
            float: "right",
            marginTop: "1rem",
            background: "#fff",
            border: "none",
            fontSize: 25,
          }}
          aria-label="close"
        >
          <img src={closeIcon} alt="close" aria-label="close" width="40" />
        </button>
        <ul>
          <NotificationItem type="default" value="New course available" />
          <NotificationItem type="urgent" value="New resume available" />
          <NotificationItem type="urgent" html={getLatestNotification()} />
        </ul>
      </div>): <div className="menuItem">
        <p>Your notifications</p>
      </div>}
      </div>
  );
};

Notifications.propTypes = {
  displayDrawer: propTypes.bool
}
Notifications.defaultProps = {
  displayDrawer: false
}

export default Notifications;
