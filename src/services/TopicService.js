const createTopic = (lessonId, topic) =>
    fetch("https://wbdv-generic-server.herokuapp.com/api/001284396/lessons/"+lessonId+"/topics", {
        method: 'POST',
        body: JSON.stringify(topic),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())

const findTopicsForLesson = (lessonId) => 
    fetch("https://wbdv-generic-server.herokuapp.com/api/001284396/lessons/"+lessonId+"/topics")
        .then(response => response.json())

const updateTopic = (topicId, topic) =>
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

export default {
    createTopic,
    findTopicsForLesson, 
    updateTopic, 
    deleteTopic,
}
