import React from "react";
import CourseCardComponent from "./CourseCardComponent";

export default class CourseGridComponent extends React.Component {
  render() {
    return(
      <div class="grid">
          {
          this.props.courses.map(course =>
            <CourseCardComponent
              deleteCourse={this.props.deleteCourse}
              key={course._id}
              course={course}/>
        )}
      </div>      
    ) 
  }
}
