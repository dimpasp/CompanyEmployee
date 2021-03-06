import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { BrowserRouter as Router } from "react-router-dom";



const CustomNavbar = () => {
  return (
    <Router>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="/Home">Project</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            <Nav.Link href="/EmployeeList">Employee Details</Nav.Link>
            <Nav.Link href="/EmployeeForm">Add Employee</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Router>
  );
};
export default CustomNavbar;