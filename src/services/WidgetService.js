
const createWidget = (tId, w) => {
    fetch("http://localhost:8080/api/" + tId + "/widget", {
        method: 'POST',
        body: JSON.stringify(w),
        headers: {
            "content-type": "application/json"
        }
    }).then(
        response => response.json()
    )
}

const findAllWidgets = () => {
    fetch("http://localhost:8080/api/widgets").then(
        response => response.json()
    )
}

const findWidgetsForTopic = (tid) =>
  fetch(`http://localhost:8080/api/topics/${tid}/widgets`)
    .then(response => response.json())

const deleteWidget = (wId) => 
    fetch("http://localhost:8080/api/widgets/" + wId, {
        method: 'DELETE',
    })
        .then(response => response.json())

const updateWidget = (wId, widget) =>
    fetch("http://localhost:8080/api/widgets/" + wId, {
        method: 'PUT',
        body: JSON.stringify(widget),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())

export default {
    createWidget,
    deleteWidget,
    updateWidget,
    findAllWidgets,
    findWidgetsForTopic
}
