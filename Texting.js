import React from "react";

export function BotTextBox({message}) {
  return(
    <div className="text-box-bot">
      {message}
    </div>
  );
}

export function UserTextBox({message}) {
  return(
    <div className="text-box-user">
      {message}
    </div>
  );
}