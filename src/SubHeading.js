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
      finished: this.props.finished,
      total: this.props.total
    };
  }

  render() {
    const complete = this.props.complete;
    const finished = this.props.finished;
    const total = this.props.total;
    return <Complete complete={complete} finished={finished} total={total} />;
  }
}
