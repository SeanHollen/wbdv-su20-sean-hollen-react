const createLesson = (lesson) => 
  fetch("https://wbdv-generic-server.herokuapp.com/api/001284396/lessons", {
    method: 'POST',
    body: JSON.stringify(lesson),
    headers: {
      'content-type': 'application/json'
    }
  })
    .then(response => response.json())

const updateLesson = (lessonId, lesson) =>
  fetch("https://wbdv-generic-server.herokuapp.com/api/001284396/lessons/" + lessonId, {
    method: 'PUT',
    body: JSON.stringify(lesson),
    headers: {
      'content-type': 'application/json'
    }
  })
    .then(response => response.json())

const deleteLesson = (lessonId) =>
  fetch("https://wbdv-generic-server.herokuapp.com/api/001284396/lessons/" + lessonId, {
    method: 'DELETE'
  })
    .then(response => response.json())

const findLessonById = (lessonId) => {}
const findAllLessons = () =>
  fetch("https://wbdv-generic-server.herokuapp.com/api/001284396/lessons")
    .then(response => response.json())

export default {
  createLesson,
  deleteLesson,
  findLessonById,
  findAllLessons,
  updateLesson
}
