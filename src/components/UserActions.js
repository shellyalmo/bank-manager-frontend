import React from "react";
import AccountsList from "./AccountsList";

const UserActions = ({ user, setNewUser }) => {
  return (
    <section>
      <table>
        <tr>
          <th>Total Cash: </th>
          <td>{user.totalCash}</td>
        </tr>

        <tr>
          <th>Total Credit:</th> <td>{user.totalCredit}</td>
        </tr>
        <tr>
          <th>createdAt:</th> <td>{user.createdAt}</td>
        </tr>
        <tr>
          <th>updatedAt:</th> <td>{user.updatedAt}</td>
        </tr>
        <tr>
          <th>id:</th> <td>{user.id}</td>{" "}
        </tr>
      </table>
      <AccountsList user={user} setNewUser={setNewUser} />
    </section>
  );
};

export default UserActions;
