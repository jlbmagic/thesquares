import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

class Square extends React.Component {
  render() {
    return (
      <button className="box" style={{ backgroundColor: this.props.color }}>
        {this.props.value}
      </button>
    );
  }
}

class CreateSquares extends React.Component {
  render() {
    const things = this.props.list;
    console.log(things);
    const rows = things.map(function(ele, i) {
      var v = ele.value;
      console.log(v);
      return <Square key={i} value={v} color={ele.color} />;
      // return <h1>Hi</h1>;
    });
    console.log(rows);
    return rows;
  }
}
class Game extends React.Component {
  renderSquare(i) {
    return <Square value={i} />;
  }

  render() {
    const things = [
      { value: "WorkOut", color: "#403556" },
      { value: "Video Games", color: "#f41f8d" },
      { value: "Work", color: "#48f442" },
      { value: "Video Games", color: "#f41f8d" },
      { value: "WorkOut", color: "#403556" },
      { value: "Work", color: "#48f442" },
      { value: "Video Games", color: "#f41f8d" },
      { value: "Work", color: "#48f442" },
      { value: "WorkOut", color: "#403556" },
      { value: "Video Games", color: "#f41f8d" },
      { value: "Video Games", color: "#f41f8d" }
    ];
    return (
      <div className="wrapper">
        {/* {this.renderSquare(things[4])} */}
        <CreateSquares list={things} />
      </div>
    );
  }
}
ReactDOM.render(<Game />, document.getElementById("root"));
