import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { CreateSquares } from "./CreateSquares";
import { addMethods, callFMScript, initialProps } from "../src/util/api";

// console.log(initialProps);
const things = initialProps.data;
const weekOf = initialProps.weekOf;
const complete = initialProps.complete;
console.log(weekOf);
// const things = [
//   { id: 1, value: "WorkOut", color: "#403556" },
//   { id: 2, value: "Work", color: "#48f442" },
//   { id: 3, value: "Video Games", color: "#f41f8d" },
//   { id: 4, value: "Video Games", color: "#f41f8d" },
//   { id: 5, value: "WorkOut", color: "#403556" },
//   { id: 6, value: "Work", color: "#48f442" },
//   { id: 7, value: "Video Games", color: "#f41f8d" },
//   { id: 8, value: "Work", color: "#48f442" },
//   { id: 9, value: "WorkOut", color: "#403556" },
//   { id: 10, value: "Video Games", color: "#f41f8d" },
//   { id: 11, value: "Video Games", color: "#f41f8d" },
//   { id: 12, value: "Read", color: "#f4bc42" }
// ];
class Game extends React.Component {
  componentDidMount() {
    addMethods({
      updateData: parameter => {
        const theData = parameter.data;
        console.log(theData);
        this.setState({
          data: theData
        });
        console.log("updated");
        // console.log(this.setState.data);
      },
      updateComplete: parameter => {
        const complete = parameter.complete;
      }
    });
  }

  clickOn = id => {
    const returnValue = {
      id
    };
    console.log(id);
    callFMScript(
      initialProps.fileName,
      initialProps.eventHandler.clickOn,
      JSON.stringify(returnValue)
    );
  };

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

        <span>
          <p>{weekOf}</p>
          <p>............................................</p>
          <p>{complete}</p>
        </span>

        <div className="wrapper">
          <CreateSquares
            list={this.state.data}
            removeSquare={this.removeSquare}
            onClickSquare={this.clickOn}
          />
        </div>
      </div>
    );
  }
}
ReactDOM.render(<Game />, document.getElementById("root"));
