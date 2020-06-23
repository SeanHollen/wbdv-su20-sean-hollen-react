import service from "../services/WidgetService";

const initialState = {
  widgets: [],
  deletedWidgets: [],
  createdWidgets: []
}

const widgetReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_WIDGET":
      return {
        ...state,
        widgets: state.widgets.map(widget => widget.id === action.wid ? action.widget : widget)
      }
    case "CREATE_WIDGET":
      return {
        ...state,
        widgets: [...state.widgets, action.widget],
        createdWidgets: [...state.createdWidgets, action.widget]
      }
    case "FIND_WIDGETS_FOR_TOPIC":
      console.log(action.widgetsFromServer); 
      return {
        ...state,
        widgets: action.widgetsFromServer
      }
    case "DELETE_WIDGET":
      return {
        ...state,
        widgets: state.widgets.filter(widget => widget.id !== action.widgetId),
        deletedWidgets: [...state.deletedWidgets, action.widget]
      }
    case "SAVE":
      for (let i = 0; i < state.createdWidgets.length; i++) {
        service.createWidget("Topic1", state.createdWidgets[i]);
      }
      for (let i = 0; i < state.deletedWidgets.length; i++) {
        service.deleteWidget(state.deletedWidgets[i].id);
      }
      for (let i = 0; i < state.widgets.length; i++) {
        service.updateWidget(state.widgets[i].id, state.widgets[i]);
      }
      return state
    default:
      return state
  }
}

export default widgetReducer