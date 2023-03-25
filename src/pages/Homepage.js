import { useState, useEffect } from "react";
import { bankApi } from "../api/api";
import Navbar from "../components/Navbar";

const Homepage = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await bankApi.get("/users");
        setUsers(response.data);
        console.log("Users:", response.data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchUsers();
  }, []);

  return (
    <>
      <Navbar />
      <div>Welcome to Homepage</div>
    </>
  );
};

export default Homepage;
