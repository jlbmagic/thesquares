import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const things = [
  { id: 1, value: "WorkOut", color: "#403556" },
  { id: 2, value: "Work", color: "#48f442" },
  { id: 3, value: "Video Games", color: "#f41f8d" },
  { id: 4, value: "Video Games", color: "#f41f8d" },
  { id: 5, value: "WorkOut", color: "#403556" },
  { id: 6, value: "Work", color: "#48f442" },
  { id: 7, value: "Video Games", color: "#f41f8d" },
  { id: 8, value: "Work", color: "#48f442" },
  { id: 9, value: "WorkOut", color: "#403556" },
  { id: 10, value: "Video Games", color: "#f41f8d" },
  { id: 11, value: "Video Games", color: "#f41f8d" },
  { id: 12, value: "Read", color: "#f4bc42" }
];
class Square extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null
    };
    this.removeItem = this.removeItem.bind(this);
  }
  removeItem(e) {
    // console.log(e);
    this.props.removeSquare(e);
    // console.log(this.state.data.length);
  }
  render() {
    // console.log(this.props.id);
    return (
      <button
        className="box"
        onClick={() => this.removeItem(this.props.id)}
        style={{ backgroundColor: this.props.color }}
        // key={this.props.id}
      >
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
    const remove = this.props.removeSquare;
    // console.log(remove);
    const things = shuffle(theArray);
    // console.log(things);
    const rows = things.map(function(ele, i) {
      var v = ele.value;
      // console.log(v);
      return (
        <Square
          key={ele.id}
          id={ele.id}
          value={v}
          color={ele.color}
          removeSquare={remove}
        />
      );
      // return <h1>Hi</h1>;
    });
    // console.log(rows);
    return rows;
  }
}
class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: things
    };
    this.removeSquare = this.removeSquare.bind(this);
  }
  removeSquare(square) {
    // console.log("Remove " + square);
    // console.log(this.state.data);
    this.setState({
      data: this.state.data.filter(el => el.id !== square)
    });
    // console.log(this.state.data.length);
  }

  render() {
    // console.log(this.state.data);

    return (
      <div>
        <h1>My Time Allocation</h1>
        <div className="wrapper">
          <CreateSquares
            list={this.state.data}
            removeSquare={this.removeSquare}
          />
        </div>
      </div>
    );
  }
}
ReactDOM.render(<Game />, document.getElementById("root"));
