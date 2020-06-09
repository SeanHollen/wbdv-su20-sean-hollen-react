import React from "react";

export default class LessonTab extends React.Component {
    state = {
        active: this.props.isActive,
        editing: false,
        editingLesson: this.props.lesson
    }

    render() {
        let c = "nav-link wbdv-page-tab " + this.state.active;
        if (!this.state.editing) {
            return <li class="nav-item">
                <a class={c} href="#">
                    {this.state.editingLesson.title}
                    <button class="btn btn-light btn-sm" onClick={() => this.state.editing = true}>
                        <i class="fa fa-edit"></i></button>
                </a>
            </li>
        }
        return <li class="nav-item">
            <a class={c} href="#">
                <span>
                    <input onChange={(e) => {
                        const newTitle = e.target.value
                        this.setState(prevState => ({
                            active: prevState.active,
                            editing: prevState.editing, 
                            editingLesson: {
                              ...prevState.editingLesson,
                              title: newTitle
                            }
                          }))
                    }
                } value={this.state.editingLesson.title} size="10" />
                    <button onClick={() => {
                        this.props.updateLesson(
                        this.props.lesson._id, this.state.editingLesson); 
                        this.state.editing = false;
                    }}>
                        Ok
                </button>
                    <button
                        onClick={
                            () => {
                                this.props.deleteLesson(this.props.lesson._id);
                                this.state.editing = false; 
                            }}>
                        X
                </button>
                </span>
            </a>
        </li>
    }
}
