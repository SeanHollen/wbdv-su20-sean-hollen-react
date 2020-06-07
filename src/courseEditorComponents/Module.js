import React from "react";

export default class Module extends React.Component {
    state = {
        name: this.props.name, 
        active: this.props.isActive, 
        editing: this.props.selected 
    }

    setEditing = (editing) =>
        this.setState({editing: editing})

    render() {
        let c = "list-group-item wbdv-module-item " + this.state.active;
        if (!this.state.editing) {
            return <a href="#" class={c}>
                <span class="wbdv-module-item-title">
                    {this.state.name}
                    <div style={{ float: "right" }}>
                        <button class="btn btn-light btn-sm" onClick={() => this.setEditing("active")}>
                            <i class="fa fa-edit"></i></button>
                    </div>
                </span>
            </a>
        }
        return <a href="#" class={c}>
            <span>
                <input onChange={(event) => null} value={this.state.name} size="10" />
                <button onClick={null}>
                    Ok
                    </button>
                <button
                    onClick={
                        () => this.props.deleteCourse(this.props.course)}>
                    X
                    </button>
            </span>
        </a>
    }
    
}
