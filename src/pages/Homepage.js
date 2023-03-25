import CreateUser from "../components/CreateUser";
import UsersList from "../components/UsersList";
import { useState } from "react";

const Homepage = () => {
  const [newUser, setNewUser] = useState(null);

  return (
    <main>
      <UsersList newUser={newUser} />
      <CreateUser setNewUser={setNewUser} />
    </main>
  );
};

export default Homepage;
