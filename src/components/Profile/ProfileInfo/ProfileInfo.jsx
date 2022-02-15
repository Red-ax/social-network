import React from 'react';
import styles from './ProfileInfo.module.css'

const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img className={styles.imgPhone} src="https://wilcity.com/wp-content/uploads/2020/03/39875853-header-wallpapers.jpg" alt=""/>
      </div>

      <div className={styles.descriptionBlock}>
        Avatar + description
      </div>
    </div>
  );
};

export default ProfileInfo;