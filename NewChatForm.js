import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { addChatAction } from "./Chat.js";

export default function NewChatForm({ dispatch }) {
  const [state, setState] = useState({ text: "" });
  function handleSubmit(event) {
    event.preventDefault();
    if (state.text !== "") {
      dispatch(addChatAction(state.text));
      setState({text: ""});
    }
  }
  function handleChange(event) {
    setState({
     text: event.target.value 
    });
  }
  return(
    <form onSubmit={() => {
        dispatch(addChatAction(state.text));
      }} className="new-chat-form">
      <label htmlFor="title" className="new-chat-form-title">Add A Chat</label><br />
      <section style={{display: "flex", aligItems: "baseline" }}><input type="text" onChange={handleChange} className="new-chat-form-input" value={state.text}id="title"placeholder="Title..." />
      <button onClick={handleSubmit} className="new-chat-form-submit" type="submit"><FontAwesomeIcon icon={faPlusCircle}/></button></section>
    </form>
  );
}
