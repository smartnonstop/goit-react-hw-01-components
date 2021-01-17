import React from 'react';
import style from './FriendListItem.module.css';

function FriendListItem ({isOnline, avatar, name}) {
  const status = [style.status, isOnline? style.online : style.offline];
  return (
    <li className={style.item}>
      <span className={status.join(" ")}></span>
      <img className={style.avatar} src={avatar} alt="" width="48" />
      <p className={style.name}>{name}</p>
    </li>
  );
}

export default FriendListItem;