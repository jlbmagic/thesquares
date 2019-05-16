import React from "react";
// import { weekOf, complete, otherText } from "./SubHeading";
export class Complete extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      complete: this.props.complete,
      otherText: this.props.otherText
    };
  }
  render() {
    const complete = this.props.complete;
    const otherText = this.props.otherText;
    console.log(this.props);
    return (
      <div>
        <p>{complete + " .................. " + otherText}</p>
      </div>
    );
  }
}
