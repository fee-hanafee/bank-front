import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { TextField } from "@mui/material";
import * as transaction from "../api/transaction-api";
import useAuth from "../context/AuthContextProvider";
import FormTransaction from "../components/FormTransaction";

export default function DepositPage() {
  const [input, setInput] = useState({ amount: "" });
  const { fetchMe } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      await transaction.deposit(input);
      fetchMe();
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <FormTransaction handleSubmit={handleSubmit} title="ฝากเงิน">
      <TextField
        type="number"
        color=""
        label="จำนวนเงิน"
        value={input.amount}
        onChange={(e) => setInput({ ...input, amount: +e.target.value })}
      />
    </FormTransaction>
  );
}
