import React from 'react';
import styles from './FriendListItem.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div className={styles.friendCard}>
      <span className={`${styles.statusIndicator} ${isOnline ? styles.online : styles.offline}`}></span>
      <img className={styles.avatar} src={avatar} alt="Avatar" width="48" />
      <p className={styles.name}>{name}</p>
      <p className={`${styles.statusText} ${isOnline ? styles.online : styles.offline}`}>
        {isOnline ? 'Online' : 'Offline'}
      </p>
    </div>
  );
};

export default FriendListItem;
