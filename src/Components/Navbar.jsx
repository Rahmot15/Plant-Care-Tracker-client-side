import React, { use, useEffect, useState } from "react";
import { Link, NavLink } from "react-router";
import { MdDarkMode, MdOutlineDarkMode } from "react-icons/md";
import { AuthContext } from "../Provider/AuthContext";
import { auth } from "../firebase/firebase.config";
import { Tooltip } from "react-tooltip";

const Navbar = () => {
  const [theme, setTheme] = useState("black");
  const { user, logOut } = use(AuthContext);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const handleToggle = () => {
    const newTheme = theme === "light" ? "black" : "light";
    setTheme(newTheme);
  };

  const handleLogout = () => {
    logOut(auth)
      .then((result) => {
        console.log(result);
      })
      .then((error) => {
        console.log(error);
      });
  };

  const link = (
    <>
      <li className="text-xl">
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            isActive ? "text-blue-500 underline" : ""
          }
        >
          Home
        </NavLink>
      </li>

      <li className="text-xl">
        <NavLink
          to={"/allPlants"}
          className={({ isActive }) =>
            isActive ? "text-blue-500 underline" : ""
          }
        >
          All Plants
        </NavLink>
      </li>

      <li className="text-xl">
        <NavLink
          to={"/myPlants"}
          className={({ isActive }) =>
            isActive ? "text-blue-500 underline" : ""
          }
        >
          My Plants
        </NavLink>
      </li>
      <li className="text-xl">
        <NavLink
          to={"/addPlants"}
          className={({ isActive }) =>
            isActive ? "text-blue-500 underline" : ""
          }
        >
          Add Plants
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="">
      <div className="navbar md:p-0 md:w-11/12 mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow "
            >
              {link}
            </ul>
          </div>

          <Link to={"/"} className="flex items-center">
            <img className="md:w-14 w-8" src="/logo.png" alt="" />
            <h1 className="md:text-4xl text-2xl bg-gradient-to-r from-emerald-500 to-green-800 bg-clip-text  text-transparent font-bold">
              Plants
            </h1>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{link}</ul>
        </div>
        <div className="navbar-end space-x-3">
          {user ? (
            <div>
              <div id="avatarTooltip" className="avatar cursor-pointer">
                <div className="ring-primary ring-offset-base-100 w-11 rounded-full ring-2 ring-offset-2">
                  <img src={user.photoURL} alt="User" />
                </div>
              </div>

              {/*  */}
              <Tooltip
                anchorId="avatarTooltip"
                place="bottom"
                clickable
                className="!max-w-xs !rounded-lg !p-4 !bg-white !text-gray-800 !shadow-lg"
              >
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold">{user.displayName}</h3>
                  <p className="text-lg text-gray-600">{user.email}</p>
                  <button
                    onClick={handleLogout}
                    className="inline-flex w-full items-center justify-center rounded-lg bg-green-600 md:py-2 py-2 md:px-5 px-3 font-dm text-base font-medium text-white shadow-xl shadow-green-400/30 transition-transform duration-200 ease-in-out hover:scale-[1.02]"
                  >
                    logOut
                  </button>
                </div>
              </Tooltip>
              {/*  */}
            </div>
          ) : (
            <Link
              to={"/auth/login"}
              className="inline-flex items-center justify-center rounded-lg bg-green-600 md:py-3 py-2 md:px-5 px-3 font-dm text-base font-medium text-white shadow-xl shadow-green-400/30 transition-transform duration-200 ease-in-out hover:scale-[1.02]"
            >
              Login
            </Link>
          )}

          {/* Theme change */}
          <div>
            <button onClick={handleToggle}>
              {theme === "black" ? (
                <MdOutlineDarkMode size={45} className="text-black" />
              ) : (
                <MdDarkMode size={45} className="text-white" />
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
