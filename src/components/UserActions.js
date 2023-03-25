import React from "react";

const UserActions = ({ user }) => {
  return (
    <section>
      <details>
        <summary>User Details</summary>
        <div>Total Cash: {user.totalCash}</div>
        <div>Total Credit: {user.totalCredit}</div>
        <div>createdAt: {user.createdAt}</div>
        <div>updatedAt: {user.updatedAt}</div>
        <div>id: {user.id}</div>
      </details>
      <details>
        <summary>Accounts Actions</summary>
        <details>
          <summary>Deposit Cash</summary>
        </details>
        <details>
          <summary>Withdraw Cash</summary>
        </details>
        <details>
          <summary>Transfer Money</summary>
        </details>
      </details>
    </section>
  );
};

export default UserActions;
