const initialState = {
    topics: []
}

const topicReducer = (state = initialState, event) => {
    switch (event.type) {
        case "DELETE_TOPIC":
            return {
                ...state,
                topics: state.topics.filter(topic => topic._id !== event.topicId)
            }
        case "FIND_TOPICS_FOR_MODULE":
            return {
                ...state,
                topics: event.actualTopics
            }
        case "UPDATE_TOPIC": 
            return {
                ...state,
                topics: state.topics.map(
                    topic => topic._id === event.updatedTopic._id ?
                        event.updatedTopic : topic)
            }
        case "CREATE_TOPIC":
            console.log("creating"); 
            return {
                ...state, 
                topics: [...state.topics, event.newTopic]
            }
        default:
            return state
    }
}

export default topicReducer
