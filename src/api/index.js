import Axios from './axios';
import {
  GET_TOKEN,
  GET_USER_DATA,
  SAVE_LINKS,
  SAVE_PROFILE
} from './endpoints';

export const saveProfileInfo = async ({
  userId,
  firstName,
  lastName,
  email
}) => {
  try {
    const requestData = {
      firstName,
      lastName,
      email
    };
    if (userId) requestData.userId = userId;
    const response = await Axios.post(SAVE_PROFILE, requestData);
    return response.data.data;
  } catch (e) {
    throw new Error('Some error occurred!');
  }
};

export const saveLinks = async ({ userId, links }) => {
  try {
    const requestData = {
      links
    };
    if (userId) requestData.userId = userId;
    const response = await Axios.post(SAVE_LINKS, requestData);
    return response.data.data;
  } catch (e) {
    throw new Error('Some error occurred!');
  }
};

export const getShareableToken = async (userId) => {
  try {
    const response = await Axios.get(GET_TOKEN, { params: { userId } });
    return response.data.data.token;
  } catch (e) {
    throw new Error('Some error occurred!');
  }
};

export const getUserData = async (token) => {
  try {
    const response = await Axios.get(GET_USER_DATA, { params: { token } });
    return response.data.data.user;
  } catch (e) {
    throw new Error('Some error occurred!');
  }
};
