import React from "react";
import { weekOf, complete } from "./index";
// console.log(weekOf);
export class SubHeading extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      complete: this.props.complete,
      weekOf: null
    };
  }

  render() {
    console.log(this.props);
    const weekOf = this.props.weekOf;
    console.log(weekOf);
    const complete = this.props.complete;
    return (
      <div>
        <p>{weekOf} </p>
        <br />
        <p>{complete} </p>
      </div>
    );
  }
}
