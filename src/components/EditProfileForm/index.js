import React, { useContext } from 'react';
import { Button, Form, Input, message } from 'antd';
import { ProfileContext } from '../../context/profileContext';
import { saveProfileInfo } from '../../api';

const EditProfileForm = () => {
  const profileData = useContext(ProfileContext);

  const onSubmitForm = async (data) => {
    try {
      const { firstName, lastName, email } = data;
      const { userId } = profileData;
      const userData = await saveProfileInfo({
        userId,
        firstName,
        lastName,
        email
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

  return (
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
          offset: 8,
          span: 16
        }}
      >
        <Button type="primary" htmlType="submit" block>
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default React.memo(EditProfileForm);
