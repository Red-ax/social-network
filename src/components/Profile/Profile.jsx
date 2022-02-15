import React from 'react';
// import styles from './Profile.module.css'

//Components
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
//

const Profile = ({ posts }) => {
  return (
    <div>
      <ProfileInfo />
      <MyPosts posts={posts}/>
    </div>
  );
};

export default Profile;