import React from "react";
import UpdateCash from "./UpdateCash";
import UpdateCredit from "./UpdateCredit";

const AccountsList = ({ user, setNewUser }) => {
  const { accounts } = user;
  return (
    <section>
      <table>
        <thead>
          <tr>
            <th>Account ID:</th>
            <th>Credit Amount:</th>
            <th>Cash Amount:</th>
          </tr>
        </thead>
        <tbody>
          {accounts.map((account) => {
            return (
              <tr key={account.id}>
                <td>{account.id}</td>
                <td>{account.credit}</td>
                <td>{account.cash}</td>
                <td>
                  <details>
                    <summary>Account Actions</summary>
                    <details>
                      <summary>Deposit Cash</summary>
                      <UpdateCash
                        action="deposit"
                        accountId={account.id}
                        setNewUser={setNewUser}
                      />
                    </details>
                    <details>
                      <summary>Withdraw Cash</summary>
                      <UpdateCash
                        action="withdraw"
                        accountId={account.id}
                        setNewUser={setNewUser}
                      />
                    </details>
                    <details>
                      <summary>Update Credit</summary>
                      <UpdateCredit
                        accountId={account.id}
                        setNewUser={setNewUser}
                      />
                    </details>
                    <details>
                      <summary>Transfer Money</summary>
                    </details>
                  </details>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </section>
  );
};

export default AccountsList;
