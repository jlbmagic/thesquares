import React from "react";
import { Square } from "./Square";

export class UsedSection extends React.Component {
  render() {
    const theArray = this.props.list;

    const rows = theArray.map(function(ele, i) {
      var v = ele.value;
      const height = ele.height;
      const width = ele.width;
      return (
        <Square
          key={ele.id}
          id={ele.id}
          value={v}
          height={height}
          width={width}
          color={"#bdbfc1"}
          fontStyle={"italic"}
        />
      );
      // return <h1>Hi</h1>;
    });
    // console.log(rows);
    return rows;
  }
}
