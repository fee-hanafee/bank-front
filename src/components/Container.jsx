import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

export default function Container() {
  return (
    <div className="w-[100vw] flex justify-center ">
      <div className="mx-auto">
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
}
