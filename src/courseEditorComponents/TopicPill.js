import React from "react";

const TopicPill = ({name, isActive}) => {
    if (isActive) {
        return <li class="nav-item">
        <a class="nav-link active" href="#">{name}</a>
    </li>
    }
    return <li class="nav-item">
        <a class="nav-link" href="#">{name}</a>
    </li>
}

export default TopicPill
