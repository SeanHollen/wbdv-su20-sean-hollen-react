import React from "react";
import LessonTab from "../courseEditorComponents/LessonTab";

export default class LessonTabs extends React.Component {
    state = {
        newLessonTitle: "New Lesson",
    }
    componentDidMount() {
        this.props.findLessonsForModule(this.props.params.moduleId)
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.params.moduleId !== this.props.params.moduleId) {
            this.props.findLessonsForModule(this.props.params.moduleId)
        }
    }
    render() {
        return <div>
            <ul class="nav nav-tabs">
                {this.props.lessons.map(lesson =>
                    <LessonTab
                        lesson={lesson}
                        deleteLesson={this.props.deleteLesson}
                        updateLesson={this.props.updateLesson} />)
                }
                <li class="nav-item">
                    <a class="nav-link" href="#" onClick={() => {
                        this.props.createLesson(this.props.params.moduleId,
                            {
                                title: this.state.newLessonTitle
                            })
                    }}>
                        <i class="fa fa-plus"></i></a>
                </li>
            </ul>
        </div>
    }
}


