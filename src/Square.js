import React from "react";

export class Square extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null
    };
    this.removeItem = this.removeItem.bind(this);
  }
  removeItem(e) {
    this.props.removeSquare(e);
    this.props.onClickSquare(e);
  }
  render() {
    const doClick = this.props.doClick;
    if (doClick) {
      return (
        <button
          className={`box`}
          onClick={() => this.removeItem(this.props.id)}
          style={{
            backgroundColor: this.props.color,
            fontStyle: this.props.fontStyle,
            fontSize: "100%",
            color: this.props.textColor,
            width: this.props.width,
            height: this.props.height
          }}
        >
          {this.props.value}
        </button>
      );
    }
    return (
      <div
        className={`box`}
        style={{
          backgroundColor: this.props.color,
          fontStyle: "italic",
          fontSize: "100%",
          color: this.props.textColor,
          width: this.props.width,
          height: this.props.height
        }}
      >
        {this.props.value}
      </div>
    );
  }
}
