import React from 'react'

const Message = (props) => {
  return (
    <div>
      {/* Accessing props value */}
      <h2>{props.text}</h2>
    </div>
  )
}

export default Message
