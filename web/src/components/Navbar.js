import "../styling/Navbar.css";
import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from "reactstrap";

const NavbarComponent = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="navContainer">
      <Navbar light expand="md">
        <NavbarBrand href="/">Lauryn Hudson</NavbarBrand>
        <Nav>
          <NavItem>
            <NavbarText>Software Engineer</NavbarText>
          </NavItem>
        </Nav>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ms-auto">
            <NavItem>
              <NavLink href="/blog" style={{ color: "black" }}>
                Blog
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/about" style={{ color: "black" }}>
                About
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/resume" style={{ color: "black" }}>
                Resume
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavbarComponent;
