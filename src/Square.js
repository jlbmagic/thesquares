import React from "react";
export class Square extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null
      //   visible: true
    };
    this.removeItem = this.removeItem.bind(this);
  }
  removeItem(e) {
    console.log(e);
    this.props.removeSquare(e);
    this.props.onClickSquare(e);
  }
  render() {
    // const clickOn = this.props.onClickSquare;
    // console.log(this.props.id);
    return (
      <button
        className={`box`}
        onClick={() => this.removeItem(this.props.id)}
        style={{ backgroundColor: this.props.color, color: "#000" }}
      >
        {this.props.value}
      </button>
    );
  }
}
