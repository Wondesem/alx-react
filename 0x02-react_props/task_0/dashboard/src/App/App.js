
import React from "react";
import Notifications from "../Notifications/Notifications";
import "./App.css";
import Header from "../Header/Header";
import Login from "../Login/Login";
import Footer from "../Footer/Footer";

const App = () => {
  return (
    <>
    <Notifications/>
    <div className="App">
    <Header/>
    <Login/>
    <Footer/>
    </div>
    </>
  );
};

export default App;
