import React from "react";

export default function Header() {

  return (
    <nav className="w-full h-16 md:h-20 flex items-center justify-between">
      {/* Navbar Start */}
      <div className="navbar bg-base-100 shadow-sm">
        <div className="flex flex-1">
          <img src="./logo.svg" alt="logo" className="w-10 h-11 cursor-pointer" />
          <a className="p-2 text-2xl cursor-pointer">Readdit</a>
        </div>

        {/* Search Input (Visible on md and larger) */}
        <input
          type="text"
          placeholder="Search"
          className="hidden md:block input input-bordered w-56"
        />

        {/* Search Icon (Visible below md) */}
        <button className="block md:hidden btn btn-ghost btn-circle p-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>

        {/* Dropdown Menu */}
        <div className="dropdown dropdown-end px-4">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow "
          >
            <li>
              <a className=" text-lg" >
                Profile
              </a>
            </li>
            <li>
              <a className=" text-lg">Settings</a>
            </li>
            <li>
              <a className=" text-lg">Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
