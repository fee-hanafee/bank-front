import React, { useState } from "react";
import { TextField } from "@mui/material";

import FormTransaction from "../components/FormTransaction";
import useAuth from "../context/AuthContextProvider";

import * as transaction from "../api/transaction-api";
import { useNavigate } from "react-router-dom";
import currencyFormat from "../utils/currencyFormat";

export default function TransferPage() {
  const [input, setInput] = useState({ account: "", amount: "" });
  const [error, setError] = useState(null);
  const { user, fetchMe } = useAuth();

  const navigate = useNavigate();

  const handleChange = (event) => {
    setInput({ ...input, [event.target.name]: event.target.value });
    setError(null);
  };

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();

      if (input.amount > user.balance)
        return setError({ amount: "ยอดเงินไม่พอ", isAmount: true });

      await transaction.transfer({
        account: input.account,
        amount: +input.amount,
      });

      fetchMe();
      navigate("/");
    } catch (err) {
      console.log(err);

      if (err.response.data.message == "Receiver_not_found") {
        setError({ account: "ไม่พบบัญชีผู้ใช้", isAccount: true });
      }
    }
  };

  return (
    <FormTransaction title="โอนเงิน" handleSubmit={handleSubmit}>
      <p>ยอดเงินที่ใช้ได้ {currencyFormat(user.balance)} บาท</p>
      <TextField
        label={error?.account ? error?.account : "ระบุเลขบัญชี"}
        error={error?.isAccount}
        type="number"
        onChange={handleChange}
        name="account"
        value={input.account}
      />
      <TextField
        label={error?.amount ? error?.amount : "จำนวนเงิน"}
        type="number"
        error={error?.isAmount}
        onChange={handleChange}
        name="amount"
        value={input.amount}
      />
    </FormTransaction>
  );
}
