import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMessageAction, replaceMessageAction } from "./Chat.js";
export default function Messaging({chatName}) {
    const [state, setState] = useState({text: "", emojiShow: false});
    const dispatch = useDispatch(); 
    const mainState = useSelector(state => state);
    const randomResponse = "Eating eggs on Thursday for choir practice was recommended.<>He stepped gingerly onto the bridge knowing that enchantment awaited on the other side.<>That was how he came to win $1 million.<>The busker hoped that the people passing by would throw money, but they threw tomatoes instead, so he exchanged his hat for a juicer.<>The thick foliage and intertwined vines made the hike nearly impossible.<>She let the balloon float up into the air with her hopes and dreams.<>Karen realized the only way she was getting into heaven was to cheat.<>Carol drank the blood as if she were a vampire.<>Please wait outside of the house.<>The blinking lights of the antenna tower came into focus just as I heard a loud snap.<>He was 100% into fasting with her until he understood that meant he couldn't eat.<>There's an art to getting your way, and spitting olive pits across the table isn't it.<>He said he was not there yesterday; however, many people saw him there.<>Facing his greatest fear, he ate his first marshmallow.<>Random words in front of other random words create a random sentence.<>He was the type of guy who liked Christmas lights on his house in the middle of July.<>The beauty of the African sunset disguised the danger lurking nearby.<>Nothing is as cautiously cuddly as a pet porcupine.<>I ate a sock because people on the Internet told me to.<>The fog was so dense even a laser decided it wasn't worth the effort.".split("<>");
    const emojiCache = "😀 😃 😄 😁 😆 🤩 😅 😂 🤣 ☺️ 😊 😇 🙂 🙃 😉 😌 😍 😘 😗 😙 😚 😋 🤪 😜 😝 😛 🤑 🤗 🤓 😎 🤡 🤠 😏 😒 😞 😔 😟 😕 🙁 ☹️ 😣 😖 😫 😩 😤 😠 😡 🤬 😶 😐 😑 😯 😦 😧 😮 😲 😵 🤯 😳 😱 😨 😰 😢 😥 🤤 😭 😓 😪 😴 🥱 🙄 🤨 🧐 🤔 🤫 🤭 🤥 😬 🤐 🤢 🤮 🤧 😷 🤒 🤕 😈 👿 👹 👺 💩 👻 💀 ☠️ 👽 👾 🤖 🎃 😺 😸 😹 😻 😼 😽 🙀 😿 😾 👐 🙌 👏 🙏 🤲 🤝 👍 👎 👊 ✊ 🤛 🤜 🤞 ✌️ 🤘 🤏 👌 👈 👉 👆 👇 ☝️ ✋ 🤚 🖐 🖖 👋 🤙 💪 🖕 🤟 ✍️ 🤳 💅 🖖 💄 💋 👄 👅 👂 🦻 👃 🦵 🦶 🦾 🦿 👣 👁 👀 🗣 👤 👥 👶 👦 👧 🧒 👨 👩 🧑 👱‍♀️ 👱 🧔 👴 👵 🧓 👲 👳‍♀️ 👳 🧕 👮‍♀️ 👮 👷‍♀️ 👷 💂‍♀️ 💂 🕵️‍♀️ 🕵️ 👩‍⚕️ 👨‍⚕️ 👩‍🌾 👨‍🌾 👩‍🍳 👨‍🍳 👩‍🎓 👨‍🎓 👩‍🎤 👨‍🎤 👩‍🏫 👨‍🏫 👩‍🏭 👨‍🏭 👩‍💻 👨‍💻 👩‍💼 👨‍💼 👩‍🔧 👨‍🔧 👩‍🔬 👨‍🔬 👩‍🎨 👨‍🎨 👩‍🚒 👨‍🚒 👩‍✈️ 👨‍✈️ 👩‍🚀 👨‍🚀 👩‍⚖️ 👨‍⚖️ 🤶 🎅 👸 🤴 👰 🤵 👼 🤰 🤱 🙇‍♀️ 🙇 💁 💁‍♂️ 🙅 🙅‍♂️ 🙆 🙆‍♂️ 🙋 🙋‍♂️ 🤦‍♀️ 🤦‍♂️ 🤷‍♀️ 🤷‍♂️ 🙎 🙎‍♂️ 🙍 🙍‍♂️ 💇 💇‍♂️ 💆 💆‍♂️ 🧖‍♀️ 🧖‍♂️ 🧏 🧏‍♂️ 🧏‍♀️ 🧙‍♀️ 🧙‍♂️ 🧛‍♀️ 🧛‍♂️ 🧟‍♀️ 🧟‍♂️ 🧚‍♀️ 🧚‍♂️ 🧜‍♀️ 🧜‍♂️ 🧝‍♀️ 🧝‍♂️ 🧞‍♀️ 🧞‍♂️ 🕴 💃 🕺 👯 👯‍♂️ 🚶‍♀️ 🚶 🏃‍♀️ 🏃 🧍 🧍‍♂️ 🧍‍♀️ 🧎 🧎‍♂️ 🧎‍♀️ 👨‍🦯 👩‍🦯 👨‍🦼 👩‍🦼 👨‍🦽 👩‍🦽 🧑‍🤝‍🧑 👫 👭 👬 💑 👩‍❤️‍👩 👨‍❤️‍👨 💏 👩‍❤️‍💋‍👩 👨‍❤️‍💋‍👨 👪 👨‍👩‍👧 👨‍👩‍👧‍👦 👨‍👩‍👦‍👦 👨‍👩‍👧‍👧 👩‍👩‍👦 👩‍👩‍👧 👩‍👩‍👧‍👦 👩‍👩‍👦‍👦 👩‍👩‍👧‍👧 👨‍👨‍👦 👨‍👨‍👧 👨‍👨‍👧‍👦 👨‍👨‍👦‍👦 👨‍👨‍👧‍👧 👩‍👦 👩‍👧 👩‍👧‍👦 👩‍👦‍👦 👩‍👧‍👧 👨‍👦 👨‍👧 👨‍👧‍👦 👨‍👦‍👦 👨‍👧‍👧 👚 👕 👖 👔 👗 👙 👘 👠 👡 👢 👞 👟 👒 🎩 🎓 👑 ⛑ 🎒 👝 👛 👜 💼 👓 🕶 🤿 🌂 ☂️ 🧣 🧤 🧥 🦺 🥻 🩱 🩲 🩳 🩰 🧦 🧢 ⛷ 🏂 🏋️‍♀️ 🏋️ 🤺 🤼‍♀️ 🤼‍♂️ 🤸‍♀️ 🤸‍♂️ ⛹️‍♀️ ⛹️ 🤾‍♀️ 🤾‍♂️ 🏌️‍♀️ 🏌️ 🏄‍♀️ 🏄 🏊‍♀️ 🏊 🤽‍♀️ 🤽‍♂️ 🚣‍♀️ 🚣 🏇 🚴‍♀️ 🚴 🚵‍♀️ 🚵 🤹‍♀️ 🤹‍♂️ 🧗‍♀️ 🧗‍♂️ 🧘‍♀️ 🧘‍♂️ 🥰 🥵 🥶 🥳 🥴 🥺 🦸 🦹 🧑‍🦰 🧑‍🦱 🧑‍🦳 🧑‍🦲 🧑‍⚕️ 🧑‍🎓 🧑‍🏫 🧑‍⚖️ 🧑‍🌾 🧑‍🍳 🧑‍🔧 🧑‍🏭 🧑‍💼 🧑‍🔬 🧑‍💻 🧑‍🎤 🧑‍🎨 🧑‍✈️ 🧑‍🚀 🧑‍🚒 🧑‍🦯 🧑‍🦼 🧑‍🦽 🦰 🦱 🦲 🦳".split(" ");
  function getRandomInt(bottom, top) {
    return Math.floor( Math.random() * ( 1 + top - bottom ) ) + bottom;
  }
  function handleSubmit() {
    dispatch(addMessageAction(state.text, chatName,"User")); 
    setState({text: "", emojiShow: false});
  }

  function handleChange(event) {
    event.persist();
    setState((prevState) => {
      return{
        ...prevState,
        text: event.target.value
      };
    });
  }

  function addEmoji(emoji) {
    setState((prevState) => {
      return{
          ...prevState,
          text: prevState.text + emoji
      };
    });
  }
  function emojiSetter() {
    setState((prevState) => {
      return{
        ...prevState,
        emojiShow: !prevState.emojiShow
      };
    });
  }
  function handleEmoji(event) {
    event.preventDefault();
  }
  return(
    <>
      {
        <div className={state.emojiShow ? "emoji-poppup" : "hidden"}>
          <form className="emoji-form" onSubmit={handleEmoji}>
          {
            emojiCache.map((emoji) => {
              return(
                <input value={emoji} type="submit" onClick={() => {
                  addEmoji(emoji);
                  emojiSetter();
                }} className="emoji-button" />
              );
            })
          }
          </form>
        </div>
      }
    <div className="texting-div">
      <form onSubmit={() => {
        event.preventDefault();
        function run() {
          handleSubmit();
          setTimeout(() => {
            dispatch(addMessageAction("Typing...", chatName, "BOT"));
            setTimeout(() => {
              dispatch(replaceMessageAction(randomResponse[getRandomInt(0, randomResponse.length)], chatName))
            },3000);
          }, 2000)
        }
        state.text !== "" && run();
      }}>
        <input className="texting-input" type="text" value={state.text} onChange={handleChange} autoFocus /><button className="open-emoji" type="button" onClick={emojiSetter}>😀</button><button className="send"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTcGhNyI_IbIv5vjc-OccvCcg7rZW7BL8Hh0g&usqp=CAU" className="send-icon"/></button>
      </form>
    </div>
    </>
  );
}