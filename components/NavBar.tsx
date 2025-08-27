import React, { useState, useEffect, useRef } from "react";
import Home from "../pages/Home.tsx";
import Team from "../pages/Team.tsx";
import Publications from "../pages/Publications.tsx";
import Gallery from "../pages/Gallery.tsx";
import Merch from "../pages/Merch.tsx";
import Contact from "../pages/Contact.tsx";
import Error from "../pages/Error.tsx";
import gsap from "gsap";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink,
} from "react-router-dom";

const NavBar = () => {
  return (
    <Router>
      <nav className="flex justify-center text-3xl gap-4 mt-4 sticky">
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            isActive ? "text-[#e09e19] font-bold" : "text-white"
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/cal-jet-website/team"
          className={({ isActive }) =>
            isActive ? "text-[#e09e19] font-bold" : "text-white"
          }
        >
          Our Team
        </NavLink>

        <NavLink
          to="/cal-jet-website/publications"
          className={({ isActive }) =>
            isActive ? "text-[#e09e19] font-bold" : "text-white"
          }
        >
          Publications
        </NavLink>

        <NavLink
          to="/cal-jet-website/gallery"
          className={({ isActive }) =>
            isActive ? "text-[#e09e19] font-bold" : "text-white"
          }
        >
          Gallery
        </NavLink>

        <NavLink
          to="/cal-jet-website/merch"
          className={({ isActive }) =>
            isActive ? "text-[#e09e19] font-bold" : "text-white"
          }
        >
          Merch
        </NavLink>

        <NavLink
          to="/cal-jet-website/contact"
          className={({ isActive }) =>
            isActive ? "text-[#e09e19] font-bold" : "text-white"
          }
        >
          Contact Us
        </NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="cal-jet-website/team" element={<Team />}></Route>
        <Route
          path="cal-jet-webs  ite/publications"
          element={<Publications />}
        ></Route>
        <Route path="cal-jet-website/gallery" element={<Gallery />}></Route>
        <Route path="cal-jet-website/merch" element={<Merch />}></Route>
        <Route path="cal-jet-website/contact" element={<Contact />}></Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
    </Router>
  );
};

export default NavBar;
