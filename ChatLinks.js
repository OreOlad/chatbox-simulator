import React from "react";
import { useDispatch } from "react-redux";

export default function ChatInfo({pic, message, name}) {
  return(
    <div className="chat-link-wrapper">
      <p>
        <p className="chat-link-message"><>{message}</></p>
        <img src={pic} className="chat-pic"/> <span className="chat-message-sender">{name}</span> 
      </p>
    </div>
  );
}