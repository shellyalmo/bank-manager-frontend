import { useState, useEffect } from "react";
import { bankApi } from "../api/api";
import Navbar from "../components/Navbar";

const UsersList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await bankApi.get("/users");
        setUsers(response.data.data);
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

      <div>
        {users?.map((user) => {
          return <div key={user.id}>{user.name}</div>;
        })}
      </div>
    </>
  );
};

export default UsersList;
