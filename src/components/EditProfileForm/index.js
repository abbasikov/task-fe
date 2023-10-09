import React, { useCallback, useContext } from 'react';
import { Button, Form, Input, message } from 'antd';
import { ProfileContext } from '../../context/profileContext';
import { saveProfileInfo, uploadProfileImage } from '../../api';
import AddProfileImage from '../AddProfileImage';

const EditProfileForm = () => {
  const profileData = useContext(ProfileContext);

  const onUploadImage = useCallback(async (data) => {
    try {
      const imageURL = await uploadProfileImage(profileData.userId, data);
      profileData.setProfileImgURL(imageURL);
    } catch (e) {
      message.error(e.message);
    }
    return false;
  }, []);

  const onSubmitForm = async (data) => {
    try {
      const { firstName, lastName, email } = data;
      const { userId } = profileData;
      const userData = await saveProfileInfo({
        userId,
        firstName,
        lastName,
        email,
        profileImgURL: profileData.profileImgURL
      });
      profileData.setFirstName(userData.firstName);
      profileData.setLastName(userData.lastName);
      profileData.setEmail(userData.email);
      profileData.setUserId(userData.id);
      message.success('Data saved successfully!');
    } catch (e) {
      message.error(e.message);
    }
  };

  const { firstName, lastName, email } = profileData;

  return (
    <>
      <div
        style={{
          display: 'flex',
          width: '100%',
          justifyContent: 'center',
          marginTop: 20
        }}
      >
        <AddProfileImage
          imgURL={profileData.profileImgURL}
          onUploadImg={onUploadImage}
        />
      </div>
      <Form
        name="basic"
        labelCol={{
          span: 8
        }}
        wrapperCol={{
          span: 16
        }}
        style={{
          marginTop: 30
        }}
        initialValues={{ firstName, lastName, email }}
        autoComplete="off"
        onFinish={onSubmitForm}
      >
        <Form.Item
          label="First Name"
          name="firstName"
          rules={[
            {
              required: true,
              message: 'Please input your first name!'
            }
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Last Name"
          name="lastName"
          rules={[
            {
              required: true,
              message: 'Please input your last name!'
            }
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              message: 'Please input your email!'
            },
            {
              type: 'email',
              message: 'Please input a valid email!'
            }
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            span: 24
          }}
        >
          <Button type="primary" htmlType="submit" block>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default React.memo(EditProfileForm);
