import React from "react";

const Module = ({name, isActive, selected}) => {
    let c = "list-group-item wbdv-module-item " + isActive;
    if (!selected) {
        return <a href="#" class={c}>
        <span class="wbdv-module-item-title">{name}</span>
    </a>
    }
    return <a href="#" class={c}>
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
}

export default Module
