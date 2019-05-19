import React from "react";
export class Complete extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      complete: this.props.complete,
      finished: this.props.finished,
      total: this.props.total
    };
  }
  render() {
    const complete = this.props.complete;
    const finished = this.props.finished;
    const total = this.props.total;
    console.log(this.props);
    return (
      <div>
        <p>
          {complete +
            " .................. " +
            finished +
            " / " +
            total +
            " Accomplished"}
        </p>
      </div>
    );
  }
}
