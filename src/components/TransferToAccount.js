import { useState, useEffect } from "react";
import { bankApi } from "../api/api";

const updateCreditApi = (form, accountId) => {
  return bankApi.put(`accounts/updateBalance/${accountId}`, form);
};
const TransferToAccount = ({ accountId, setNewUser }) => {
  const [form, setForm] = useState({
    credit: 0,
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
      <label for="account-select">Account of Receiver:</label>

      <select>
        <option value="">--Please choose an account--</option>
        {accounts.map((account) => {
          return <option>{account.id}</option>;
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
