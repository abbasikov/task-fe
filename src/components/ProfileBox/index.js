import React, { useContext } from 'react';
import classes from './ProfileBox.module.css';
import { ProfileContext } from '../../context/profileContext';
import { Card } from 'antd';

const ProfileBox = () => {
  const profileData = useContext(ProfileContext);

  return (
    <div className={classes.profile_box}>
      <Card title="Profile Info" style={{ width: '100%' }}>
        <div>
          First Name:{' '}
          {profileData.firstName ? (
            <b>{profileData.firstName}</b>
          ) : (
            'Not provided!'
          )}
        </div>
        <div>
          Last Name:{' '}
          {profileData.lastName ? (
            <b>{profileData.lastName}</b>
          ) : (
            'Not provided!'
          )}
        </div>
        <div>
          Email:{' '}
          {profileData.lastName ? (
            <b>{profileData.lastName}</b>
          ) : (
            'Not provided!'
          )}
        </div>
      </Card>
      <Card title="Links" style={{ width: '100%' }}>
        {Object.keys(profileData.links).length === 0
          ? 'No link added yet!'
          : ''}
        {Object.entries(profileData.links).map((link, index) => (
          <div key={index}>
            {link[0]}: {link[1]}
          </div>
        ))}
      </Card>
    </div>
  );
};

export default React.memo(ProfileBox);
