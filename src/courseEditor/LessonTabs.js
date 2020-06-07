import React from "react";
import LessonTab from "../courseEditorComponents/LessonTab";

const LessonTabs = ({}) =>
    <div>
        <ul class="nav nav-tabs">
            <LessonTab name="Lesson A" isActive="active"></LessonTab>
            <LessonTab name="Lesson B"></LessonTab>
            <li class="nav-item">
                <a class="nav-link wbdv-new-page-btn" href="#"><i class="fa fa-plus"></i></a>
            </li>
        </ul>
    </div>

export default LessonTabs
