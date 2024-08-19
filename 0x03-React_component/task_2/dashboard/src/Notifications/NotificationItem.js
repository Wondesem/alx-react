import React from "react";
import propTypes from "prop-types";
import "./Notifications.css";

export default class NotificationItem extends React.Component {
  render() {
    const { id, type, value, html, markAsRead } = this.props;
    return (
      <>
        {type && value ? (
          <li onClick={() => markAsRead(id)} data-notification-type={type}>
          {value}
        </li>
        ) : null}
        {html ? (
          <li
            onClick={() => markAsRead(id)}
            data-urgent
            dangerouslySetInnerHTML={{ __html: html }}
          ></li>
        ) : null}
      </>
    );
  }
}
NotificationItem.propTypes = {
  type: propTypes.string.isRequired,
  value: propTypes.string,
  __html: propTypes.shape({
    html: propTypes.string,
  }),
  markAsRead: propTypes.func,
  id: propTypes.number
};

NotificationItem.defaultProps = {
  type: "default",
  markAsRead: () => {console.log("empty function")},
  id: 0
};
