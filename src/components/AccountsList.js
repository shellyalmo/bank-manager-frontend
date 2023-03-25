import React from "react";

const AccountsList = ({ accounts }) => {
  return (
    <section>
      <ul>
        {accounts.map((account) => {
          return (
            <li>
              <div>Account ID: {account.id}</div>
              <div>Credit Amount: {account.credit}</div>
              <div>Cash Amount: {account.cash}</div>
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
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default AccountsList;
