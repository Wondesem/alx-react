import React from "react";
import "./Notifications.css";
import closeIcon from './t_close1437.jpg'
import {getLatestNotification} from './utils'
const Notifications = () => {
  return (
    <div className="notifications">
      <p>Here is the list of notifications</p>
      <button onClick={()=>console.log('Close button has been clicked')} style={{float: "right", marginTop: -50, background: "#fff", border: "none", fontSize: 32}} aria-label="close">
        <img src={closeIcon} alt="close" aria-label="close" width="40"/>
      </button>
      <ul>
        <li data-priority='defualt'>New course available</li>
        <li data-priority='urgent'>New resume available</li>
        <li data-priority='urgent' dangerouslySetInnerHTML={{__html: getLatestNotification()}}></li>
      </ul>
    </div>
  );
};

export default Notifications;
