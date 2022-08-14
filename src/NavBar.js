import React from "react";

function NavBar() {
    function navigate(e) {
      e.preventDefault();
      window.history.pushState(null, "", e.target.href);
    }
  
    return (
      <nav>
        <a href="/Characters" onClick={navigate}>
          Characters
        </a>
        <a href="/Locations" onClick={navigate}>
          Locations
        </a>
        <a href="/Episodes" onClick={navigate}>
          Episodes
        </a>
      </nav>
    );
  }

  export default NavBar;