import React, { useContext } from 'react';
import { Button, Form, Input } from 'antd';
import { ProfileContext } from '../../context/profileContext';

const EditProfileForm = () => {
  const profileData = useContext(ProfileContext);

  const onSubmitForm = (data) => {
    const { firstName, lastName, email } = data;
    profileData.setEmail(email);
    profileData.setFirstName(firstName);
    profileData.setLastName(lastName);
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
