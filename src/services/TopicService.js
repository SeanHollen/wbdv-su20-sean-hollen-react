const createTopid = (topic) => 
  fetch("https://wbdv-generic-server.herokuapp.com/api/001284396/topics", {
    method: 'POST',
    body: JSON.stringify(topic),
    headers: {
      'content-type': 'application/json'
    }
  })
    .then(response => response.json())

const updateTopic= (topicId, topic) =>
  fetch("https://wbdv-generic-server.herokuapp.com/api/001284396/topics/" + topicId, {
    method: 'PUT',
    body: JSON.stringify(topic),
    headers: {
      'content-type': 'application/json'
    }
  })
    .then(response => response.json())

const deleteTopic = (topicId) =>
  fetch("https://wbdv-generic-server.herokuapp.com/api/001284396/topics/" + topicId, {
    method: 'DELETE'
  })
    .then(response => response.json())

const findTopicById = (topicId) => {}
const findAllTopics = () =>
  fetch("https://wbdv-generic-server.herokuapp.com/api/001284396/topics")
    .then(response => response.json())

export default {
  createTopic,
  deleteTopic,
  findTopicById,
  findAllTopics,
  updateTopic
}
