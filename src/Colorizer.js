import React, { Component } from "react";

class Colorizer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      color: "",
      bgcolor: "white"
    };

    this.colorValue = this.colorValue.bind(this);
    this.setNewColor = this.setNewColor.bind(this);
  }

  colorValue(e) {
    this.setState({
      color: e.target.value
    });
  }

  setNewColor(e) {
    this.setState({
      bgcolor: this.state.color
    });

    this._input.focus();
    this._input.value = "";

    e.preventDefault();
  }

  render() {
    var squareStyle = {
      backgroundColor: this.state.bgcolor
    };

    return (
      <div className="colorArea">
        <div style={squareStyle} className="colorSquare" />

        <form onSubmit={this.setNewColor}>
          <input
            onChange={this.colorValue}
            ref={el => (this._input = el)}
            placeholder="Enter a Color"
          />
          <button type="submit">go</button>
        </form>
      </div>
    );
  }
}

export default Colorizer;
