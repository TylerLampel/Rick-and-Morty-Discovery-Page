import React from "react";
import { NavLink } from "react-router-dom";

const linkStyles = {
    display: "inline-block",
    width: "80px",
    padding: "20px",
    margin: "0 10px 6px",
    background: "limegreen",
    textDecoration: "none",
    color: "white",
  };

function NavBar() {

    return (

        <div>
            <NavLink
                to="/Characters"
                exact
                style={linkStyles}
                activeStyle={{
                    fontWeight: "bold",
                    background: "darkgreen",
                }}
            >
                Characters
            </NavLink>
            <NavLink
                to="/Locations"
                exact
                style={linkStyles}
                activeStyle={{
                    fontWeight: "bold",
                    background: "darkgreen",
                }}
            >
                Locations
            </NavLink>
            <NavLink
            to="/Episodes"
            exact
            style={linkStyles}
            activeStyle={{
                fontWeight: "bold",
                background: "darkgreen",
            }}
            >
                Episodes
            </NavLink>
        </div>
    );
  }

  export default NavBar;