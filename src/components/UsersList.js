import { useState, useEffect } from "react";
import { bankApi } from "../api/api";
import UserActions from "./UserActions";

const UsersList = ({ newUser }) => {
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
  }, [newUser]);

  return (
    <section>
      <h2>All users: </h2>
      {users?.map((user) => {
        return (
          <div key={user.id}>
            Name: {user.name} PassportID: {user.passportID} Email: {user.email}{" "}
            Age: {user.age}
            <details>
              <summary>Details</summary>
              <UserActions user={user} />
            </details>
          </div>
        );
      })}
    </section>
  );
};

export default UsersList;
