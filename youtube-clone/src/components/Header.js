import React from 'react';
import { Navbar, Form, FormControl, Button, Nav, Image } from 'react-bootstrap';
import { FaMicrophone, FaVideo, FaTh, FaBell, FaHamburger } from 'react-icons/fa';
import userAvatar from '../assets/avatar.jpg'; // Adjust based on your actual file location
import '../index.css';

const Header = () => {
  return (
    <Navbar bg="light" variant="light" expand="lg" className="px-3">
      <button style={{backgroundColor:'transparent', border:'none', outline:'none', marginRight:'10px'}}><img style={{height:"30px"}} src="/menu.png" alt="" /></button>
      <Navbar.Brand href="#home">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg" // YouTube logo
          height="30"
          className="d-inline-block align-top"
          alt="YouTube Logo"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Form inline className="mx-auto">
          <div style={{display:'flex', border:'1px solid black', borderRadius:'10px', overflow:'hidden'}}>
            <FormControl
              type="text"
              placeholder="Search"
              className="mr-sm-2"
              style={{ width: '500px', outline:'none', border:'none' }} // Adjust width as per your design
            />
            <Button id='searchBTN' variant="outline-dark"><img style={{height:'20px', width:'20px'}} id='searchIcon' src="/search.png" alt="search-icon" /></Button>
          </div>
        </Form>
        <Nav className="ml-auto">
          <Nav.Link href="#voice-search">
            <FaMicrophone size={20} color="black" />
          </Nav.Link>
          <Nav.Link href="#upload">
            <FaVideo size={20} color="black" />
          </Nav.Link>
          <Nav.Link href="#apps">
            <FaTh size={20} color="black" />
          </Nav.Link>
          <Nav.Link href="#notifications">
            <FaBell size={20} color="black" />
          </Nav.Link>
          <Nav.Link href="#account">
            <Image src={userAvatar} roundedCircle height="30" alt="User Avatar" />
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
