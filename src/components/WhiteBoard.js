import React from 'react'
import CourseListContainer from "../containers/CourseListContainer";
import CourseEditor from "../courseEditor/CourseEditor";
import {BrowserRouter, Route} from "react-router-dom";
import HomeComponent from "./HomeComponent";

class WhiteBoard extends React.Component {
  render() {
    return(
      <BrowserRouter>
        <div>

          <Route
            path='/'
            exact={true}
            component={HomeComponent}
          />

          <Route
            path='/courses'
            exact={true}
            component={CourseListContainer}/>

          <Route
            path='/:layout/courses'
            exact={true}
            component={CourseListContainer}/>

          <Route
            path='/editor'
            exact={true}
            component={CourseEditor}/>

          <Route
            path={['/editor/:courseId', '/editor/:courseId/modules/:moduleId']}
            exact={true}
            component={CourseEditor}/>

        </div>
      </BrowserRouter>
    )
  }
}

export const C = (a, b) => (a+b)



export default WhiteBoard
