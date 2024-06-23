import React from "react";
import Home from "../feature/home/Home";
import useAuth from "../context/AuthContextProvider";

export default function HomePage() {
  const { user } = useAuth();
  return (
    <div className="w-[100vw] h-[calc(100vh-62px)] bg-[#f4f5f6] py-4 px-8">
      {user && <Home />}
    </div>
  );
}
