import { useState } from "react";
import { bankApi } from "../api/api";

const updateCashApi = (form, accountId) => {
  return bankApi.put(`accounts/updateBalance/${accountId}`, form);
};
const UpdateCash = ({ accountId, setNewUser, action }) => {
  const [form, setForm] = useState({
    cash: 0,
  });
  return (
    <div>
      <label htmlFor="update">Enter Amount: </label>
      <input
        type="number"
        min={action === "deposit" ? 0 : undefined}
        max={action === "withdraw" ? 0 : undefined}
        onChange={(e) => {
          if (e.target.reportValidity()) {
            setForm({ ...form, cash: e.target.valueAsNumber });
          }
        }}
      />
      <button
        onClick={async () => {
          await updateCashApi(form, accountId);
          setNewUser(Math.random());
        }}
      >
        {action}
      </button>
    </div>
  );
};

export default UpdateCash;
