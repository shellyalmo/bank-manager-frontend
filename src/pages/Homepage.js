import CreateUser from "../components/CreateUser";
import UsersList from "../components/UsersList";
import { useState } from "react";

const Homepage = () => {
  const [newUser, setNewUser] = useState(null);

  return (
    <main>
      <header>
        <h1>Bank Manager App</h1>
      </header>
      <UsersList newUser={newUser} />
      <CreateUser setNewUser={setNewUser} />
    </main>
  );
};

export default Homepage;
