import React from "react";

const TopicPill = ({name, isActive, selected}) => {
    let c = "nav-link " + isActive; 
    if (!selected) {
        return <li class="nav-item">
        <a class={c} href="#">{name}</a>
    </li>
    }
    return <li class="nav-item">
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
    </li>
}

export default TopicPill
