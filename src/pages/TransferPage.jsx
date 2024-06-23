import React from "react";
import FormTransaction from "../components/FormTransaction";
import useAuth from "../context/AuthContextProvider";
import { TextField } from "@mui/material";
import { useState } from "react";

export default function TransferPage() {
  const [input, setInput] = useState({ account: "", amount: "" });
  const [error, setError] = useState(null)
  const { user } = useAuth();

  const handleChange = (event) => {
    setInput({ ...input, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    try {
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <FormTransaction title="โอนเงิน" handleSubmit={handleSubmit}>
      <p>ยอดเงินที่ใช้ได้ : {user.balance}</p>
      <TextField
        label="ระบุเลขบัญชี"
        type="number"
        onChange={handleChange}
        name="account"
        value={input.account}
      />
      <TextField
        label="จำนวนเงิน"
        type="number"
        onChange={handleChange}
        name="amount"
        value={input.amount}
      />
    </FormTransaction>
  );
}
