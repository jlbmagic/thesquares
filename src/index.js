import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import update from "react-addons-update";
// import update from "react-addons-update";
import { CreateSquares } from "./CreateSquares";
import { addMethods, callFMScript, initialProps } from "../src/util/api";
import { SubHeading } from "./SubHeading";
import { UsedSection } from "./Used";
const things = initialProps.data;
const used = initialProps.used;
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
        console.log(theData);
        this.setState({
          data: theData,
          weekOf: weekOf,
          complete: complete,
          change: true,
          otherText: this.state.otherText
        });
        // console.log(this.state.complete);
      },
      addOne: parameter => {
        const theRow = parameter.data;
        this.addTheRow(theRow);
      },
      updateComplete: parameter => {
        console.log(parameter);
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
      used: used,
      weekOf: weekOf,
      complete: complete,
      change: true,
      otherText: otherText
    };
    this.removeSquare = this.removeSquare.bind(this);
  }
  addTheRow(row) {
    const newData = update(this.state.data, { $push: [row] });
    this.setState(prevState => ({
      data: newData
    }));
    console.log(this.state.data);
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
        <div className="wrapper">
          <h1>Used</h1>
          <div>
            <UsedSection list={this.state.used} />
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Game />, document.getElementById("root"));
