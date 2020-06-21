import React from "react";
import WidgetService from "../services/WidgetService"
import WidgetComponent from "./WidgetComponent";

export default class WidgetListComponent extends React.Component {
    state = {
        path: this.props.params.path,
        updated: [],
        added: [],
        deleted: [],
        preview: true
    }
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.findWidgetsForTopic("Topic1"); 
    }

    delWidget(widget) {
        this.setState(...this.state.deleted, widget);
    }

    addWidget() {

    }

    save() {

    }

    toggle() {
        this.setState({preview: !this.state.preview}); 
    }

    render() {
        return (
            <div class="container">
                <button onClick={this.save}
                    className="btn btn-success">Save</button>
                <button onClick={() => null}
                    className="btn btn-success">Add Widget</button>
                <div style={{ display: 'inline-block' }} class="custom-control custom-switch">
                    <input type="checkbox" class="custom-control-input" id="customSwitches" 
                    onInput={() => this.toggle()}/>
                    <label class="custom-control-label" for="customSwitches">Preview</label>
                </div>
                {
                    this.props.widgets.map(
                        widget => <div>
                            <WidgetComponent
                                widget={widget}
                                deleteWidget={this.props.delWidget}
                                preview={this.state.preview} /><br></br>
                        </div>
                    )
                }
            </div>
        )
    }
}

