import React from "react";
import Login from "../feature/login/Login";

export default function LoginPage() {
  return (
    <div
      className=" w-full h-[calc(100vh-62px)] flex justify-center items-center"
      style={{
        background:
          "linear-gradient(90.9deg, rgb(3, 195, 195) 0.3%, rgb(37, 84, 112) 87.8%)",
      }}
    >
      <Login />
    </div>
  );
}
