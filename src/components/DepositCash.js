import { useState } from "react";
import { bankApi } from "../api/api";

const updateCashApi = (form, accountId) => {
  return bankApi.put(`accounts/updateBalance/${accountId}`, form);
};
const DepositCash = ({ accountId, setNewUser }) => {
  const [form, setForm] = useState({
    cash: 0,
  });
  return (
    <div>
      <label htmlFor="deposit">Enter Amount: </label>
      <input
        type="number"
        min="0"
        onChange={(e) => {
          setForm({ ...form, cash: e.target.valueAsNumber });
        }}
      />
      <button
        onClick={async () => {
          await updateCashApi(form, accountId);
          setNewUser(Math.random());
        }}
      >
        Deposit
      </button>
    </div>
  );
};

export default DepositCash;
