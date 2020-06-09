import React from "react";
import CourseTableComponent from "../components/CourseTableComponent";
import CourseGridComponent from "../components/CourseGridComponent";
import courseService from "../services/CourseService"
import {Link} from "react-router-dom";

class CourseListContainer 
  extends React.Component {
  state = {
    layout: this.props.match.params.layout,
    courses: [],
    newCourseTitle: 'New Title ABC'
  }

  componentDidMount() {
    courseService.findAllCourses()
      .then(actualArrayOfCourses =>
        this.setState({
          courses: actualArrayOfCourses
        }))
      }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.match.params.layout !== this.props.match.params.layout) {
      this.setState({
        layout: this.props.match.params.layout
      })
    }
  }

  toggleLayout = () => {
    if (this.props.location.pathname == "/table/courses") {
      this.props.history.push(`/grid/courses`);
    } else {
      this.props.history.push(`/table/courses`);
    }
  }

  gridLayout = () => {
    this.props.history.push(`/grid/courses`);
  }

  tableLayout = () => {
    this.props.history.push(`/table/courses`);
  }

  deleteCourse = (courseToDelete) =>
    courseService.deleteCourse(courseToDelete._id)
      .then(status => this.setState(prevState => ({
        courses: prevState
          .courses.filter(course => course !== courseToDelete)
      })))

  addCourse = (title) => {
    courseService.createCourse({
      title: title,
      owner: 'me',
      day: (new Date()).toDateString()
    })
      .then(theActualNewCourse =>
        this.setState((prevState) => {
          return {
            courses: [
              ...prevState.courses,
              theActualNewCourse
            ]
          }
        }))
  }

  render() {

    console.log(this.props)

    return (
      <div class="container">
      <nav class="navbar navbar-dark bg-dark">
      <div>
      <Link to="../">
      <button class="btn btn-light">
        <i class="fa fa-bars wbdv-field wbdv-hamburger"></i>
      </button>
      </Link>
        <a class="navbar-brand wbdv-label wbdv-course-manager">Course Manager</a>
      </div>
      <div>
        <button class="btn btn-light" onClick={() =>
          this.gridLayout()}>
          <i class="fa fa-table wbdv-button wbdv-grid-layout"></i>
        </button>
        <button class="btn btn-light" onClick={() =>
          this.tableLayout()}>
        <i class="fa fa-list-ul wbdv-button wbdv-list-layout"></i>
    </button>
    <button class="btn btn-light">
      <i class="fa fa-sort"></i>
    </button>
      </div>
    </nav>
        {
          this.state.layout === 'table' &&
          <div>
            <CourseTableComponent
              deleteCourse={this.deleteCourse}
              courses={this.state.courses} />
          </div>
        }
        {
          this.state.layout === 'grid' &&
          <div>
            <CourseGridComponent courses={this.state.courses} />
          </div>
        }
        <form class="form-inline">
          <input class="form-control mr-sm-2 wbdv-field wbdv-new-course"
            type="CourseName" placeholder="Course Name" aria-label="Course Name"></input>
          <button type="button" class="wbdv-bottom-right-10px btn btn-light wbdv-button wbdv-add-course"
            onClick={
              () => this.addCourse(this.state.newCourseTitle)}>
              <i class="fa fa-plus"></i>
        </button>
        </form>
      </div>
    )

  }
}

export default CourseListContainer
