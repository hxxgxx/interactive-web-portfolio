import React, { createRef } from "react";
// import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavButton from "./NavButton";
import ScrollSpy from "react-scrollspy-navigation";

// import HeaderLink from "./HeaderLink/HeaderLink";

import logo from "../../images/icons/logo-sm.png";

function Navigation() {
  return (
    <div className="nav-wrapper fixed-top navbar navbar-toggleable-sm navbar-expand-md">
      <div className="container">
        <Navbar className="w-100" collapseOnSelect expand="lg">
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Brand href="/">
            <img src={logo} alt="" />
          </Navbar.Brand>

          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="nav-justified w-100 nav-fill">
              {/* <Nav.Link
                className="nav-link"
                href="/about"
                style={{ color: "black" }}
              >
                about
              </Nav.Link>
              <Nav.Link
                className="nav-link"
                href="/develop"
                style={{ color: "black" }}
              >
                develop
              </Nav.Link>
              <Nav.Link
                className="nav-link"
                href="/design"
                style={{ color: "black" }}
              >
                design
              </Nav.Link> */}
              <ScrollSpy>
                <NavButton
                  herf="#scroll-section-1"
                  text="about"
                  ref={createRef()}
                />
                <NavButton
                  herf="#scroll-section-2"
                  text="develop"
                  ref={createRef()}
                />
                <NavButton
                  herf="#scroll-section-3"
                  text="design"
                  ref={createRef()}
                />
              </ScrollSpy>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </div>
  );
}

export default Navigation;
