import React from "react";
import CourseTableComponent from "../components/CourseTableComponent";
import CourseGridComponent from "../components/CourseGridComponent";
import courseService from "../services/CourseService"

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

  setLayout = (layout) => {
    this.props.history.push(`/${layout}/courses`)
  }

  deleteCourse = (courseToDelete) =>
    courseService.deleteCourse(courseToDelete._id)
      .then(status => this.setState(prevState => ({
        courses: prevState
          .courses.filter(course => course !== courseToDelete)
      })))

  addCourse = (title) => {
    console.log("HI");
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
      <div>
      <nav class="navbar navbar-dark bg-dark">
      <div>
        <button class="btn btn-light">
          menu
        </button>
        <a class="navbar-brand wbdv-label wbdv-course-manager">Course Manager</a>
      </div>
      <div>
        <button class="btn btn-light" onClick={() =>
          this.setLayout('grid')}>
          grid
        </button>
        <button class="btn btn-light">
          list
    </button>
    <button class="btn btn-light">
            sort
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
            <button
              onClick={() =>
                this.setLayout('table')}>
              Table
            </button>
            <CourseGridComponent courses={this.state.courses} />
          </div>
        }
        <form class="form-inline">
          <input class="form-control mr-sm-2 wbdv-field wbdv-new-course"
            type="CourseName" placeholder="Course Name" aria-label="Course Name"></input>
          <button class="wbdv-bottom-right-10px btn btn-light wbdv-button wbdv-add-course"
            onClick={
              () => this.addCourse(this.state.newCourseTitle)}>
            Add Course
        </button>
        </form>
      </div>
    )

  }
}

export default CourseListContainer
