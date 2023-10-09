import React, { useContext } from 'react';
import { Button, Form, Input, message, Space } from 'antd';
import { MinusCircleOutlined } from '@ant-design/icons';
import { ProfileContext } from '../../context/profileContext';
import { saveLinks } from '../../api';

const Index = () => {
  const profileData = useContext(ProfileContext);

  const onSubmitForm = async (data) => {
    try {
      const newLinks = { ...profileData.links };
      if (!data.links) {
        throw new Error('Add a link to save!');
      }
      data.links.forEach((link) => {
        newLinks[link.siteName] = link.siteLink;
      });
      const { userId } = profileData;
      const userData = await saveLinks({
        userId,
        links: newLinks
      });
      profileData.setUserId(userData.id);
      profileData.setLinks(userData.links);
      message.success('Data saved successfully!');
    } catch (e) {
      message.error(e.message);
    }
  };

  return (
    <Form
      name="dynamic_form_nest_item"
      onFinish={onSubmitForm}
      style={{
        marginTop: 30
      }}
      autoComplete="off"
    >
      <Form.List name="links">
        {(fields, { add, remove }) => (
          <>
            <Form.Item>
              <Button type="dashed" onClick={() => add()} block>
                Add/Edit Link
              </Button>
            </Form.Item>
            {fields.map(({ key, name, ...restField }) => (
              <Space
                key={key}
                style={{
                  display: 'flex',
                  marginBottom: 8
                }}
                align="baseline"
              >
                <Form.Item
                  {...restField}
                  name={[name, 'siteName']}
                  rules={[
                    {
                      required: true,
                      message: 'Missing website name'
                    }
                  ]}
                >
                  <Input placeholder="Website Name" />
                </Form.Item>
                <Form.Item
                  {...restField}
                  name={[name, 'siteLink']}
                  rules={[
                    {
                      required: true,
                      message: 'Missing website link'
                    }
                  ]}
                >
                  <Input placeholder="Website Link" />
                </Form.Item>
                <MinusCircleOutlined onClick={() => remove(name)} />
              </Space>
            ))}
          </>
        )}
      </Form.List>
      <Form.Item>
        <Button type="primary" htmlType="submit" block>
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Index;
