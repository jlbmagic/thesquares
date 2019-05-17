import React from "react";
import { Square } from "./Square";

export class UsedSection extends React.Component {
  render() {
    const theArray = this.props.list;

    // if (theArray === null) {
    //   return [];
    // }
    const rows = theArray.map(function(ele, i) {
      var v = ele.value;
      var height = ele.height / 3;
      height = height.toFixed(0);
      const width = ele.width;
      return (
        <Square
          key={ele.id}
          id={ele.id}
          value={v}
          height={height}
          width={width}
          color={"#bdbfc1"}
          doClick={false}
        />
      );
    });
    return rows;
  }
}
