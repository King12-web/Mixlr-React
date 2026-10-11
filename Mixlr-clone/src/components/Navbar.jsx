import { useState } from "react";

function Navbar() {
  // menuOpen is true when the mobile menu is showing
  const [menuOpen, setMenuOpen] = useState(false);

  function toggleMenu() {
    setMenuOpen(!menuOpen);
  }

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header>
      <nav>
        <img src="/media/Screenshot_29-7-2026_183212_mixlr.com.jpeg" alt="Mixlr logo" />

        <button className="menu-toggle" onClick={toggleMenu}>
          {menuOpen ? (
            <i className="fa-solid fa-xmark"></i>
          ) : (
            <i className="fa-solid fa-bars"></i>
          )}
        </button>

        <ul className={menuOpen ? "active" : ""}>
          <li className="drop-2">
            <a href="#" onClick={closeMenu}>Solution</a>
            <div className="dropdown-2">
              <a href="#" onClick={closeMenu}>Broadcast Without the Tech Hassle</a>
              <a href="#" onClick={closeMenu}>Create Professional-Quality Audio Events</a>
              <a href="#" onClick={closeMenu}>Engage Your Audience in Real Time</a>
              <a href="#" onClick={closeMenu}>Grow Your Brand</a>
              <a href="#" onClick={closeMenu}>One Platform for Everything Audio</a>
              <a href="#" onClick={closeMenu}>Reach a Global Audience</a>
            </div>
          </li>
          <li className="drop-1">
            <a href="#" onClick={closeMenu}>Use cases</a>
            <div className="dropdown-1">
              <a href="#" onClick={closeMenu}>Sports</a>
              <a href="#" onClick={closeMenu}>Live events</a>
              <a href="#" onClick={closeMenu}>Faith & Worship</a>
              <a href="#" onClick={closeMenu}>Podcasting</a>
              <a href="#" onClick={closeMenu}>Education</a>
              <a href="#" onClick={closeMenu}>Radio</a>
              <a href="#" onClick={closeMenu}>Conferences</a>
            </div>
          </li>
          <li><a href="#" onClick={closeMenu}>Customers</a></li>
          <li><a href="#" onClick={closeMenu}>Listen</a></li>
          <li><a href="#" onClick={closeMenu}>Pricing</a></li>
          <li><a href="#" onClick={closeMenu}>Login</a></li>
          <li>
            <button className="btn-1">
              <i className="fa-solid fa-plus"></i> Get started free
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;