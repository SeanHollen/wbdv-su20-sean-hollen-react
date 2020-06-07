import React from "react";

export default class LessonTab extends React.Component {
    state = {
        name: this.props.name,
        active: this.props.isActive,
        editing: this.props.selected
    }

    setEditing = (editing) =>
        this.setState({ editing: editing })

    render() {
        let c = "nav-link "+this.state.active;
        if (!this.state.editing) {
            return <li class="nav-item">
                <a class={c} href="#">
                    {this.state.name}
                    <button class="btn btn-light btn-sm" onClick={() => this.setEditing("active")}>
                        <i class="fa fa-edit"></i></button>
                </a>
            </li>
        }
        return <li class="nav-item">
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
        </li>
    }
}