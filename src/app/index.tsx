import { faker } from "@faker-js/faker";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsersSuccess, incrementUser } from "./redux";
import { RootState } from "@/store";

const getItems = () => {
  return Array(100)
    .fill(0)
    .map(() => ({
      id: faker.string.uuid(),
      name: faker.person.lastName(),
      userCounter: 0,
    }));
};

const Item = ({ id, onClick }: { id: string; onClick: () => void }) => {
  const counter = useSelector<RootState, number>(
    (state) => state.demo.users[id].userCounter
  );
  const name = useSelector<RootState, string>(
    (state) => state.demo.users[id].name
  );
  const color = faker.color.rgb();
  return (
    <div
      style={{
        background: color,
        padding: "1rem",
        textAlign: "center",
        width: "200px",
      }}
      onClick={onClick}
    >
      <h2>{name}</h2>
      <h1>{counter}</h1>
    </div>
  );
};

export const App = () => {
  const [count, setCount] = useState(0);
  const itemIds = useSelector<RootState, string[]>(
    (state) => state.demo.userIds
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsersSuccess(getItems()));
  }, []);

  const color = faker.color.rgb();

  const clickHandler = (id: string) => () => dispatch(incrementUser(id));

  // ***

  return (
    <div>
      <div style={{ display: "flex", gap: "1rem", fontSize: "4rem" }}>
        <span>Count: {count}</span>
        <button
          style={{ width: "4rem", height: "4rem", background: color }}
          onClick={() => setCount(count + 1)}
        >
          +
        </button>
      </div>
      <hr />
      <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
        {itemIds.map((id) => (
          <Item key={id} id={id} onClick={clickHandler(id)} />
        ))}
      </div>
    </div>
  );
};
