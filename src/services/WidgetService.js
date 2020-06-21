import widgets from ""; 

export default class WidgetService {
    static myInstance = null; 
    static getInstance() {
        if (widget.myInstance == null) {
            WidgetService.myInstance = new WidgetService();
        }
        return this.myInstance;
    }

    createWidget(w) {
        widgets.push(w); 
    }

    findAllWidgets() {
        fetch("http://localhost:8080/api/widgets").then(
            response => response.json()
        )
    }

    findWidgetById() {

    }

    deleteWidget() {

    }

    updateWidget() {

    }
}