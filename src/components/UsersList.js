import { useState, useEffect } from "react";
import { bankApi } from "../api/api";

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
    <section>
      <h2>All users: </h2>
      {users?.map((user) => {
        return (
          <div key={user.id}>
            Name: {user.name} PassportID: {user.passportID} Email: {user.email}{" "}
            Age: {user.age}
          </div>
        );
      })}
    </section>
  );
};

export default UsersList;
