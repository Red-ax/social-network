import React from 'react';
import module from './ProfileInfo.module.css'

const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img className={module.imgPhone} src="https://wilcity.com/wp-content/uploads/2020/03/39875853-header-wallpapers.jpg" alt=""/>
      </div>

      <div className={module.descriptionBlock}>
        Avatar + description
      </div>
    </div>
  );
};

export default ProfileInfo;