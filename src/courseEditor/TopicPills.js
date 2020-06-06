import React from "react";
import TopicPill from "../courseEditorComponents/TopicPill";

const TopicPills = ({ name, isActive }) =>
    <div>
        <ul class="nav nav-tabs wbdv-topic-pill-list">
            <TopicPill name="Topic 1" isActive="active"></TopicPill>
            <TopicPill name="Topic 2"></TopicPill>
            <TopicPill name="Topic 3"></TopicPill>
            <li class="nav-item">
                <a class="nav-link" href="#"><i class="fa fa-plus"></i></a>
            </li>
        </ul>
    </div>

export default TopicPills
