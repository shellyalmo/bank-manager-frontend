import { useState } from "react";
import { bankApi } from "../api/api";

const updateCreditApi = (form, accountId) => {
  return bankApi.put(`accounts/updateBalance/${accountId}`, form);
};
const UpdateCredit = ({ accountId, setNewUser }) => {
  const [form, setForm] = useState({
    credit: 0,
  });
  return (
    <div>
      <label htmlFor="update">Enter Amount to update: </label>
      <input
        type="number"
        onChange={(e) => {
          setForm({ ...form, credit: e.target.valueAsNumber });
        }}
      />
      <button
        onClick={async () => {
          await updateCreditApi(form, accountId);
          setNewUser(Math.random());
        }}
      >
        Update
      </button>
    </div>
  );
};

export default UpdateCredit;
