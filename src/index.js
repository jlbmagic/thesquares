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

const weekOf = initialProps.weekOf;
const finished = initialProps.finished;
const total = initialProps.total;
const complete = initialProps.complete;

class App extends React.Component {
  componentDidMount() {
    addMethods({
      updateData: parameter => {
        const theData = parameter.data;
        const complete = parameter.complete;
        const weekOf = parameter.weekOf;
        this.setState({
          data: theData,
          used: [],
          weekOf: weekOf,
          complete: complete,
          change: true,
          otherText: this.state.otherText
        });
      },
      addOne: parameter => {
        const theRow = parameter.data;
        this.addTheRow(theRow);
      },
      addUsed: parameter => {
        const theRow = parameter.row;
        this.updateUsed(theRow);
      },
      updateComplete: parameter => {
        // alert("Complete");
        this.setState({
          complete: parameter.complete,
          finished: parameter.finished,
          total: parameter.total
        });
      }
    });
  }
  //Functions
  clickOn = id => {
    const returnValue = {
      id
    };
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
      finished: finished,
      total: total
    };
    this.removeSquare = this.removeSquare.bind(this);
  }
  addTheRow(row) {
    const newData = update(this.state.data, { $push: [row] });
    this.setState(prevState => ({
      data: newData
    }));
  }
  updateUsed(row) {
    const newData = update(this.state.used, { $push: [row] });
    this.setState(prevState => ({
      used: newData
    }));
  }
  removeSquare(square) {
    this.setState({
      data: this.state.data.filter(el => el.id !== square),
      change: false
    });
    console.log(this.state.data.length - 1);
  }

  render() {
    return (
      <div>
        <h1>My Time Allocation</h1>
        <h2>To Do</h2>

        <div className="wrapper">
          <CreateSquares
            list={this.state.data}
            removeSquare={this.removeSquare}
            onClickSquare={this.clickOn}
            shuffle={this.state.change}
          />
        </div>
        <h2>Completed</h2>

        <SubHeading
          weekOf={this.state.weekOf}
          complete={this.state.complete}
          finished={this.state.finished}
          total={this.state.total}
        />

        <div className="wrapper">
          <div>
            <UsedSection list={this.state.used} />
          </div>
        </div>
      </div>
    );
  }
}
class Done extends React.Component {
  render() {
    return <h1>You're DONE!!!</h1>;
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
