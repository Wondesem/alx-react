import React from "react";
import propTypes from "prop-types";
import "./Notifications.css";
import closeIcon from "../assets/t_close1437.jpg";
import NotificationItem from "./NotificationItem";
import NotificationItemShape from "./NotificationItemShape";
export default class Notifications extends React.Component {
  constructor(props) {
		super(props);
		this.markAsRead = this.markAsRead.bind(this);
	}

	markAsRead(id) {
		console.log(`Notification ${id} has been marked as read`);
	}

  render() {
    return (
      <div className="Notifications-container">
        {this.props.displayDrawer ? (
          <>
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
                <img
                  src={closeIcon}
                  alt="close"
                  aria-label="close"
                  width="40"
                />
              </button>
              {this.props.listNotifications &&
                this.props.listNotifications.length > 0? <p>Here is the list of notifications</p> : null}
              <ul>
                {this.props.listNotifications &&
                this.props.listNotifications.length > 0 ? (
                  this.props.listNotifications.map(
                    ({ id, html, type, value }) => {
                      return (<NotificationItem
                        key={id}
                        markAsRead={this.markAsRead}
                        type={type}
                        value={value}
                        html={html}
                        id={id}
                      />)
                    }
                  )
                ) : (
                  <div className="Not_notification">
                    <NotificationItem
                      value="No new notification for now"
                      style={{ listStyleType: "none" }}
                    />
                  </div>
                )}
              </ul>
            </div>{" "}
          </>
        ) : (
          <div className="menuItem">
            <p>Your notifications</p>
          </div>
        )}
      </div>
    );
  }
}
Notifications.propTypes = {
  displayDrawer: propTypes.bool,
  listNotifications: propTypes.arrayOf(NotificationItemShape),
};
Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
};
