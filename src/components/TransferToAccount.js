import { useState, useEffect } from "react";
import { bankApi } from "../api/api";

const updateCreditApi = (form, fromAccountId) => {
  bankApi.put(`accounts/updateBalance/${fromAccountId}`, {
    credit: form.credit * -1,
  });
  return bankApi.put(`accounts/updateBalance/${form.toAccountId}`, {
    credit: form.credit,
  });
};
const TransferToAccount = ({ accountId, setNewUser }) => {
  const [form, setForm] = useState({
    credit: 0,
    toAccountId: "",
  });
  const [accounts, setAccounts] = useState([]);

  useEffect(() => {
    async function fetchAccounts() {
      try {
        const response = await bankApi.get("accounts");
        setAccounts(response.data.data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchAccounts();
  }, []);
  return (
    <div>
      <label htmlFor="update">Enter Amount To Transfer: </label>
      <input
        type="number"
        min="0"
        onChange={(e) => {
          if (e.target.reportValidity()) {
            setForm({ ...form, credit: e.target.valueAsNumber });
          }
        }}
      />
      <label htmlFor="account-select">Account of Receiver:</label>

      <select
        onChange={(e) => {
          setForm({ ...form, toAccountId: e.target.value });
        }}
      >
        <option value="">--Please choose an account--</option>
        {accounts.map((account) => {
          return <option value={account.id}>{account.id}</option>;
        })}
      </select>

      <button
        onClick={async () => {
          await updateCreditApi(form, accountId);
          setNewUser(Math.random());
        }}
      >
        Transfer
      </button>
    </div>
  );
};

export default TransferToAccount;
