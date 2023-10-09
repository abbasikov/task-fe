import React, { useContext } from 'react';
import classes from './ProfileBox.module.css';
import { ProfileContext } from '../../context/profileContext';
import { Avatar } from 'antd';
import {
  GithubOutlined,
  LinkedinFilled,
  UserOutlined,
  YoutubeFilled
} from '@ant-design/icons';

const UserLink = React.memo(({ link, linkColor, icon, linkText }) => {
  return (
    <div
      style={{
        backgroundColor: linkColor,
        color: 'white',
        padding: 10,
        width: '50%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 10,
        borderRadius: 20,
        cursor: 'pointer'
      }}
      onClick={() => window.open(`${link}`, '_blank')}
    >
      <div
        style={{
          fontSize: 20,
          color: 'white',
          width: '50%',
          textAlign: 'right'
        }}
      >
        {icon}
      </div>
      <div style={{ textAlign: 'left', width: '50%' }}>{linkText}</div>
    </div>
  );
});

const ProfileBox = () => {
  const profileData = useContext(ProfileContext);

  return (
    <div className={classes.profile_box}>
      <Avatar
        size={100}
        icon={<UserOutlined />}
        src={profileData.profileImgURL}
      />
      <div style={{ textAlign: 'center' }}>
        <div style={{ fontSize: 'large', fontWeight: 'bold' }}>
          {profileData.firstName} {profileData.lastName}
        </div>
        <p style={{ color: '#00000056' }}>{profileData.email}</p>
      </div>
      {profileData?.links?.github ? (
        <UserLink
          icon={<GithubOutlined />}
          linkText="Github"
          linkColor="black"
          link={profileData.links.github}
        />
      ) : (
        ''
      )}
      {profileData?.links?.youtube ? (
        <UserLink
          icon={<YoutubeFilled />}
          linkText="YouTube"
          linkColor="red"
          link={profileData.links.youtube}
        />
      ) : (
        ''
      )}
      {profileData?.links?.linkedin ? (
        <UserLink
          icon={<LinkedinFilled />}
          linkText="LinkedIn"
          linkColor="#0a66c2"
          link={profileData.links.linkedin}
        />
      ) : (
        ''
      )}
    </div>
  );
};

export default React.memo(ProfileBox);
