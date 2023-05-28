import React from 'react'
import Message from './Message';

const Messenger = () => {
  return (
    <div>
        <h1>Messenges</h1>
        <Message msg="Message 1"/><br/>
        <Message msg="How are you"/><br/>
        <Message msg="This is the link to click"/><br/>
        </div>
  )
}

export default Messenger;
