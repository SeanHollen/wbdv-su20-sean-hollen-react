import {connect} from "react-redux"; 
import LessonTabs from "../courseEditor/LessonTabs"; 
import LessonService from "../services/LessonService"; 

const stateToPropertyMapper = (state, ownProps) => {
    return {
        lessons: state.lessonReducer.lessons, 
        newLessonTitle: state.lessonReducer.newLessonTitle, 
        params: ownProps.params
    }
}

const dispatchToPropertyMapper = (dispatch) => {
    return {
      findLessonsForModule: (moduleId) => {
        LessonService.findLessonsForModule(moduleId) 
          .then(actualLessons => dispatch({
            type: 'FIND_LESSONS_FOR_MODULE',
            //lessons: lessonsForTheModule
            actualLessons
          }))
      },
      updateLesson: (lessonId, updatedLesson) => {
        LessonService.updateLesson(lessonId, updatedLesson)
          .then(status => dispatch({
            type: 'UPDATE_LESSON',
            //updatedLesson: newLessonData
            updatedLesson
          }))
      },
      createLesson: (moduleId, newLesson) => {
        LessonService.createLesson(moduleId, newLesson) 
          .then(actualLesson => dispatch({
            type: "CREATE_LESSON",
            //newLesson: actualLesson
            newLesson
          }))
      },
      deleteLesson: (lessonId) => {
        LessonService.deleteLesson(lessonId)
          .then(status => dispatch({
            type: "DELETE_LESSON",
            //lessonId: lessonId
            lessonId
          }))
      }
    }
  }

const LessonListContainer = connect
(stateToPropertyMapper, dispatchToPropertyMapper)
(LessonTabs)

export default LessonListContainer 
