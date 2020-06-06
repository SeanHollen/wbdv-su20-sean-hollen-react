import React from "react";

const LessonTab = function ({ name, isActive, selected }) {
    let c = "nav-link wbdv-page-tab " + isActive; 
    if (!selected) {
        return <li class="nav-item"> 
            <a class={c} href="#">{name}</a>
        </li>
    }
    return <li class="nav-item">
        <a class={c} href="#">
            <span>
                <input onChange={(event) => null} value={name} size="10"/>
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
    </li>
}


export default LessonTab
