import { useState, useEffect } from "react";
import { bankApi } from "../api/api";
import Navbar from "../components/Navbar";

const Homepage = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await bankApi.get("/users");
        setUsers(response.data.data);
        console.log("Users:", users);
      } catch (error) {
        console.error(error);
      }
    }
    fetchUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Navbar />
      <div>Welcome to Homepage</div>
      <div>
        {users?.map((user) => {
          return user.name;
        })}
      </div>
    </>
  );
};

export default Homepage;
