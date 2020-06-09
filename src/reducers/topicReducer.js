const initialState = {
    topics: []
}

// fix all here
const topicReducer = (state = initialState, event) => {
    switch (event.type) {
        case "UPDATE_TOPIC":
            return {
                ...state,
                modules: state.modules.map(
                    module => module._id === event.updatedModule._id ?
                        event.updatedModule : module)
            }
        case "FIND_TOPICS_FOR_LESSON":
            return {
                ...state,
                modules: event.modules
            }
        case "FIND_TOPIC":
            console.log(event.modules)
            return {
                ...state,
                modules: event.modules
            }
        case "CREATE_TOPIC":
            return {
                modules: [
                    ...state.modules,
                    event.newModule
                ]
            }
        case "DELETE_TOPIC":
            return {
                modules: state.modules.filter(module => module._id !== event.moduleId)
            }
        default:
            return state
    }
}

export default topicReducer
