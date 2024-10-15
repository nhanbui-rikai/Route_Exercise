import React from "react";
import { Link, Route, Routes } from "react-router-dom";

export default function About() {
  return (
    <div>
      <h1>About Page</h1>
      <div>
        <Link className="text-sm" to={"/about/list"}>
          List Page
        </Link>
        <Link className="text-sm" to={"/about/add"}>
          Add Page
        </Link>
      </div>

      <Routes>
        <Route index path="/list" element={<div>List About</div>} />
        <Route path="/add" element={<div>About List</div>} />
      </Routes>
    </div>
  );
}
