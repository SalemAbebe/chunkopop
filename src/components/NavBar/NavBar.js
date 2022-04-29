import React from "react";
import { Link } from "react-scroll";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import "./NavBar.css";

const NavBar = () => {
  return (
    <>
      <div className="navbar">
        <div className="navWrapper">
          <Link
            className="logo"
            activeClass="active"
            to="hero"
            spy={true}
            offset={-70}
            duration={500}
          >
            <img
              style={{ backgroundColor: "#234670" }}
              src={process.env.PUBLIC_URL + "Assets/logo.png"}
              alt="chunkopops"
            />
          </Link>

          <ul className="links">
            <Link
              activeClass="active"
              to="hero"
              spy={true}
              offset={-70}
              duration={500}
            >
              Home
            </Link>
            <Link
              activeClass="active"
              to="products"
              spy={true}
              offset={0}
              duration={500}
            >
              Products
            </Link>
            <Link
              activeClass="active"
              to="events"
              spy={true}
              offset={-70}
              duration={500}
            >
              Events
            </Link>
            <Link
              activeClass="active"
              to="contact"
              spy={true}
              offset={0}
              duration={500}
            >
              Contact
            </Link>
            <Link
              activeClass="active"
              to="signup"
              spy={true}
              offset={-70}
              duration={500}
            >
              Sign Up
            </Link>
          </ul>
          <div className="icons">
            <SearchOutlinedIcon fontSize="large" />
            <ShoppingCartOutlinedIcon fontSize="large" />
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
