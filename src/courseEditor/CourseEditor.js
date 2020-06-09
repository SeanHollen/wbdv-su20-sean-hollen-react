import React from "react";
import { Link, useParams } from "react-router-dom";
import ModuleListContainer from "../containers/ModuleListContainer"
import TopicListContainer from  "../containers/TopicListContainer"
import LessonListContainer from "../containers/LessonListContainer"

// stateless component
const CourseEditor = ({ match }) => {
  return (
    <div class="container">
      <div>
        <Link to="/table/courses">
          <button class="wbdv-course-editor wbdv-close">
            <i class="fa fa-chevron-left"></i>
          </button>
        </Link>
        <h1 class="wbdv-course-title">
          Course Title
          </h1>
        <div class="row">
          <ModuleListContainer {...match} />
          <div class="col-8">
            <LessonListContainer {...match} />
            <br />
            <TopicListContainer {...match} />
            <br /><br />
            Content widgets displaying slides, movies, html, etc.
            </div>
        </div>
      </div>
    </div>
  )
}

export default CourseEditor
