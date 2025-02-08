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
import { NavLink, useNavigate } from "react-router-dom";
import "../assests/header.css";
import SelectLanguage from "./SelectLanguage";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { persistor } from "../redux/store";
import { FaUser } from "react-icons/fa";
import LogoutModal from "./modals/LogoutModal";
import { Paper } from "@mui/material";
const Header = () => {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [navbarExpanded, setNavbarExpanded] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const { t } = useTranslation();
  const role = useSelector((state) => state.user.user?.role || "guest");
  const isLoggedIn = useSelector((state) => state.user?.isLoggedIn || false);
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  // GSAP animation
  useEffect(() => {
    gsap.from(".me-auto", {
      duration: 2,
      delay: 0.8,
      opacity: 0,
      ease: Expo.easeInOut,
    });
  }, []);
  console.log(isLoggedIn);
  // Determine background color based on scroll position
  const handleLogout = () => {
    persistor.purge(); // Clears persisted Redux store
    navigate("/login");
  };
  const handleShow = (id) => {
    setShow(true);
  };
  const headerBackgroundColor = scrollPosition > 50 ? "#3333339d" : "#3b3b3b99";
  const headerBackdropFilter = scrollPosition > 50 ? "blur(10px)" : "none";
  return (
    <>
      <header
        style={{
          backgroundColor: headerBackgroundColor,
          transition: "background-color 0.3s ease",
          backdropFilter: headerBackdropFilter, // Add this line
          WebkitBackdropFilter: headerBackdropFilter, // Ensure compatibility with WebKit browsers
          transition: "background-color 0.3s ease, backdrop-filter 0.3s ease", // Smooth t
        }}
      >
        <img
          src={logo}
          alt="logo"
          style={{ cursor: " pointer " }}
          className="logoHeader"
          onClick={() => {
            navigate("/");
          }}
        />
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
                {role === "admin" ? (
                  <Nav.Link
                    as={NavLink}
                    to="/dashboard"
                    className={hoveredItem === "dashboard" ? "glow-effect" : ""}
                    onMouseEnter={() => setHoveredItem("dashboard")}
                    onMouseLeave={() => setHoveredItem(null)}
                  >
                    {t("header.dashboard")}
                  </Nav.Link>
                ) : (
                  <></>
                )}

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
                  className="icon-glow"
                  onClick={() => {
                    if (isLoggedIn) {
                      handleShow();
                    } else {
                      navigate("/login"); // Use an absolute path!
                    }
                  }}
                  onMouseEnter={() => setHoveredItem("login")}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  {!isLoggedIn ? (
                    <FontAwesomeIcon icon={faRightToBracket} />
                  ) : (
                    <FaUser />
                  )}
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
        </Navbar>{" "}
      </header>
      <LogoutModal
        show={show}
        setShow={setShow}
        handleLogout={() => handleLogout()}
      />
    </>
  );
};

export default Header;
