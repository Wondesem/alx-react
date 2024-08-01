import React from "react";
import { getFooterCopy, getFullYear } from "../Utils/utils";

// import './Footer.css'
const Footer = () => {
  return (
    <div className="App-footer">
      <p>
        &copy; {getFullYear()} - {getFooterCopy(true)}
      </p>
    </div>
  );
};

export default Footer;
