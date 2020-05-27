import React from "react";
import TopicPills from "./TopicPills"; 
import ModuleList from "./ModuleList";
import LessonTabs from "./LessonTabs"; 
import {Link} from "react-router-dom";

// stateless component
const CourseEditor = () => {
  return(
    <div>
      <div class="container">
        <Link to="/table/courses">
        <button class="wbdv-course-editor wbdv-close">
            <i class="fa fa-chevron-left"></i>
            </button>
        </Link>
        <h1 class="wbdv-course-title">Course Name</h1>
        <div class="row">
            <div class="col-4">
              <ModuleList></ModuleList>
            </div>
            <div class="col-8">
                <LessonTabs></LessonTabs>
                <br/> 
                <TopicPills></TopicPills>
                <br/>
                <br/>
                Content widgets displaying slides, movies, html, etc. 
            </div>
        </div>
    </div>

    </div>
  )
}

export default CourseEditor
