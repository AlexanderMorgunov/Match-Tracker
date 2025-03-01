import axios from "axios";
const baseURL = "https://app.ftoyd.com/fronttemp-service";

export const $api = axios.create({
  //   baseURL: process.env.APP_BASE_URL
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});
