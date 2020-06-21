import React from "react";

export default class WidgetComponent extends React.Component {

    state = {
        style: this.props.widget.style,
        text: this.props.widget.text
    }

    list() {
        return this.props.text.split(" ").map(
            item => <li>{item}</li>
        )
    }

    setText(text) {
        console.log("setting text " + text);
        this.props.widget.text = text;
        this.setState({ text: text });
    }

    setStyle(style) {
        this.props.widget.style = style;
        this.setState({ style: style })
    }

    setName(name) {
        this.props.widget.name = name;
    }

    render() {
        return <div class="widget">
            <h3 style={{ display: 'inline-block' }}>{(this.props.widget.type + "").toLowerCase()} widget</h3>
            <div style={{ float: 'right' }}>
                <button className="btn btn-success"><i class="fa fa-arrow-up"></i></button>
                <button className="btn btn-success"><i class="fa fa-arrow-down"></i></button>
                <button onClick={() =>
                    this.props.deleteWidget(this.props.widget.id)}
                    className="btn btn-success">X</button>
                <select className="btn btn-success" onChange={(e) => this.setStyle(e.value)}>
                    <option value="list">List</option>
                    <option value="heading">Heading</option>
                </select>
            </div>

            <br></br><br></br>
            <input className="form-control" placeholder="text" value={this.props.widget.text}
                onInput={(e) => this.setText(e.target.value)}></input><br></br>
            {
                this.props.widget.type == "PARAGRAPH" &&
                <select className="form-control" onChange={(e) => this.setStyle(e.target.value)}>
                    <option value="H3">H3</option>
                    <option value="H2">H2</option>
                    <option value="H1">H1</option>
                </select>
            }
            {
                this.props.widget.type == "LIST" &&
                <select className="form-control">
                    <option value="list">Unordered List</option>
                    <option value="heading">Ordered List</option>
                </select>
            }
            <br></br><input className="form-control" placeholder="widget name"
                >{this.props.widget.name}</input><br></br>

            {this.props.preview && <h3>Preview:</h3>}

            {(this.props.preview && this.props.widget.type == "PARAGRAPH") &&
                <div>
                    {this.props.widget.style == "H1" && <h1>a{this.props.widget.text}</h1>}
                    {this.props.widget.style == "H2" && <h2>a{this.props.widget.text}</h2>}
                    {this.props.widget.style == "H3" && <h3>a{this.props.widget.text}</h3>}
                </div>}
            {(this.props.preview && this.props.widget.type == "LIST") &&
                <ul>
                    {this.list()}
                </ul>}
        </div>
    }
}