import React from 'react';
import style from './Profile.module.css';
import PropTypes from 'prop-types';

function Profile({name, tag, location, avatar, stats}) {
  return(
    <div className={style.box}>
      <div className={style.card}>
        <img className={style.avatar} src={avatar} alt={name}/>
        <h2 className={style.name}>{name}</h2>
        <p className={style.tag}>@{tag}</p>
        <p className={style.location}>{location}</p>
        <ul className={style.stats}>
          <li>
            <p className={style.statName}>Followers</p>
            <p className={style.statCount}>{stats.followers}</p>
          </li>
          <li>
            <p className={style.statName}>Views</p>
            <p className={style.statCount}>{stats.views}</p>
          </li>
          <li>
            <p className={style.statName}>Likes</p>
            <p className={style.statCount}>{stats.likes}</p>
          </li>
        </ul>
      </div>
    </div>
  );
}

Profile.defaultProps = {
  avatar: 'https://cdn.mos.cms.futurecdn.net/Tpwmmfo3CiAJvwd4vXGzvn.jpg',
};

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired
  }),
};




export default Profile;