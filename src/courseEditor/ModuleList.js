import React from "react";
import Module from "../courseEditorComponents/Module";

export default class ModuleList extends React.Component {
    state = {
        newModuleTitle: "New Module",
    }
    componentDidMount() {
        this.props.findModulesForCourse(this.props.params.courseId);
    }
    componentDidUpdate() {
        this.props.findModulesForCourse(this.props.params.courseId);
    }
    render() {
        return <div class="col-4">
            <div>
                <ul class="list-group">
                    {
                        this.props.modules.map(module =>
                            <Module 
                            module={module}
                            deleteModule={this.props.deleteModule} 
                            updateModule={this.props.updateModule}/>)
                    }
                    <a href="#" class="list-group-item">
                        <button onClick={
                            () => this.props.createModule(this.props.params.courseId,
                                {title: this.state.newModuleTitle
                                })}>
                            + Module</button></a>
                </ul>
            </div>
        </div>
    }
}
