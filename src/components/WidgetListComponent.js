import React from "react";
import WidgetService from "../services/WidgetService"
import WidgetComponent from "./WidgetComponent";

export default class WidgetListComponent extends React.Component {
    state = {
        path: this.props.params.path
      }
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        WidgetService.findWidgetsForTopic("Topic1");
    }
    render() {
        console.log(this.props.widgets.length); 
        return (
            <div class="container">
                {
                    this.props.widgets.map(
                        widget => <div>
                            <WidgetComponent widget={widget} /><br></br>
                            </div>
                    )
                }
            </div>
        )
    }
}

