import React from "react";
import WidgetService from "../services/WidgetService"
import WidgetComponent from "./WidgetComponent";

export default class WidgetListComponent extends React.Component {
    state = {
        path: this.props.params.path,
        preview: false
    }

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.findWidgetsForTopic("Topic1");
    }

    toggle() {
        this.setState({ preview: !this.state.preview });
    }

    render() {
        return (
            <div class="container">
                <button onClick={() => this.props.save()}
                    className="btn btn-success">Save</button>
                <button onClick={() => this.props.createWidget("Topic1", {style: "h3", id: (Math.random() * 100)})}
                    className="btn btn-success">Add Widget</button>
                <div style={{ display: 'inline-block' }} class="custom-control custom-switch">
                    <input type="checkbox" class="custom-control-input" id="customSwitches"
                        onInput={() => this.toggle()} />
                    <label class="custom-control-label" for="customSwitches">Preview</label>
                </div>
                {
                    this.props.widgets.map(
                        widget => <div>
                            <br></br>
                            <WidgetComponent
                                widget={widget}
                                deleteWidget={this.props.deleteWidget}
                                preview={this.state.preview} />
                        </div>
                    )
                }
            </div>
        )
    }
}

