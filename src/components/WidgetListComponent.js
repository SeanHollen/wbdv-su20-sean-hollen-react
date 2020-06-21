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
        return (
            <div class="container">
                <ul>
                {
                    this.props.widgets.map(
                        widget =>
                            <li><WidgetComponent widget={widget} /></li>
                    )
                }
                </ul>
            </div>
        )
    }
}

