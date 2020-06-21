import React from "react";

export default class WidgetComponent extends React.Component {
    render() {
        return <div class="widget">
            <h3 style={{ display: 'inline-block' }}>List Widget</h3>
            <div style={{ float: 'right' }}>
                <button className="btn btn-success"><i class="fa fa-arrow-up"></i></button>
                <button className="btn btn-success"><i class="fa fa-arrow-down"></i></button>
                <button className="btn btn-success">X</button>
                <select name="cars" id="cars" className="btn btn-success">
                    <option value="list">List</option>
                    <option value="heading">Heading</option>
                </select>
            </div>

            <br></br><br></br><input className="form-control" placeholder="content" />
            <br></br><input className="form-control" placeholder="type" />
            <br></br><input className="form-control" placeholder="widget name" />
        </div>
    }
}