import axios from "axios";

const bankApi = axios.create({
  baseURL: "https://bank-manager.cyclic.app/api/v1",
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
});

export { bankApi };
