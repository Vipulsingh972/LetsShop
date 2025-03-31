import React from 'react'

const Message = (props) => {
  return (
    <div>
      {/* Accessing props value */}
      <p>{props.text}</p>
    </div>
  )
}

export default Message
