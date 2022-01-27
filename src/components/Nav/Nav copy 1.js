import React, { createRef, useEffect, useRef } from "react";
// import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavButton from "./NavButton";
import ScrollSpy from "react-scrollspy-navigation";
import styled from "styled-components";

// import HeaderLink from "./HeaderLink/HeaderLink";

import logo from "../../images/icons/logo-sm.png";

function Navigation() {
  const NavButton = styled.button`
    color: #314d4a;
    font-weight: lighter;
    border: none;
    border-bottom: 3px solid transparent;
    cursor: pointer;
    outline: none;
    background: none;
  `;

  const scrollTo = (el) => {
    el.scrollToView({
      behavior: "smooth",
      block: "start",
    });
  };

  useEffect(() => {
    const handleScroll = () => {};

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const developRef = useRef(null);
  const designRef = useRef(null);

  const sectionRefs = [
    { section: "scroll-section-0", ref: homeRef },
    { section: "scroll-section-1", ref: aboutRef },
    { section: "scroll-section-2", ref: developRef },
    { section: "scroll-section-3", ref: designRef },
  ];

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
              <NavButton
                type="button"
                className="nav-link"
                onClick={() => {
                  scrollTo(homeRef.current);
                }}
              >
                home
              </NavButton>
              <NavButton
                type="button"
                className="nav-link"
                onClick={() => {
                  scrollTo(aboutRef.current);
                }}
              >
                about
              </NavButton>
              <NavButton
                type="button"
                className="nav-link"
                onClick={() => {
                  scrollTo(developRef.current);
                }}
              >
                develop
              </NavButton>
              <NavButton
                type="button"
                className="nav-link"
                onClick={() => {
                  scrollTo(designRef.current);
                }}
              >
                design
              </NavButton>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </div>
  );
}

export default Navigation;
