import React from "react";
import '../styles/header.css';

const Header = () => {
  return (
    <div className="header">
      <h1>SRM Valliammai Engineering College</h1>
      <h4>Chengalpattu District, Tamil Nadu, India.</h4>
      <div className="container nav_bar"
        data-aos="fade-down"
        data-aos-duration="1000"
      >
        <div className="nav_header">
          <a href="#about">About Us</a>
          <a href="#admissions">Admissions</a>
          <a href="#academics" className="nav_items">Academics</a>
          <a href="#hostels">Hostels</a>
          <a href="#contact-us">Contact</a>
        </div>
      </div>
    </div>
  );
}
export default Header;