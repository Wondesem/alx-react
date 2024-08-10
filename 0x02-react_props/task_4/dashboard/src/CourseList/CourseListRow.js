import React from 'react'

const CourseListRow = ({isHeader = false, textFirstCell = "required",
    textSecondCell = null}) => {
  return (
    <tr>
      {
        isHeader? (textSecondCell ===null? <th colSpan={2}>{textFirstCell}</th>: <><th>{textFirstCell}</th>
        <th>{textSecondCell}</th></>
        ):(<>
        <td>{textFirstCell}</td>
        <td>{textSecondCell}</td>
        </>)
      }
    </tr>
  )
}

export default CourseListRow
