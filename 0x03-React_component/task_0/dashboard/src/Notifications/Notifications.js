
import React from "react";
import propTypes from 'prop-types'
import "./Notifications.css";
import closeIcon from "../assets/t_close1437.jpg";
import NotificationItem from "./NotificationItem";
import NotificationItemShape from "./NotificationItemShape";
const Notifications = ({displayDrawer, listNotifications}) => {
  return (
    <div className="Notifications-container">
      {displayDrawer ? (<>
        <div className="menuItem">
        <p>Your notifications</p>
      </div>
        <div className="notifications">
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
          {
            listNotifications && listNotifications.length > 0 ? 
            listNotifications.map(({id,type, html, value})=>(
              <NotificationItem key={id} type={type} html={html} value={value}/>
            )):(<div className="Not_notification">
              <NotificationItem value="No new notification for now" style={{listStyleType: "none"}}/>
            </div>)
          }
          
        </ul>
      </div> </>): <div className="menuItem">
        <p>Your notifications</p>
      </div>}
      </div>
  );
};

Notifications.propTypes = {
  displayDrawer: propTypes.bool,
  listNotifications: propTypes.arrayOf(NotificationItemShape)
}
Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: []
}

export default Notifications;
