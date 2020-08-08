import React from "react";
import { Provider, useDispatch } from "react-redux";
import ReactDOM from "react-dom";
import ChatView from "./ChatView.js";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import "./style.css";
import store from "./redux.js";
import NavBar from "./NavBar.js";
import NewChatForm from "./NewChatForm.js";

function App() {
  return(
    <Router>
      <div className="app">
        <NavBar />
        <Switch>
          <Route  path="/:id" children={<ChatView />}/>
        </Switch>
      </div>
    </Router>
  );
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);