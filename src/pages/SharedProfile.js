import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { message } from 'antd';
import { ProfileContext } from '../context/profileContext';
import { getUserData } from '../api';
import ProfileBox from '../components/ProfileBox';

const SharedProfile = () => {
  const [loading, setLoading] = useState(true);
  const profileData = useContext(ProfileContext);

  const { token } = useParams();
  const navigate = useNavigate();

  const loadUserData = async (token) => {
    setLoading(true);
    try {
      const userData = await getUserData(token);
      if (!userData) {
        return navigate('/page-not-found', { replace: true });
      }
      profileData.setLinks(userData.links);
      profileData.setFirstName(userData.firstName);
      profileData.setLastName(userData.lastName);
      profileData.setEmail(userData.email);
    } catch (e) {
      message.error(e.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadUserData(token).then(() => {});
  }, [token]);
  return loading ? (
    <div>Loading...</div>
  ) : (
    <div
      style={{
        display: 'flex',
        backgroundColor: 'aliceblue',
        padding: 50,
        minHeight: '100vh',
        flexDirection: 'column',
        justifyContent: 'start',
        alignItems: 'center'
      }}
    >
      <h1>{profileData.firstName}'s Shared Profile</h1>
      <ProfileBox />
    </div>
  );
};

export default SharedProfile;
