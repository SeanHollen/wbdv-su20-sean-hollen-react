import React from "react";
import TopicPill from "../courseEditorComponents/TopicPill";

export default class TopicPills extends React.Component {
    state = {
        newTopicTitle: "New Topic",
    }
    componentDidMount() {
        this.props.findTopicsForLesson(this.props.params.lessonId);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.params.lessonId !== this.props.params.lessonId) {
            this.props.findTopicsForLesson(this.props.params.lessonId);
        }
    }
    render() {
        return <div>
            <ul class="nav nav-tabs wbdv-topic-pill-list">
                {this.props.topics.map(topicPill =>
                    <TopicPill
                        topic={topicPill}
                        deleteTopic={this.props.deleteTopic}
                        updateTopic={this.props.updateTopic} />)
                }
                <li class="nav-item">
                    <a class="nav-link" href="#" onClick={() => {
                        this.props.createTopic(this.props.params.lessonId,
                            {
                                title: this.state.newTopicTitle
                            })
                    }}><i class="fa fa-plus"></i></a>
                </li>
            </ul>
        </div>
    }
}
