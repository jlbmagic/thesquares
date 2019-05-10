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
    // console.log(e);
    this.props.removeSquare(e);
    // this.setState({
    //   visible: false
    // });
    // console.log(this.state.data.length);
  }
  render() {
    // console.log(this.props.id);
    return (
      <button
        className={`box`}
        onClick={() => this.removeItem(this.props.id)}
        style={{ backgroundColor: this.props.color }}
      >
        {this.props.value}
      </button>
    );
  }
}
