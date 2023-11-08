import React from "react";
import logo from "../../../Images/logo.png";
import { Link } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import searchBtn from "../../../Images/icon/search.png";
import cartIcon from "../../../Images/icon/cart.png";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="d-flex justify-content-around mt-4 header">
      <div>
        <img src={logo} alt="" />
      </div>
      <div className="text-white">
        <Link>Home</Link>
        <Link>Drones</Link>
        <Link>Blog</Link>
        <Link>Contact</Link>
      </div>
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
        <Button className="ms-2"><img className="src-btn" src={cartIcon} alt="" /></Button>
      </div>
    </div>
  );
};

export default NavBar;
