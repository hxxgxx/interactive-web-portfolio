import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-scroll";

// import HeaderLink from "./HeaderLink/HeaderLink";

import logo from "../../images/icons/port-log.png";

function Navigation() {
  return (
    <div className="nav-wrapper fixed-top navbar navbar-toggleable-sm navbar-expand-md">
      <div className="container">
        <Navbar className="w-100" collapseOnSelect expand="lg">
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Brand href="/">
            <img src={logo} alt="" style={{ paddingTop: "0.09rem" }} />
          </Navbar.Brand>

          {/* <Nav.Link className="nav-link" href="/" style={{ color: "gray" }}>
            home
          </Nav.Link> */}
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="nav-justified w-100 nav-fill">
              <Link
                className="nav-link"
                to="scroll-section-1"
                spy={true}
                smooth={true}
                style={{ color: "gray", cursor: "pointer" }}
              >
                about
              </Link>
              <Link
                className="nav-link"
                to="scroll-section-2"
                spy={true}
                smooth={true}
                style={{ color: "gray", cursor: "pointer" }}
              >
                develop
              </Link>
              <Link
                className="nav-link"
                to="scroll-section-3"
                spy={true}
                smooth={true}
                style={{ color: "gray", cursor: "pointer" }}
              >
                design
              </Link>
              {/* <Nav.Link
                  className="nav-link"
                  href="/about"
                  style={{ color: "gray" }}
                >
                  about
                </Nav.Link> */}
              {/* <Nav.Link
                  className="nav-link"
                  href="/develop"
                  style={{ color: "gray" }}
                >
                  develop
                </Nav.Link>
                <Nav.Link
                  className="nav-link"
                  href="/design"
                  style={{ color: "gray" }}
                >
                  design
                </Nav.Link> */}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </div>
  );
}

export default Navigation;
