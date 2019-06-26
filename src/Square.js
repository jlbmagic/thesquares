import React from 'react'

function Square({style, className = '', ...props}) {
  return (
    <button
      className={`box ${className}`}
      style={{
        fontStyle: 'italic',
        fontSize: '100%',
        ...style,
      }}
      {...props}
    />
  )
}

export {Square}
