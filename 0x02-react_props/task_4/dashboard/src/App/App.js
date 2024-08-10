import React from "react";
import Notifications from "../Notifications/Notifications";
import propTypes from "prop-types";
import "./App.css";
import Header from "../Header/Header";
import Login from "../Login/Login";
import Footer from "../Footer/Footer";
import CourseList from "../CourseList/CourseList";
const App = ({ isLoggedIn }) => {
  return (
    <>
      <div className="App">
        <div className="heading-section">
          <Notifications />
          <Header />
        </div>
        {isLoggedIn ? <CourseList /> : <Login />}
        <Footer />
      </div>
    </>
  );
};

App.defaultProps = {
  isLoggedIn: false,
};
App.propTypes = {
  isLoggedIn: propTypes.bool,
};
export default App;
