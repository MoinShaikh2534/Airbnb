import React, { useState } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import Button from "./Button";
import { MenuRounded } from "@mui/icons-material";
import MobileMenu from "./MobileMenu"; // Corrected import path
import LogoImg from "../utils/Images/Logo.svg";

const Nav = styled.div`
  padding: 15px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
`;

const Navlogo = styled.div`
  display: flex;
  align-items: center;

  img {
    hight: 40px;
  }
`;

const NavbarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const NavItems = styled.div`
  display: flex;
  align-items: center;
  margin-right: 100px;
  gap: 20px;
  
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    font-size: 1.8rem;
    cursor: pointer;
    color: #333;
  }
`;




const Navbar = ({setOpenAuth,OpenAuth}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Nav>
      <NavbarContainer>
        <MobileIcon onClick={() => setIsOpen(!isOpen)}>
          <MenuRounded style={{ color: "inherit" }} />
        </MobileIcon>
        <Navlogo>
          <img src={LogoImg} alt="Logo" />
        </Navlogo>
  {isOpen && (
    <div
      style={{
        display: "flex",
        flexDirection: "column", // Stack items vertically
        gap: "15px", // Space between each menu item
        alignItems: "center", // Center items horizontally
        position: "absolute",
        top: "60px",
        left: "0",
        right: "0",
        backgroundColor: "white",
        padding: "20px 0",
        zIndex: 100,
      }}
    >
      <NavLink
        to="/"
        onClick={() => setIsOpen(false)}
        style={{
          textDecoration: "none",
          color: "#333",
          fontSize: "18px",
          fontWeight: "500",
        }}
      >
        Home
      </NavLink>
      <NavLink
        to="/properties"
        onClick={() => setIsOpen(false)}
        style={{
          textDecoration: "none",
          color: "#333",
          fontSize: "18px",
          fontWeight: "500",
        }}
      >
        Places to Stay
      </NavLink>
      <NavLink
        to="/blogs"
        onClick={() => setIsOpen(false)}
        style={{
          textDecoration: "none",
          color: "#333",
          fontSize: "18px",
          fontWeight: "500",
        }}
      >
        Blogs
      </NavLink>
      <NavLink
        to="/contact"
        onClick={() => setIsOpen(false)}
        style={{
          textDecoration: "none",
          color: "#333",
          fontSize: "18px",
          fontWeight: "500",
        }}
      >
        Contact
      </NavLink>
      <div
        style={{
          display: "flex",
          flexDirection: "column", // Buttons stacked vertically
          gap: "15px",
          alignItems: "center",
        }}
      >
        <Button type="secondary" text="Sign In" small 
        onClick={() => setOpenAuth(!OpenAuth)} />
        <Button text="Sign Up" small 
        onClick={() => setOpenAuth(!OpenAuth)} />
      </div>
    </div>
  )}
        <NavItems>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/properties">Places to stay</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <NavLink to="/blogs">Blogs</NavLink>
        </NavItems>
      </NavbarContainer>

      <ButtonContainer>
        <Button type="Secondary" text="Sign" small 
         onClick={() => setOpenAuth(!OpenAuth)}
        />
      </ButtonContainer>
    </Nav>
  );
};

export default Navbar;
