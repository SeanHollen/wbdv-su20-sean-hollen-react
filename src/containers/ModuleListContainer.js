import {connect} from "react-redux"; 
import ModuleList from "../courseEditor/ModuleList"; 
import ModuleService from "../services/ModuleService"; 
import ModuleReducer from "../reducers/moduleReducer"; 

const stateToPropertyMapper = (state, ownProps) => {
    console.log("state"); 
    console.log(state); 
    return {
        modules: state.moduleReducer.modules, 
        newModuleTitle: state.moduleReducer.newModuleTitle, 
        params: ownProps.params
    }
}

const dispatchToPropertyMapper = (dispatch) => {
    return {
      findModuleForCourse: (courseId) => {
        ModuleService.findModuleForCourse(courseId)
          .then(modulesForTheCourse => dispatch({
            type: 'FIND_MODULES_FOR_COURSE',
            modules: modulesForTheCourse
          }))
      },
      findAllModules: () => {
        ModuleService.findAllModules()
          .then(actualModules => dispatch({
            type: 'FIND_ALL_MODULES',
            modules: actualModules
          }))
      },
      updateModule: (moduleId, newModuleData) => {
        ModuleService.updateModule(moduleId, newModuleData)
          .then(status => dispatch({
            type: 'UPDATE_MODULE',
            updatedModule: newModuleData
          }))
      },
      createModule: (courseId, newModule) => {
        ModuleService.createModule(courseId, newModule)
          .then(actualNewModule => dispatch({
            type: "ADD_MODULE",
            newModule: actualNewModule
          }))
      },
      deleteModule  : (moduleId) => {
        ModuleService.deleteModule(moduleId)
          .then(status => dispatch({
            type: "DELETE_MODULE",
            moduleId: moduleId
          }))
      }
    }
  }

const ModuleListContainer = connect
(stateToPropertyMapper, dispatchToPropertyMapper)
(ModuleList)

export default ModuleListContainer 
