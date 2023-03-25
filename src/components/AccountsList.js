import React from "react";

const AccountsList = ({ accounts }) => {
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
                  </details>
                  <details>
                    <summary>Withdraw Cash</summary>
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
