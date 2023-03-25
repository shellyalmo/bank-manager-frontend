import axios from "axios";

const bankApi = axios.create({
  baseURL: "https://bankcyclick.cyclic.app/api/v1",
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
});

export { bankApi };
