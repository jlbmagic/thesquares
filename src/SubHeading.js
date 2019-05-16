import React from "react";
// import { weekOf, complete } from "./index";
import { Complete } from "./Complete";
// console.log(weekOf);
export class SubHeading extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      complete: this.props.complete,
      weekOf: this.props.weekOf,
      otherText: this.props.otherText
    };
  }

  render() {
    const weekOf = this.state.weekOf;
    const complete = this.props.complete;
    const otherText = this.props.otherText;
    return (
      <div>
        <p>{weekOf} </p>
        <br />
        <Complete complete={complete} otherText={otherText} />
      </div>
    );
  }
}
