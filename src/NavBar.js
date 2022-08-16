import React from "react";
import { NavLink } from "react-router-dom";

const linkStyles = {
    display: "inline-block",
    width: "80px",
    padding: "12px",
    margin: "0 6px 6px",
    background: "blue",
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
                    background: "darkblue",
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
                    background: "darkblue",
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
                background: "darkblue",
            }}
            >
                Episodes
            </NavLink>
        </div>
    );
  }

  export default NavBar;