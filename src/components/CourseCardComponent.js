import React from "react";
import {Link} from "react-router-dom";
import courseService from '../services/CourseService'
import './CourseRowComponent'

export default class CourseCardComponent extends React.Component {
  state = {
    editing: false,
    course: this.props.course
  }

  setEditing = (editing) =>
    this.setState({editing: editing})

  ok = () =>
    courseService.updateCourse(
      this.state.course._id,
      this.state.course)
      .then(status => this.setEditing(false))

  updateCourseTitle = (newTitle) =>
    this.setState(prevState => ({
      course: {
        ...prevState.course,
        title: newTitle
      }
    }))

  render() {
    return(
        <div class="wrapper">
        <p>
          {
            !this.state.editing &&
              <Link to={`/editor/${this.state.course._id}`}>
                {this.state.course.title}
              </Link>
          }
          {
            this.state.editing &&
            <input
              className="form-control"
              onChange={(event) => this.updateCourseTitle(event.target.value)}
              value={this.state.course.title}/>
          }
        </p>
        <p>Owner: {this.state.course.owner}</p>
        <p>Modified: {this.state.course.modified}</p>
        <p>
          {
            !this.state.editing &&
            <button
              className="btn btn-primary"
              onClick={() => this.setEditing(true)}>
              Edit
            </button>
          }
          {
            this.state.editing &&
            <span>
              <button onClick={this.ok}>
                Ok</button>
              <button
                className="btn btn-danger"
                onClick={
                  () => this.props.deleteCourse(this.props.course)}>
                Delete</button>
            </span>
          }
        </p>
        </div>
    )
  }
}
