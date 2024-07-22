import { useState } from "react";

import { UsersList } from "./UsersList";
import { NameInput } from "./NameInput";

export const App = () => {
  const [name, setName] = useState("");

  // #1 Уточнить тип
  const onNameChange = (event) => setName(event.currentTarget.value);

  return (
    <>
      <NameInput onChange={onNameChange} value={name} />
      <UsersList />
    </>
  );
};
