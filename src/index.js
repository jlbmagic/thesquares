import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { CreateSquares } from "./CreateSquares";
import { addMethods, callFMScript, initialProps } from "../src/util/api";
import { SubHeading } from "./SubHeading";

const things = initialProps.data;
const thingsLength = things.length;
console.log(thingsLength);
export const weekOf = initialProps.weekOf;
export const otherText = initialProps.otherText;
export const complete = initialProps.complete;

class Game extends React.Component {
  componentDidMount() {
    addMethods({
      updateData: parameter => {
        const theData = parameter.data;
        const complete = parameter.complete;
        const weekOf = parameter.weekOf;
        // console.log(complete);
        this.setState({
          data: theData,
          weekOf: weekOf,
          complete: complete,
          change: true,
          otherText: this.state.otherText
        });
        // console.log(this.state.complete);
      },
      updateComplete: parameter => {
        this.setState({
          complete: parameter.complete,
          otherText: parameter.otherText
        });
      }
    });
  }

  clickOn = id => {
    const returnValue = {
      id
    };
    // console.log(id);
    callFMScript(
      initialProps.fileName,
      initialProps.eventHandler.clickOn,
      JSON.stringify(returnValue)
    );
  };

  constructor(props) {
    super(props);
    this.state = {
      data: things,
      weekOf: weekOf,
      complete: complete,
      change: true,
      otherText: otherText
    };
    this.removeSquare = this.removeSquare.bind(this);
  }
  removeSquare(square) {
    this.setState({
      data: this.state.data.filter(el => el.id !== square),
      change: false
    });
  }

  render() {
    return (
      <div>
        <h1>My Time Allocation</h1>

        <SubHeading
          weekOf={this.state.weekOf}
          complete={this.state.complete}
          otherText={this.state.otherText}
        />

        <div className="wrapper">
          <CreateSquares
            list={this.state.data}
            removeSquare={this.removeSquare}
            onClickSquare={this.clickOn}
            shuffle={this.state.change}
          />
        </div>
      </div>
    );
  }
}
ReactDOM.render(<Game />, document.getElementById("root"));
