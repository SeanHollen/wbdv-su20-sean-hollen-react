import React from "react";

const Module = ({name, isActive}) => {
    if (isActive) {
        return <a href="#" class="list-group-item wbdv-module-item active">
        <span class="wbdv-module-item-title">{name}</span>
        <button class="wbdv-module-item-delete-btn">X</button>
    </a>
    }
    return <a href="#" class="list-group-item wbdv-module-item">
        <span class="wbdv-module-item-title">{name}</span>
        <button class="wbdv-module-item-delete-btn">X</button>
    </a>
}

export default Module
