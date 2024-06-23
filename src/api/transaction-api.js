import axios from "../config/axios";

export const deposit = async (input) =>
  await axios.post("/transaction/deposit", input);

export const withdraw = async (input) =>
  await axios.post("/transaction/withdraw", input);

export const transfer = async (input) =>
  await axios.post("/transaction/transfer", input);
