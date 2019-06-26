import React from 'react'
import {Square} from './Square'

export class UsedSection extends React.Component {
  render() {
    const theArray = this.props.list
    const rows = theArray.map(function(ele, i) {
      var v = ele.value
      var height = ele.height / 3
      height = height.toFixed(0)
      const width = '125px'
      return (
        <Square
          key={ele.id}
          id={ele.id}
          style={{
            height,
            width,
            backgroundColor: '#bdbfc1',
          }}
        >
          {v}
        </Square>
      )
    })
    return rows
  }
}
