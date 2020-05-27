import React from "react";
import ModuleList from "./ModuleList";
import {Link} from "react-router-dom";

// stateless component
const CourseEditor = () => {
  return(
    <div>
      <Link to="/courses">
        Back
      </Link>
      <h2>Course Editor</h2>

      <div className="row">
        <div className="col-4">
          <ModuleList/>
        </div>
        <div className="col-8">
        </div>
      </div>
    </div>
  )
}

export default CourseEditor
