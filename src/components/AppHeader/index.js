import React from 'react';
import { Row, Space } from 'antd';
import classes from './AppHeader.module.css';
import { NavLink } from 'react-router-dom';

const AppHeader = () => {
  return (
    <Row className={classes.app_header} justify="space-between" align="middle">
      <Space>
        <h1>Dabot</h1>
      </Space>
      <Space>
        <NavLink
          className={(navData) =>
            navData.isActive ? classes.active_route : classes.inactive_route
          }
          to="add-links"
        >
          Add Links
        </NavLink>
        <NavLink
          className={(navData) =>
            navData.isActive ? classes.active_route : classes.inactive_route
          }
          to="profile-details"
        >
          Profile Details
        </NavLink>
      </Space>
      <Space>
        <NavLink
          className={(navData) =>
            navData.isActive ? classes.active_route : classes.inactive_route
          }
          to="view-profile"
        >
          View Profile
        </NavLink>
      </Space>
    </Row>
  );
};

export default AppHeader;
