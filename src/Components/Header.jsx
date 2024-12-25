import React, { useState, useEffect } from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faRightToBracket,
} from "@fortawesome/free-solid-svg-icons";
import gsap from "gsap";
import { Expo } from "gsap";
import logo from "../assests/logo.png";
import { NavLink } from "react-router-dom";
import "../assests/header.css";
import SelectLanguage from "./SelectLanguage";
import { useTranslation } from "react-i18next";
const Header = () => {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [navbarExpanded, setNavbarExpanded] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const { t } = useTranslation();
  // Handle scroll to change header background color
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // GSAP animation
  useEffect(() => {
    gsap.from(".me-auto", {
      duration: 2,
      delay: 0.8,
      opacity: 0,
      ease: Expo.easeInOut,
    });
  }, []);

  // Determine background color based on scroll position
  const headerBackgroundColor = scrollPosition > 50 ? "#3333339d" : "#3b3b3b99";
  const headerBackdropFilter = scrollPosition > 50 ? "blur(10px)" : "none";
  return (
    <header
      style={{
        backgroundColor: headerBackgroundColor,
        transition: "background-color 0.3s ease",
        backdropFilter: headerBackdropFilter, // Add this line
        WebkitBackdropFilter: headerBackdropFilter, // Ensure compatibility with WebKit browsers
        transition: "background-color 0.3s ease, backdrop-filter 0.3s ease", // Smooth t
      }}
    >
      <img src={logo} alt="logo" className="logoHeader" />
      <Navbar
        expand="lg"
        expanded={navbarExpanded}
        onToggle={() => setNavbarExpanded(!navbarExpanded)}
      >
        <Container>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className={hoveredItem === "navbarToggle" ? "glow-effect" : ""}
            onMouseEnter={() => setHoveredItem("navbarToggle")}
            onMouseLeave={() => setHoveredItem(null)}
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link
                as={NavLink}
                to="/"
                className={hoveredItem === "home" ? "glow-effect" : ""}
                onMouseEnter={() => setHoveredItem("home")}
                onMouseLeave={() => setHoveredItem(null)}
              >
                {t("header.home")}
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                to="/dashboard"
                className={hoveredItem === "dashboard" ? "glow-effect" : ""}
                onMouseEnter={() => setHoveredItem("dashboard")}
                onMouseLeave={() => setHoveredItem(null)}
              >
                {t("header.dashboard")}
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                to="/contact-us"
                className={hoveredItem === "contact" ? "glow-effect" : ""}
                onMouseEnter={() => setHoveredItem("contact")}
                onMouseLeave={() => setHoveredItem(null)}
              >
                {t("header.contactUs")}
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                to="/cart"
                className="icon-glow"
                onMouseEnter={() => setHoveredItem("cart")}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <FontAwesomeIcon icon={faCartShopping} />
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                to="/login"
                className="icon-glow"
                onMouseEnter={() => setHoveredItem("login")}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <FontAwesomeIcon icon={faRightToBracket} />
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                className="icon-glow"
                onMouseEnter={() => setHoveredItem("login")}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <SelectLanguage />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
