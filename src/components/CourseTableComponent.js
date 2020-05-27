import React from "react";
import CourseRowComponent from "./CourseRowComponent";

export default class CourseTableComponent extends React.Component {
  render() {
    return(
      <div>
      
      <table class="table table-striped">
      <tbody>
        <tr class="table-dark wbdv-row wbdv-course">
            <th class="wbdv-header wbdv-title">
                <i class="fa fa-file-text wbdv-row wbdv-icon"></i>
                Title</th>
            <th class="wbdv-header wbdv-owner">Owner</th>
            <th class="wbdv-header wbdv-last-modified">Date</th>
            <th>Edit</th>
        </tr>
        {
          this.props.courses.map(course =>
            <CourseRowComponent
              deleteCourse={this.props.deleteCourse}
              key={course._id}
              course={course}/>
        )}
      </tbody>
      </table>

      </div>
      
    )
  }
}
