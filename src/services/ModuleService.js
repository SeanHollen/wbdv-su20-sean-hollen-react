const createModule = (courseId, module) =>
    fetch("https://wbdv-generic-server.herokuapp.com/api/001284396/courses/" + courseId + "/modules ", {
        method: 'POST',
        body: JSON.stringify(module),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())

const findModulesForCourse = (courseId) => 
    fetch("https://wbdv-generic-server.herokuapp.com/api/001284396/courses/" + courseId + "/modules ")
        .then(response => response.json())

const findModule = (moduleId) => 
    fetch("https://wbdv-generic-server.herokuapp.com/api/001284396/modules/" + moduleId)
            .then(response => response.json())

const updateModule = (moduleId, module) =>
    fetch("https://wbdv-generic-server.herokuapp.com/api/001284396/modules/" + moduleId, {
        method: 'PUT',
        body: JSON.stringify(module),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())

const deleteModule = (moduleId) =>
    fetch("https://wbdv-generic-server.herokuapp.com/api/001284396/modules/" + moduleId, {
        method: 'DELETE'
    })
        .then(response => response.json())

export default {
    createModule,
    findModulesForCourse, 
    findModule, 
    updateModule, 
    deleteModule,
}
