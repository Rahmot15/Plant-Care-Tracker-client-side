import React, { use } from "react";
import { CgProfile } from "react-icons/cg";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../Provider/AuthContext";

const Navbar = () => {
  const { user } = use(AuthContext);
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
            <CgProfile size={45} />
            // <div className="flex md:gap-5 items-center gap-2">
            //   <Link to={"/profile"}>
            //     <div className="dropdown dropdown-hover dropdown-end">
            //       <div
            //         tabIndex={0}
            //         role="button"
            //         className="btn btn-ghost btn-circle avatar"
            //       >
            //         <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            //           <img src={user?.photoURL || <CgProfile size={45} />} alt="Profile" />
            //         </div>
            //       </div>
            //       <ul
            //         tabIndex={0}
            //         className="menu dropdown-content z-[1] p-4 shadow bg-base-100 rounded-box w-52 space-y-1 text-center"
            //       >
            //         <li className="font-bold text-lg">
            //           {user?.displayName || "No Name"}
            //         </li>
            //         <li className="text-sm text-gray-500">
            //           {user?.email || "No Email"}
            //         </li>
            //         <li>
            //           <button
            //             to="/profile"
            //             className="btn btn-info btn-outline mt-2"
            //           >
            //             LogOut
            //           </button>
            //         </li>
            //       </ul>
            //     </div>
            //   </Link>
            // </div>
          ) : (
            <Link
              to={"/auth/login"}
              className="inline-flex items-center justify-center rounded-lg bg-green-600 md:py-3 py-2 md:px-5 px-3 font-dm text-base font-medium text-white shadow-xl shadow-green-400/30 transition-transform duration-200 ease-in-out hover:scale-[1.02]"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
