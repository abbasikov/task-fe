import React, { useContext } from 'react';
import { Button, Form, Input, message } from 'antd';
import {
  GithubOutlined,
  LinkedinOutlined,
  YoutubeOutlined
} from '@ant-design/icons';
import { ProfileContext } from '../../context/profileContext';
import { saveLinks } from '../../api';

const linkRegex =
  /^(http(s):\/\/.)[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)$/;

const linkRule = {
  pattern: linkRegex,
  message: 'Provide a valid link (starting with https://)!'
};

const LinkLabel = React.memo(({ icon, label, iconColor }) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
      <div style={{ fontSize: 20, color: iconColor }}>{icon}</div>
      {label}
    </div>
  );
});

const Index = () => {
  const profileData = useContext(ProfileContext);

  const onSubmitForm = async (data) => {
    try {
      profileData.setLinks({ ...data });
      const { userId } = profileData;
      const userData = await saveLinks({
        userId,
        links: data
      });
      profileData.setUserId(userData.id);
      profileData.setLinks(userData.links);
      message.success('Data saved successfully!');
    } catch (e) {
      message.error(e.message);
    }
  };

  const { links } = profileData;

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
      initialValues={links}
      autoComplete="off"
      onFinish={onSubmitForm}
    >
      <Form.Item
        label={<LinkLabel icon={<GithubOutlined />} label="Github" />}
        name="github"
        rules={[linkRule]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label={
          <LinkLabel
            icon={<YoutubeOutlined />}
            label="YouTube"
            iconColor="red"
          />
        }
        rules={[linkRule]}
        name="youtube"
      >
        <Input />
      </Form.Item>
      <Form.Item
        label={
          <LinkLabel
            icon={<LinkedinOutlined />}
            label="LinkedIn"
            iconColor="#0a66c2"
          />
        }
        name="linkedin"
        rules={[linkRule]}
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
  );
};

export default Index;
