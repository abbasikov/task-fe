import React from 'react';
import classes from './AppContent.module.css';
import { Row } from 'antd';
import { Outlet } from 'react-router-dom';

const AppContent = () => {
  return (
    <Row className={classes.app_content} justify="space-between">
      <Outlet />
    </Row>
  );
};

export default AppContent;
