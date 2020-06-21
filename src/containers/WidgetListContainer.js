import React from "react"; 
import WidgetListComponent from "../components/WidgetListComponent"; 
import { connect } from "react-redux"; 
import service from "../services/WidgetService"; 
const widgetService = service.getInstance(); 

const stateToPropertyMapper = state => ({
    widgets: state.widgets
})

const propertoToDispatchMapper = dispatch => ({
    findAllWidgets: () => 
    widgetService.findAllWidgets().then(widgets => 
        dispatch({type: "FIND_ALL_WIDGETS", widgets: widgets})
    )
})

const WidgetListContainer = connect(
    stateToPropertyMapper, propertoToDispatchMapper
)(WidgetListComponent)

export default WidgetListContainer 
