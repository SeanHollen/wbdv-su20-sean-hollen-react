const createModule= (module) => 
  fetch("https://wbdv-generic-server.herokuapp.com/api/001284396/modules", {
    method: 'POST',
    body: JSON.stringify(module),
    headers: {
      'content-type': 'application/json'
    }
  })
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

const deleteModule= (moduleId) =>
  fetch("https://wbdv-generic-server.herokuapp.com/api/001284396/modules/" + moduleId, {
    method: 'DELETE'
  })
    .then(response => response.json())

const findModuleById = (moduleId) => {}
const findAllModules = () =>
  fetch("https://wbdv-generic-server.herokuapp.com/api/001284396/modules")
    .then(response => response.json())

export default {
  createModule,
  deleteModule,
  findModuleById,
  findAllModules,
  updateModule
}
