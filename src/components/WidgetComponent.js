import React from "react";

export default class WidgetComponent extends React.Component {

    state = {
        style: this.props.widget.style,
        text: this.props.widget.text,
        name: this.props.widget.name,
        type: this.props.widget.type
    }

    setText(text) {
        this.props.widget.text = text;
        this.setState({ text: text });
    }

    setStyle(style) {
        this.props.widget.style = style;
        this.setState({ style: style })
    }

    setName(name) {
        this.props.widget.name = name;
        this.setState({ name: name });
    }

    setType(type) {
        this.props.widget.type = type;
        this.setState({ type: type });
    }

    render() {
        return <div class="widget">
            <h3 style={{ display: 'inline-block' }}>{(this.props.widget.type + "").toLowerCase()} widget</h3>
            <div style={{ float: 'right' }}>
                <button className="btn btn-success"><i class="fa fa-arrow-up"></i></button>
                <button className="btn btn-success"><i class="fa fa-arrow-down"></i></button>
                <button onClick={() =>
                    this.props.deleteWidget(this.props.widget)}
                    className="btn btn-success">X</button>
                <select className="btn btn-success" onChange={(e) => this.setType(e.target.value)}>
                    <option value=""></option>
                    <option value="HEADING">Heading</option>
                    <option value="PARAGRAPH">Paragraph</option>
                </select>
            </div>
            <br></br>
            <input className="form-control" placeholder="text" value={this.props.widget.text}
                onChange={(e) => this.setText(e.target.value)} /><br />
            {
                this.props.widget.type == "HEADING" &&
                <div><select className="form-control" onChange={(e) => this.setStyle(e.target.value)}>
                    <option value=""></option>
                    <option value="H3">H3</option>
                    <option value="H2">H2</option>
                    <option value="H1">H1</option>
                </select>
                <br></br></div>
            }
            <input className="form-control" placeholder="widget name"
                onChange={(e) => this.setName(e.target.value)} value={this.props.widget.name}></input><br></br>

            {this.props.preview && <h3>Preview:</h3>}

            {(this.props.preview && this.props.widget.type == "HEADING") &&
                <div>
                    {this.props.widget.style == "H1" && <h1>{this.props.widget.text}</h1>}
                    {this.props.widget.style == "H2" && <h2>{this.props.widget.text}</h2>}
                    {this.props.widget.style == "H3" && <h3>{this.props.widget.text}</h3>}
                </div>}
            {
                (this.props.preview && this.props.widget.type == "PARAGRAPH") &&
                <p>{this.props.widget.text}</p>
            }
        </div>
    }
}