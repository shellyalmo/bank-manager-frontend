import { useState, useEffect } from "react";
import { bankApi } from "../api/api";
import UserActions from "./UserActions";

const UsersList = ({ newUser, setNewUser }) => {
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
      <header>
        <h2>All users: </h2>
      </header>
      <table>
        <tr>
          <th>Name</th>
          <th>PassportID</th>
          <th>Email</th>
          <th>Age</th>
          <th>Details</th>
        </tr>
        {users?.map((user) => {
          return (
            <tr key={user.id}>
              <td> {user.name}</td>
              <td> {user.passportID}</td> <td>{user.email}</td>
              <td>{user.age}</td>
              <details>
                <summary>Click to Open</summary>
                <UserActions user={user} setNewUser={setNewUser} />
              </details>
            </tr>
          );
        })}
      </table>
    </section>
  );
};

export default UsersList;
