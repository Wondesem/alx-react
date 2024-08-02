import React from 'react'
import "./Footer.css"
import { getFooterCopy, getFullYear } from "../Utils/utils"
const Footer = () => {
  return (
    <div className="App-footer">
        <p>
          &copy; {getFullYear()} - {getFooterCopy(true)}
        </p>
      </div>
  )
}

export default Footer
