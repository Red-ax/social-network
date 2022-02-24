import React from 'react';
// import styles from './Profile.module.css'

//Components
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
//

const Profile = (props) => {
  return (
    <div>
      <ProfileInfo />
      <MyPosts posts={props.profilePage.posts} addPostMessage={props.addPostMessage}/>
    </div>
  );
};

export default Profile;