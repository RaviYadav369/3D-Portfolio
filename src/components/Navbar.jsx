import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks, experiences } from "../constant";
import { logo, menu, close } from "../assets";

function Navbar() {
  const [Active, setActive] = useState("");
  const [toggle, settoggle] = useState(false);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img className="w-9 h-9 object-contain" src={logo} alt="logo" />
          <p className="text-white text-[18px] font-bold cursor-pointer">
            Ravi Yadav
          </p>
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li
              className={`${
                Active === link.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] cursor-pointer font-medium`}
              key={link.id}
              onClick={() => setActive(link.title)}
            >
              <Link to={`${link.id}`}>{link.title}</Link>
            </li>
          ))}
        </ul>

        <div className="sm:hidden flex-1 flex justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => settoggle(!toggle)}
          />
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 min-w-[140px] my-2 z-10 rounded-xl `}
          >
            <ul className="list-none flex  flex-col items-start justify-end gap-4">
              {navLinks.map((link) => (
                <li
                  className={`${
                    Active === link.title ? "text-white" : "text-secondary"
                  } hover:text-white  cursor-pointer font-poppins font-medium text-[16px]`}
                  key={link.id}
                  onClick={() => {
                    settoggle(!toggle);
                    setActive(link.title);
                  }}
                >
                  <Link to={`${link.id}`}>{link.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
