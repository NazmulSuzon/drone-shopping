import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

import logo from "../../../Images/logo.png";
import { Button, Form } from "react-bootstrap";
import searchBtn from "../../../Images/icon/search.png";
import cartIcon from "../../../Images/icon/cart.png";
import "./NavBar.css";

const Bar = () => {
  return (
    <div className="header">
      <Navbar collapseOnSelect expand="lg">
        <Container>
          <img src={logo} alt="" />
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto ms-4 text-light">
            <Nav.Link href="#home" className="text-light fs-5">Home</Nav.Link>
            <Nav.Link href="#drones" className="text-light fs-5">Drones</Nav.Link>
              <Nav.Link href="#blogs" className="text-light fs-5">Blogs</Nav.Link>
            <Nav.Link href="#contact" className="text-light fs-5">Contact</Nav.Link>
            </Nav>
            <Nav>
              <div className="d-flex">
                <div>
                  <Form className="d-flex">
                    <Form.Control
                      type="search"
                      placeholder="Search"
                      className=""
                      aria-label="Search"
                    />
                    <Button variant="outline-success" className="border-0">
                      <img className="src-btn" src={searchBtn} alt="" />
                    </Button>
                  </Form>
                </div>
                <Button className="ms-2">
                  <img className="src-btn" src={cartIcon} alt="" />
                </Button>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Bar;
