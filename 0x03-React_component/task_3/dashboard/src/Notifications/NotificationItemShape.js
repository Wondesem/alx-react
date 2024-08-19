import React from 'react'
import propTypes from 'prop-types'

const NotificationItemShape = propTypes.shape({
    id: propTypes.number.isRequired,
    _htm: propTypes.shape({
        html: propTypes.string
    }),
    type: propTypes.string.isRequired,
    value: propTypes.string
}
  )


export default NotificationItemShape
