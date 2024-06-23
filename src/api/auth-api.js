import axios from "../config/axios";

export const fetchMe = async () => await axios.get('/user/me')

export const login = async (input) => await axios.post("/user/login",input)