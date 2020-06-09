import {connect} from "react-redux"; 
import TopicPills from "../courseEditor/TopicPills"; 
import TopicService from "../services/TopicService"; 

const stateToPropertyMapper = (state, ownProps) => {
    return {
        topics: state.topicReducer.topics, 
        newTopicTitle: state.topicReducer.newTopicTitle, 
        params: ownProps.params
    }
}

const dispatchToPropertyMapper = (dispatch) => {
    return {
      findTopicsForLesson: (lessonId) => {
        TopicService.findTopicsForLesson(lessonId) 
          .then(actualTopics => dispatch({
            type: 'FIND_TOPICS_FOR_MODULE',
            //topics: topicsForTheModule
            actualTopics
          }))
      },
      updateTopic: (topicId, updatedTopic) => {
        TopicService.updateTopic(topicId, updatedTopic)
          .then(status => dispatch({
            type: 'UPDATE_TOPIC',
            //updatedTopic: updatedTopic
            updatedTopic
          }))
      },
      createTopic: (lessonId, newTopic) => {
        TopicService.createTopic(lessonId, newTopic) 
          .then(actualTopic => dispatch({
            type: "CREATE_TOPIC",
            //newTopic: actualLTopic
            newTopic
          }))
      },
      deleteTopic: (topicId) => {
        TopicService.deleteTopic(topicId)
          .then(status => dispatch({
            type: "DELETE_TOPIC",
            //topicId: topicId
            topicId
          }))
      }
    }
  }

const TopicListContainer = connect
(stateToPropertyMapper, dispatchToPropertyMapper)
(TopicPills)

export default TopicListContainer 
