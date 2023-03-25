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
      <table>
        <tr>
          <th>Name</th>
          <th>PassportID</th>
          <th>Email</th>
          <th>Age</th>
        </tr>
        {users?.map((user) => {
          return (
            <tr key={user.id}>
              <td> {user.name}</td>
              <td> {user.passportID}</td> <td>{user.email}</td>
              <td>{user.age}</td>
              <details>
                <summary>Details</summary>
                <UserActions user={user} />
              </details>
            </tr>
          );
        })}
      </table>
    </section>
  );
};

export default UsersList;
