import React from "react";
import CourseListRow from "./CourseListRow";
import propTypes from 'prop-types'
import "./CourseList.css";
import CourseShape from "./CourseShape";

const CourseList = ({ listCourses }) => {
  return (
    <table id="course-list">
      <thead>
        <CourseListRow
          textFirstCell="Available courses"
          textSecondCell={null}
          isHeader={true}
        />
        <CourseListRow
          textFirstCell="Course name"
          textSecondCell="Credit"
          isHeader={true}
        />
      </thead>
      <tbody>
        {listCourses && listCourses.length > 0 ? (
          listCourses.map(({ id, name, credit }) => (
            <CourseListRow
              key={id}
              textFirstCell={name}
              textSecondCell={credit}
            />
          ))
        ) : (
          <CourseListRow textFirstCell="No course available yet" />
        )}
      </tbody>
    </table>
  );
};

CourseList.propTypes = {
  listCourses: propTypes.arrayOf(CourseShape)
}
CourseList.defaultProps = {
  listCourses: [],
};
export default CourseList;
