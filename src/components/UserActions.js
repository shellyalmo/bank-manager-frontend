import React from "react";
import AccountsList from "./AccountsList";

const UserActions = ({ user }) => {
  return (
    <section>
      <div>Total Cash: {user.totalCash}</div>
      <div>Total Credit: {user.totalCredit}</div>
      <div>createdAt: {user.createdAt}</div>
      <div>updatedAt: {user.updatedAt}</div>
      <div>id: {user.id}</div>
      <AccountsList accounts={user.accounts} />
    </section>
  );
};

export default UserActions;
