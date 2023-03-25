import { useState } from "react";
import { bankApi } from "../api/api";

const createUserApi = (form) => {
  return bankApi.post("/users", form);
};
const CreateUser = ({ setNewUser }) => {
  const [form, setForm] = useState({
    passportID: "",
    name: "",
    email: "",
    age: 18,
  });

  return (
    <section>
      <h2>Create a New User: </h2>
      <form method="post">
        <label htmlFor="userPassport">Passport ID: </label>
        <input
          onChange={(e) => {
            setForm({ ...form, passportID: e.target.value });
          }}
          minLength={9}
          maxLength={9}
          value={form.passportID}
          type="text"
          required
        />
        <label htmlFor="userName"> User Full Name: </label>
        <input
          type="text"
          onChange={(e) => {
            setForm({ ...form, name: e.target.value });
          }}
          value={form.name}
          required
        />
        <label htmlFor="userEmail"> User Email: </label>
        <input
          type="email"
          onChange={(e) => {
            setForm({ ...form, email: e.target.value });
          }}
          value={form.email}
          required
        />
        <label htmlFor="userAge"> User Age: </label>
        <input
          type="number"
          onChange={(e) => {
            setForm({ ...form, age: e.target.valueAsNumber });
          }}
          value={form.age}
          min="18"
          required
        />
        <button
          type="button"
          onClick={async () => {
            await createUserApi(form);
            setNewUser(form.passportID);
          }}
        >
          Submit
        </button>
      </form>
    </section>
  );
};

export default CreateUser;
