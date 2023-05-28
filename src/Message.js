import React from 'react'

const Message = (props) => {
  return (
    <div style={{"width": "300px",
        "height": "100px",    
        "padding": "10px",
        "box-shadow": "5px 10px red"}}>
        <p>{props.msg}</p>
    </div>
  )
}

export default Message