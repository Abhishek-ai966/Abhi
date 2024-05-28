import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import VideoList from './components/VideoList';

const App = () => {
  return (
    <Container fluid>
      <Header />
      <Row>
        <Col md={2}><Sidebar /></Col>
        <Col md={10}><VideoList /></Col>
      </Row>
    </Container>
  );
};

export default App;
