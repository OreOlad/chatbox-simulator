import React, { useState } from "react";
import ChatLink from "./ChatLinks.js";
import NewChatForm from "./NewChatForm.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSlidersH } from "@fortawesome/free-solid-svg-icons";
import { Link, useParams } from "react-router-dom";
import { addChatAction, deleteChatAction } from "./Chat.js";
import { useSelector, useDispatch } from "react-redux";

export default function NavBar() {
  const state = useSelector(state => state);
  const [navState, setNavState] = useState({show: true});
  const dispatch = useDispatch();
  const keys = Object.keys(state);
  const handleState = () => {
    setNavState((prevState) => {
      return{
        show: !prevState.show
      }
    });
  };
  return(
    <nav className="nav">
      {
        navState.show
        ? <>
            <NewChatForm dispatch={dispatch}/>
            <fieldset style={{borderRadius: "1rem", border: "1px solid lightgrey", fontFamily: "Poppins"}}>
            <legend>Direct Messages</legend>
            <div className="dms">
            {
              keys.map((key) => {
                return(
                  <section style={{
                    marginBottom: "2.5rem"
                  }}>
                    <p className="chat-link-title">{state[key].title}</p>
                    <ChatLink message={state[key].textInfo.slice(-1)[0].text} pic={
                      state[key].textInfo.slice(-1)[0].isFrom === "BOT" 
                      ? state[key].people[0].pic
                      : state[key].people[1].pic 
                    }
                    name={
                      state[key].textInfo.slice(-1)[0].isFrom === "BOT"
                      ? state[key].people[0].name
                      : state[key].people[1].name
                    }/><br/>
                    <span onClick={() => {
                      const canDelete = confirm("Do you want to delete this chat?");
                      canDelete && dispatch(deleteChatAction(key));
                    }} className="delete-chat">Delete Chat</span> <span><Link to={`/${key}`}  className="enter-chat">Enter</Link></span>
                  </section>
                );
              })
            }
            </div>
            </fieldset>
            <br /><span onClick={handleState} className="nav-close">Close Nav Bar<img/></span>
          </>
        : <button className="nav-open" onClick={handleState}><FontAwesomeIcon icon={faSlidersH} size="7x"/></button>
      }
    </nav>
  );
}