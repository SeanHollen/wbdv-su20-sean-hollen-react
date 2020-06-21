import React from "react";

export default class WidgetListComponent extends React.Component {
    constructor(props) {
        super(props); 
        this.props.findAllWidgets(); 
    }
    render() {
        return (
            <div>
                <ul>
                    {
                        this.props.widgets.map(widget => 
                            <li>{widget.name}</li>
                        )
                    }
                </ul>
            </div>
        )
    }
}

