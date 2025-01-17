import React from "react";
import {Link} from "react-router-dom";

const HomeComponent = () =>
  <div>
    <div className="list-group">
      <Link className="list-group-item" to='/editor'>
        Course Editor
      </Link>
      <Link className="list-group-item" to='/table/courses'>
        Course List
      </Link>
    </div>
  </div>

export default HomeComponent
