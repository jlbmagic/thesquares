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
    console.log("E" + e);
    this.props.removeSquare(e);
    this.props.onClickSquare(e);
  }
  render() {
    // console.log(this.props);
    const doClick = this.props.doClick;
    if (doClick) {
      return (
        <button
          className={`box`}
          onClick={() => this.removeItem(this.props.id)}
          style={{
            backgroundColor: this.props.color,
            fontStyle: this.props.fontStyle,
            color: this.props.textColor,
            width: this.props.width,
            height: this.props.height,
            justifyContent: "space-even"
          }}
        >
          {this.props.value}
        </button>
      );
    }
    return (
      <button
        className={`box`}
        style={{
          backgroundColor: this.props.color,
          fontStyle: this.props.fontStyle,
          color: this.props.textColor,
          width: this.props.width,
          height: this.props.height,
          justifyContent: "space-even"
        }}
      >
        {this.props.value}
      </button>
    );
  }
}
