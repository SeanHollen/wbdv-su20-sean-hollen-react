import React from "react";
import WidgetService from "../services/WidgetService"
import WidgetComponent from "./WidgetComponent";

export default class WidgetListComponent extends React.Component {
    state = {
        path: this.props.params.path,
        updated: [],
        deleted: [],
        added: [],
        preview: false
    }

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.findWidgetsForTopic("Topic1");
    }

    delWidget(widget) {
        console.log("test"); 
        console.log(this.state); 
        this.setState({deleted: this.state.deleted.concat(widget)});
    }

    addWidget() {
        let newWidget = { id: Math.random() * 1000, name: "", type: "PARAGRAPH", topic: "Topic1", style: "", text: "" };
        this.props.widgets.push(newWidget);
        this.setState({ added: this.state.added.concat(newWidget) });
    }

    save() {
        // for (let i = 0; i < this.props.widgets; i++) {
        //     this.props.updateWidget(this.props.widgets[i].id, this.props.widgets[i]);
        // }
    }

    toggle() {
        this.setState({ preview: !this.state.preview });
    }

    render() {
        return (
            <div class="container">
                <button onClick={this.save}
                    className="btn btn-success">Save</button>
                <button onClick={() => this.addWidget()}
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
                                deleteWidget={this.delWidget}
                                preview={this.state.preview} />
                        </div>
                    )
                }
            </div>
        )
    }
}

