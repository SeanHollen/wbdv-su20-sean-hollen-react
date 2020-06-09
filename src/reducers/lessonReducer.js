
const initialState = {
    lessons: []
}

const lessonReducer = (state = initialState, event) => {
    switch (event.type) {
        case "DELETE_LESSON":
            return {
                ...state,
                lessons: state.lessons.filter(lesson => lesson._id !== event.lessonId)
            }
        case "FIND_LESSONS_FOR_MODULE":
            return {
                ...state,
                lessons: event.actualLessons
            }
        case "UPDATE_LESSON": 
            return {
                ...state,
                lessons: state.lessons.map(
                    lesson => lesson._id === event.updatedLesson._id ?
                        event.updatedLesson : lesson)
            }
        case "CREATE_LESSON":
            console.log("creating"); 
            return {
                ...state, 
                lessons: [...state.lessons, event.newLesson]
            }
        default:
            return state
    }
}

export default lessonReducer
