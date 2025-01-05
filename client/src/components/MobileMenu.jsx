import React from "react";

const MobileMenu = ({ isOpen, setIsOpen, children }) => {
  return (
    <div
      style={{
        display: isOpen ? "block" : "none",
        position: "absolute",
        top: "50px",
        left: "0",
        right: "0",
        backgroundColor: "#fff",
        zIndex: "1000",
        padding: "1rem",
      }}
    >
      {children}
    </div>
  );
};

export default MobileMenu;
