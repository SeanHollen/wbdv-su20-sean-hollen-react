import service from "../services/WidgetService"; 
import {connect} from "react-redux";
import WidgetListComponent from "../components/WidgetListComponent"; 

const stateToPropertyMapper = (state) => ({
  widgets: state.widgetReducer.widgets
})

const dispatchToPropertyMapper = (dispatch) => ({
  updateWidget: (wid, widget) => {
    dispatch({
      type: "UPDATE_WIDGET",
      wid: wid,
      widget: widget
    })
  },
  createWidget: (tid, widget) =>
    service.createWidget(tid, widget)
      .then(actualNewWidgetFromServer =>
        dispatch({
          type: "CREATE_WIDGET",
          widget: actualNewWidgetFromServer
        })
      ),
  deleteWidget: (wid) => 
    service.deleteWidget(wid)
      .then(status =>
        dispatch({
          type: "DELETE_WIDGET",
          widgetId: wid
      })),
  findWidgetsForTopic: (tid) => {
    service.findWidgetsForTopic(tid)
      .then(actualWidgetsFromServer => 
        dispatch({
          type: "FIND_WIDGETS_FOR_TOPIC",
          widgetsFromServer: actualWidgetsFromServer
        }))}
})

export default connect(
  stateToPropertyMapper,
  dispatchToPropertyMapper)
(WidgetListComponent)







