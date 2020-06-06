import React from "react";
import { Link } from "react-router-dom";
import courseService from "../services/CourseService"
import ModuleList from "./ModuleList";
import TopicPills from "./TopicPills"; 
import LessonTabs from "./LessonTabs"; 

// stateless component
const CourseEditor = ({ match }) => {
  console.log(match);
  return (
    <div>
      <div class="container">
        <Link to="/table/courses">
          <button class="wbdv-course-editor wbdv-close">
            <i class="fa fa-chevron-left"></i>
          </button>
        </Link>
        <h1 class="wbdv-course-title">
          course title
          </h1>
        <div class="row">
          <ModuleList></ModuleList>
          <div class="col-8">
            <LessonTabs></LessonTabs>
            <br />
            <TopicPills></TopicPills>
            <br />
            <br />
            Content widgets displaying slides, movies, html, etc.
            </div>
        </div>
      </div>

    </div>
  )
}

export default CourseEditor
