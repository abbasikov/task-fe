import React, { useContext } from 'react';
import { Button, Col, message, Row } from 'antd';
import ProfileBox from '../components/ProfileBox';
import { LinkOutlined } from '@ant-design/icons';
import { ProfileContext } from '../context/profileContext';

const columnsStyling = {
  justifyContent: 'center',
  backgroundColor: '#fff',
  padding: 30,
  borderRadius: 10
};

const ViewProfile = () => {
  const profileData = useContext(ProfileContext);

  const onShareProfile = async () => {
    if (!profileData.firstName && !profileData.lastName && !profileData.email) {
      await message.error('Profile info not submitted yet!');
      return;
    }
    await message.success('hello');
  };

  return (
    <>
      <Row style={{ width: '100%', marginBottom: 20 }} justify="center">
        <Button icon={<LinkOutlined />} onClick={onShareProfile}>
          Get Profile Link
        </Button>
      </Row>
      <Row style={{ width: '100%' }} justify="center">
        <Col xs={22} sm={22} md={18} lg={11} xl={11} style={columnsStyling}>
          <ProfileBox />
        </Col>
      </Row>
    </>
  );
};
export default ViewProfile;
