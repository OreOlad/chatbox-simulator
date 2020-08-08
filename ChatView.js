import React from "react";
import { BotTextBox, UserTextBox } from "./Texting.js";
import { useSelector } from "react-redux";
import ChooseAChat from "./ChooseAChat.js";
import { useParams, Redirect } from "react-router-dom";
import Messaging from "./Messaging.js";

export default function ChatView() {
  const { id } = useParams();
  const state = useSelector(state => state);
  return(
    <div className="chat-view">
      <div className="chat-title-wrapper">
        {
          state[id] !== undefined &&
          <div className="profile-images"><img src={state[id].people[1].pic} className="pro-pic higher"/><img src={state[id].people[0].pic} className="pro-pic" /></div>
        }
      <div className="chat-title">
        {
          state[id] !== undefined && state[id].title
        }
      </div>
      </div>
      <div className="chat-content">
        {
          state[id] !== undefined && state[id].textInfo.map((message) => {
            if (message.isFrom === "BOT" ) {
              return (<><BotTextBox message={message.text}/><div className="clear"/></>);
            } else {
              return (<><UserTextBox message={message.text}/><div className="clear"/></>);
            }
          })
          
        }
      </div>
      {
        state[id] !== undefined &&
        <Messaging chatName={id} />
      }
    </div>
  );
}