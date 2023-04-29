import { Link } from "react-router-dom";
import React from "react";
import { FaBars } from "react-icons/fa";
import "./Navbar.css"

function Nav() {
  return (
    <nav className="Top">
      <NavLink to="/" className="nav-link">Home</NavLink>
      <Bars />
      <NavMenu className="nav-menu">
        <NavLink to="/about" className="nav-link">About</NavLink>
        <NavLink to="/contact" className="nav-link">Contact</NavLink>
      </NavMenu>
      <NavBtn className="nav-btn">
        <NavBtnLink to="/login" className="nav-btn-link">Log In</NavBtnLink>
      </NavBtn>
    </nav>
  );
}

function Bars() {
  return (
    <FaBars className="bars-icon" />
  );
}

function NavLink(props) {
  const { to, children } = props;
  const active = window.location.pathname === to;
  return (
    <Link to={to} className={`nav-link ${active ? 'active' : ''}`}>{children}</Link>
  );
}

function NavMenu(props) {
  return (
    <div className="nav-menu" />
  );
}

function NavBtn(props) {
  return (
    <nav className="nav-btn" />
  );
}

function NavBtnLink(props) {
  const { to, children } = props;
  return (
    <Link to={to} className="nav-btn-link">{children}</Link>
  );
}

export default Nav;