import React from "react";
import PropTypes from "prop-types";

const style_row = {
  backgroundColor: "#f5f5f5ab",
};

const style_header = {
  backgroundColor: "#deb5b545",
};

function CourseListRow({ isHeader, textFirstCell, textSecondCell }) {
  return (
    <tr style={style_row}>
      {isHeader ? (
        textSecondCell === null ? (
          <th style={style_header} colSpan={2}>{textFirstCell}</th>
        ) : (
          <>
            <th style={style_header}>{textFirstCell}</th>
            <th style={style_header}>{textSecondCell}</th>
          </>
        )
      ) : (
        <>
          <td>{textFirstCell}</td>
          <td>{textSecondCell}</td>
        </>
      )}
    </tr>
  );
}

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null,
};

export default CourseListRow;
