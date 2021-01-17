import React from 'react';
import style from './FriendList.module.css';
import FriendListItem from "../FriendListItem/FriendListItem";
import PropTypes from 'prop-types';

function FriendList ({friends}) {
  
  return (
    <ul className={style.friendlist}>
      {friends.map( friend => (
        <FriendListItem key={friend.id}
          avatar={friend.avatar} name={friend.name} 
          isOnline={friend.isOnline} />
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired
    })
  ).isRequired
};

export default FriendList;