import WidgetService from '.services/WidgetService';
const service = WidgetService.getInstance();
let widgets = service.findAllWidgets();

const WidgetReducer = (state = { widgets: [] }, action) => {
    switch (action.type) {
        case "CREATE WIDGET":
            break;
        case "FIND_ALL_WIDGETS":
            return {
                action: action.widgets
            }
            break;
        default:
            return state;
    }
}

export default WidgetReducer; 
