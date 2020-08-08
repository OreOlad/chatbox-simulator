import { createStore } from "redux";
import chatReducer from "./Chat.js";
import formReducer from "./showForm.js";
var store = createStore(chatReducer);
store.subscribe(() => {
  console.log(store.getState);
});

export default store;