import React from "react";
import DepositCash from "./DepositCash";

const AccountsList = ({ user, setNewUser }) => {
    const {accounts} = user
  return (
    <section>
      <table>
        <tr>
          <th>Account ID: </th>
          <th>Credit Amount: </th>
          <th>Cash Amount: </th>
        </tr>
        {accounts.map((account) => {
          return (
            <tr>
              <td>{account.id}</td>
              <td>{account.credit}</td>
              <td>{account.cash}</td>
              <td>
                <details>
                  <summary>Account Actions</summary>
                  <details>
                    <summary>Deposit Cash</summary>
                    <DepositCash accountId={account.id} setNewUser={setNewUser} />
                  </details>
                  <details>
                    <summary>Withdraw Cash</summary>
                  </details>
                  <details>
                    <summary>Update Credit</summary>
                  </details>
                  <details>
                    <summary>Transfer Money</summary>
                  </details>
                </details>
              </td>
            </tr>
          );
        })}
      </table>
    </section>
  );
};

export default AccountsList;
