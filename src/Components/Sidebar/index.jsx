import React from "react";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="bg-[#009784] h-full">
      <div className="py-2">
        <h3 className="text-base font-bold px-3 text-white">Simple Admin</h3>
      </div>

      <div className="flex flex-col">
        <NavLink
          to={"/"}
          className={(nav) => (nav.isActive ? "bg-[#00796a]" : "bg-[#009784]")}
        >
          <div className="px-3 py-2 text-white text-sm">Dashboard</div>
        </NavLink>
        <NavLink
          to={"/about"}
          className={(nav) => (nav.isActive ? "bg-[#00796a]" : "bg-[#009784]")}
        >
          <div className="px-3 py-2 text-white text-sm">About</div>
        </NavLink>
        <NavLink
          to={"/contact"}
          className={(nav) => (nav.isActive ? "bg-[#00796a]" : "bg-[#009784]")}
        >
          <div className="px-3 py-2 text-white text-sm">Contact</div>
        </NavLink>
        <NavLink>
          <div className="px-3 py-2 text-white text-sm">Error</div>
        </NavLink>
      </div>
    </div>
  );
}
