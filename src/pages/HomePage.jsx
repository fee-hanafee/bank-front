import React from "react";
import Home from "../feature/home/Home";
import useAuth from "../context/AuthContextProvider";

export default function HomePage() {
  const { user } = useAuth();
  return (
    <div
      className="w-[100vw] h-[calc(100vh-62px)]  py-4 px-8"
      style={{
        background:
          "linear-gradient(90.9deg, rgb(3, 195, 195) 0.3%, rgb(37, 84, 112) 87.8%)",
      }}
    >
      {user && <Home />}
    </div>
  );
}
