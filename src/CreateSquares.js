import React from "react";
import { Square } from "./Square";

export class CreateSquares extends React.Component {
  render() {
    const change = this.props.shuffle;
    console.log(change);
    function shuffle(array) {
      var currentIndex = array.length,
        temporaryValue,
        randomIndex;
      // While there remain elements to shuffle...
      while (0 !== currentIndex) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }
      return array;
    }
    const theArray = this.props.list;
    const remove = this.props.removeSquare;
    const clickOn = this.props.onClickSquare;
    const things = change ? shuffle(theArray) : theArray;
    const rows = things.map(function(ele, i) {
      var v = ele.value;
      const height = ele.height;
      const width = ele.width;
      return (
        <Square
          key={ele.id}
          id={ele.id}
          value={v}
          color={ele.color}
          textColor={ele.textColor}
          removeSquare={remove}
          onClickSquare={clickOn}
          height={height}
          width={width}
          doClick={true}
        />
      );
      // return <h1>Hi</h1>;
    });
    // console.log(rows);
    return rows;
  }
}
