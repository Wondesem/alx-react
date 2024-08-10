import React from 'react'
import propTypes from 'prop-types'
import "./Notifications.css"

const NotificationItem = ({type, html, value}) => {
  return (
    <>
			{type && value ? <li data-notification-type={type}>{value}</li> : null}
			{html ? (
				<li data-urgent dangerouslySetInnerHTML={{ __html: html }}></li>
			) : null}
		</>
  )
}
NotificationItem.propTypes = {
	type: propTypes.string.isRequired,
	value: propTypes.string,
	__html: propTypes.shape({
		html: propTypes.string
	})
}

NotificationItem.defaultProps = {
	type: 'default'
}
export default NotificationItem
