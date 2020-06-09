import React from "react";

export default class TopicPill extends React.Component {
    state = {
        active: this.props.isActive,
        editing: false,
        editingTopic: this.props.topic
    }

    render() {
        let c = "nav-link " + this.state.active;
        if (!this.state.editing) {
            return <li class="nav-item">
                <a class={c} href="#">
                    {this.state.editingTopic.title}
                    <button class="btn btn-light btn-sm"
                        onClick={() => this.state.editing = true}>
                        <i class="fa fa-edit"></i></button>
                </a>
            </li>
        }
        return <li class="nav-item">
            <span>
                <input
                    onChange={(e) => {
                        const newTitle = e.target.value
                        this.setState(prevState => ({
                            active: prevState.active,
                            editing: this.state.editing,
                            editingTopic: {
                                ...prevState.editingTopic,
                                title: newTitle
                            }
                        }))
                    }
                    } value={this.state.editingTopic.title} size="10" />
                <button onClick={() => {
                    this.props.updateTopic(
                        this.props.topic._id, this.state.editingTopic);
                        this.state.editing = false;
                        console.log(this.state.editing); 
                }}>
                    Ok
                </button>
                <button
                    onClick={
                        () => {
                            this.props.deleteTopic(this.props.topic._id);
                            this.state.editing = false;
                        }}>
                    X
                </button>
            </span>
        </li>
    }
}