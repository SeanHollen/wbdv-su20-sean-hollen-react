import React from "react";

const ModuleList = () =>
  <div>
  <ul class="list-group wbdv-module-list">
      <a href="#" class="list-group-item wbdv-module-item active">
          <span class="wbdv-module-item-title">Module 1</span>
          <button class="wbdv-module-item-delete-btn">X</button>
      </a>
      <a href="#" class="list-group-item wbdv-module-item">
          <span class="wbdv-module-item-title">Module 2</span>
          <button class="wbdv-module-item-delete-btn">X</button>
      </a>
      <a href="#" class="list-group-item wbdv-module-item">
          <span class="wbdv-module-item-title">Module 3</span>
          <button class="wbdv-module-item-delete-btn">X</button>
      </a>
      <a href="#" class="list-group-item wbdv-module-item">
          <span class="wbdv-module-item-title">Module 4</span>
          <button class="wbdv-module-item-delete-btn">X</button>
      </a>
      <a href="#" class="list-group-item wbdv-module-item wbdv-module-item-add-btn">
          <button>New Module</button></a>
  </ul>
  </div>

export default ModuleList
