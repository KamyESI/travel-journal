import React from "react";

function Header() {
  return (
    <header>
      <nav className="header-nav">
        <img
          src="../src/assets/images/globe.png"
          alt="globe"
          width="20px"
          height="20px"
        />
        <h1>my travel journal</h1>
      </nav>
    </header>
  );
}

export default Header;
