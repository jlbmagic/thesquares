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
    function shuffle(array) {
      var currentIndex = array.length,
        temporaryValue,
        randomIndex;

      // While there remain elements to shuffle...
      while (0 !== currentIndex) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }

      return array;
    }
    const theArray = this.props.list;
    const things = shuffle(theArray);
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
      { value: "Video Games", color: "#f41f8d" },
      { value: "Read", color: "#f4bc42" }
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
