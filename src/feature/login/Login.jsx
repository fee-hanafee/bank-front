import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
import useAuth from "../../context/AuthContextProvider";
import { useNavigate } from "react-router-dom";

const initialInput = { email: "", password: "" };

export default function Login() {
  const [input, setInput] = useState(initialInput);
  const [error, setError] = useState(null);

  const { userLogin } = useAuth();
  const navigate = useNavigate();

  const handleChange = (event) => {
    setInput({ ...input, [event.target.name]: event.target.value });
    setError(null);
  };

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      await userLogin(input);
      setInput(initialInput);
      navigate("/");
    } catch (err) {
      console.log(err);
      setError({ message: "อีเมลผู้ใช้หรือรหัสผ่านไม่ถูกต้อง", isError: true });
    }
  };

  return (
    <div className="w-[420px] h-[300px] bg-[#fff] rounded-lg">
      <form className=" p-8 flex flex-col gap-4" onSubmit={handleSubmit}>
        <p className="font-bold">Welcome</p>
        {error && (
          <span className="absolute translate-x-[214px] translate-y-2 text-red-600 text-xs">
            {error?.message}
          </span>
        )}
        <TextField
          error={error?.isError}
          label="อีเมลผู้ใช้งาน"
          value={input.email}
          name="email"
          onChange={handleChange}
        />
        <TextField
          error={error?.isError}
          label="รหัสผ่าน"
          type="password"
          value={input.password}
          name="password"
          onChange={handleChange}
        />

        <Button variant="contained" type="submit">
          เข้าสู่ระบบ
        </Button>
      </form>
    </div>
  );
}
