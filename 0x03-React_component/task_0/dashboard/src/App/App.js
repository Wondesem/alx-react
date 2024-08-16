import React from "react";
import Notifications from "../Notifications/Notifications";
import propTypes from "prop-types";
import "./App.css";
import Header from "../Header/Header";
import Login from "../Login/Login";
import Footer from "../Footer/Footer";
import CourseList from "../CourseList/CourseList";
import {getLatestNotification} from '../Utils/utils'
const listCourses = [{
  id: 1,
  name: "React",
  credit: 60
},
{
  id: 2,
  name: "JavaScript",
  credit: 40
},
{
  id: 3,
  name: "Webpack",
  credit: 20
},
{
  id: 4,
  name: "Python",
  credit: 70
}

]

const listNotifications = [
  {
    id: 1, type: "default", value: "New course available"
  },
  {
    id: 2, type: "urgent", value: "New resume available"
  },
  {
    id: 3, type: "urgent", html: getLatestNotification()
  }
]
export default class App extends React.Component {
  render() {return (
    <>
      <div className="App">
        <div className="heading-section">
          <Notifications listNotifications={listNotifications}/>
          <Header />
        </div>
        {this.props.isLoggedIn ? <CourseList listCourses={listCourses}/> : <Login />}
        <Footer />
      </div>
    </>
  );}
};

App.defaultProps = {
  isLoggedIn: false,
};
App.propTypes = {
  isLoggedIn: propTypes.bool,
};