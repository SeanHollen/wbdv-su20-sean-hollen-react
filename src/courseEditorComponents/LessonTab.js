import React from "react";

const LessonTab = function({name, isActive}) {
    if (isActive) {
        return <li class="nav-item">
        <a class="nav-link wbdv-page-tab active" href="#">{name}</a>
    </li>
    }
    return <li class="nav-item">
        <a class="nav-link wbdv-page-tab" href="#">{name}</a>
    </li>
}


export default LessonTab
