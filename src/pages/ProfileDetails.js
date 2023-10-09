import React, { useEffect, useState } from 'react';
import { Col, Row } from 'antd';
import ProfileBox from '../components/ProfileBox';
import EditProfileForm from '../components/EditProfileForm';

const columnsStyling = {
  justifyContent: 'center',
  backgroundColor: '#fff',
  padding: 30,
  borderRadius: 10
};

const ProfileDetails = () => {
  const [showProfile, setShowProfile] = useState(window.innerWidth > 767);

  useEffect(() => {
    const eventListener = () => {
      setShowProfile(window.innerWidth > 767);
    };
    window.addEventListener('resize', eventListener);
    return () => {
      window.removeEventListener('resize', eventListener);
    };
  }, []);

  return (
    <Row style={{ width: '100%' }} justify="space-between">
      {showProfile ? (
        <Col
          xs={0}
          sm={0}
          md={11}
          lg={11}
          xl={11}
          style={{
            display: 'flex',
            justifyContent: 'center',
            ...columnsStyling
          }}
        >
          <ProfileBox />
        </Col>
      ) : (
        ''
      )}
      <Col xs={22} sm={22} md={11} lg={11} xl={11} style={columnsStyling}>
        <h1>Profile Details</h1>
        Add your profile info here.
        <EditProfileForm />
      </Col>
    </Row>
  );
};
export default ProfileDetails;
