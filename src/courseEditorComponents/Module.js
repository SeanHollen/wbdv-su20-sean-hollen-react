import React from "react";

export default class Module extends React.Component {
    state = {
        active: this.props.isActive, 
        editing: this.props.selected, 
        editingModule: this.props.module
    }

    setEditing = (editing) =>
        this.setState({editing: editing})

    render() {
        let c = "list-group-item wbdv-module-item " + this.state.active;
        if (!this.state.editing) {
            return <a href="#" class={c}>
                <span class="wbdv-module-item-title">
                    {this.state.editingModule.title}
                    <div style={{ float: "right" }}>
                        <button class="btn btn-light btn-sm" onClick={() => this.setEditing("active")}>
                            <i class="fa fa-edit"></i></button>
                    </div>
                </span>
            </a>
        }
        return <a href="#" class={c}>
            <span>
                <input size="10" onChange={(e) => {
                    const newTitle = e.target.value
                    this.setState(prevState => ({
                        active: prevState.active,
                        editing: prevState.editing, 
                        editingModule: {
                          ...prevState.editingModule,
                          title: newTitle
                        }
                      }))
                }
            }
                value={this.state.editingModule.title}/>
                <button onClick={() => {
                    this.props.updateModule(this.props.module._id, this.state.editingModule); 
                    this.state.editing = false; 
                }}>
                    Ok
                    </button>
                <button
                    onClick={() => {
                        this.props.deleteModule(this.props.module._id)
                        this.state.editing = false; 
                    }}>
                    X
                    </button>
            </span>
        </a>
    }
    
}
