import React from 'react';
import { Nav } from 'react-bootstrap';

const Sidebar = () => {
  return (
    <Nav className="col-md-12 d-none d-md-block bg-light sidebar">
      <div className="sidebar-sticky"></div>
      <Nav.Item>
        <Nav.Link href="#">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#">sort</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#">Subscriptions</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#">you</Nav.Link>
      </Nav.Item>
    </Nav>
  );
};

export default Sidebar;
