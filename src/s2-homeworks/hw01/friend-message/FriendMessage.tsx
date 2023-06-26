import React from "react";
import { MessagePropsType } from "../message/Message";
import s from "./FriendMessage.module.css";

// создать тип вместо any и отобразить приходящие данные
const FriendMessage = (props: MessagePropsType) => {
  return (
    <div
      id={props.message.message.text + props.message.id}
      className={s.friendMessage}
    >
      <div className={s.friendImageAndText}>
        <img
          id={props.message.user.avatar + props.message.id}
          // создаёт студент
          src={props.message.user.avatar}
          alt={props.message.user.name}
          //
        />
        <div className={s.friendText}>
          <div
            id={props.message.user.name + props.message.id}
            className={s.friendName}
          >
            {/*создаёт студент*/}
            {props.message.user.name}
            {/**/}
          </div>
          <pre
            id={props.message.message.text + props.message.id}
            className={s.friendMessageText}
          >
            {/*создаёт студент*/}
            {props.message.message.text}
            {/**/}
          </pre>
        </div>
      </div>
      <div
        id={props.message.message.time + props.message.id}
        className={s.friendTime}
      >
        {/*создаёт студент*/}
        {props.message.message.time}
        {/**/}
      </div>
    </div>
  );
};

export default FriendMessage;
