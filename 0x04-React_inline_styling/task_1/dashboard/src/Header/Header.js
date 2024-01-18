import React from "react";
import logo from "../assets/holberton-logo.jpg";
import { StyleSheet, css } from "aphrodite";

function Header() {
  return (
    <>
      <div className={css(Styles["App-header"])}>
        <img src={logo} className={css(Styles.img)} alt="logo" />
        <h1>School dashboard</h1>
      </div>
    </>
  );
}


const Styles = StyleSheet.create(
  {
    "App-header": {
      fontSize: "1.4rem",
      color: "#e0354b",
      display: "flex",
      alignItems: "center",
      borderBottom: "3px solid #e0354b",
    },
    
    img: {
      width: "200px",
      height: "200px",
    },
    
  }
);
export default Header;
