import React from "react";
import { useNavigate } from "react-router-dom";  

export default function Menutext({ text, path = "/"}) {
  const navigate = useNavigate();

  return (
    <p
      className="text-[#fff] hover:text-red-400 transition-all duration-150"
      role="button"
      onClick={() => navigate(path)} 
    >
      {text}
    </p>
  );
}
