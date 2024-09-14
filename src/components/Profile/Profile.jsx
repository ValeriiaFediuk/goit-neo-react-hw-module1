import React from 'react';
import styles from './Profile.module.css';

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={styles.profileContainer}>
      <div className={styles.profileCard}>
        <img className={styles.profileImage} src={image} alt="User avatar" />
        <p className={styles.profileName}>{name}</p>
        <p className={styles.profileTag}>@{tag}</p>
        <p className={styles.profileLocation}>{location}</p>
        <ul className={styles.statsList}>
          <li className={styles.statsItem}>
            <span className={styles.statsLabel}>Followers</span>
            <span className={styles.statsValue}>{stats.followers}</span>
          </li>
          <li className={styles.statsItem}>
            <span className={styles.statsLabel}>Views</span>
            <span className={styles.statsValue}>{stats.views}</span>
          </li>
          <li className={styles.statsItem}>
            <span className={styles.statsLabel}>Likes</span>
            <span className={styles.statsValue}>{stats.likes}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Profile;
