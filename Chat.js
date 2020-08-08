export function addChatAction(chatName) {
  return{
    type: "ADD_CHAT",
    payload: chatName
  };
}

export function deleteChatAction(chatId) {
  return{
    type: "DELETE_CHAT",
    payload: chatId
  };
}

export function addMessageAction(message, chatId, isFrom) {
  return{
    type: "ADD_MESSAGE",
    payload: {
      message,
      chatId,
      isFrom
    }
  };
}

export function replaceMessageAction(message, chatId) {
  return{
    type: "REPLACE_MESSAGE_AT_INDEX",
    payload: {
      message,
      chatId
    }
  };
}

const initState = {
  chat1: {
    title: "Help Chat",
    people: [
      {
        name: "HELP BOT",
        pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR30zJAlreYQFIFcK9HAH3w8RYXBavLvPHMtw&usqp=CAU"
      },
      {
        name: "User",
        pic: "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/twitter/53/flushed-face_1f633.png"
      }
    ],
    textInfo: [
      {
        isFrom: "BOT",
        text: "Hello I am the HELP BOT. Ask Me Anything."
      }
    ]
  }
};

function removeKey(obj, deleteKey) {
  let clone = Object.assign({}, obj);
  delete clone[deleteKey];
  return clone;
}
function getRandomInt(bottom, top) {
    return Math.floor( Math.random() * ( 1 + top - bottom ) ) + bottom;
}
function randomId() {
  var r = Math.random() * 1000;
  var alpha = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz";
  var num = getRandomInt(0, alpha.length).toString();
  r = Math.floor(r).toString().concat(alpha[num]);
  return r;
}
export default function chatReducer(state = initState, action) {
  switch (action.type) {
    case "ADD_CHAT": {
      const id = randomId();
      const botNames = ["Your Mom", "Dad", "Jeff", "Morty", "Rick", "Gary Goodspeed", "HackerX"];
      const botPics = "https://picsum.photos/200 ".repeat(1000).split(" ");
      return{
        ...state,
        [id]: {
          title: action.payload,
          people: [
            {
              name: botNames[getRandomInt(0, botNames.length - 1)],
              pic: botPics[getRandomInt(0, botPics.length - 2)]
            },
            {
              name: "User",
              pic: "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/twitter/53/flushed-face_1f633.png"
            }
          ],
          textInfo: [
            {
              isFrom: "BOT",
              text: "What's Up!"
            }
          ]
        }
      };
    }
    case "DELETE_CHAT": {
      const newState = removeKey(state, action.payload);
      return newState;
    }
    case "ADD_MESSAGE": {
      return{
        ...state,
        [action.payload.chatId]: {
          ...state[action.payload.chatId],
          textInfo: [
            ...state[action.payload.chatId].textInfo,
            {
              isFrom: action.payload.isFrom,
              text: action.payload.message
            }
          ]
        }
      };
    }
    case "REPLACE_MESSAGE_AT_INDEX": {
      const copyState = Object.assign({}, state);
      copyState[action.payload.chatId].textInfo[copyState[action.payload.chatId].textInfo.findIndex((message) => message.text === "Typing...")].text = action.payload.message;
      return{
        ...state,
        [action.payload.chatId]: {
          ...state[action.payload.chatId],
          textInfo: [
            ...copyState[action.payload.chatId].textInfo
          ]
        }
      };
    }
    default: {
      return state;
    }
  }
}