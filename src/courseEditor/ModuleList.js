import React from "react";
import Module from "../courseEditorComponents/Module";

const ModuleList = ({ name, isActive }) =>
    <div class="col-4">
        <div>
            <ul class="list-group wbdv-module-list">
                <Module name="module 1" isActive="active"></Module>
                <Module name="module 2"></Module>
                <Module name="module 3"></Module>
                <Module name="module 4"></Module>
                <a href="#" class="list-group-item wbdv-module-item wbdv-module-item-add-btn">
                    <button>+ Module</button></a>
            </ul>
        </div>
    </div>

export default ModuleList
