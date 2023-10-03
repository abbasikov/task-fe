import React from 'react';
import { Col, Row } from 'antd';
import AppHeader from '../AppHeader';
import AppContent from '../AppContent';

const AppLayout = () => {
  return (
    <Row justify="center" style={{ marginTop: 20 }}>
      <Col span={22}>
        <AppHeader />
        <AppContent />
      </Col>
    </Row>
  );
};

export default AppLayout;
