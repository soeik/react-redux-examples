import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { getUsers } from "./users";
import { fetchUsersSuccess, incrementUser } from "./redux";
import { ColoredItem } from "../styled/ColoredItem";
import { ListWrapper } from "../styled/ListWrapper";

// #1 Реализовать fetchUsersSuccess

// #2 Реализовать отображение списка пользователей по шаблону (имя пользователя и счетчик кликов)
// <ColoredItem>
//   <div>{name}</div>
//   <div>{count}</div>
// </ColoredItem>

// #3 Реализовать отображение счетчика совпадений (в т.ч. частичного) введенного имени с существующим списком
// <ColoredItem>
// <h1>Совпадений: {matchesCount}</h1>
// </ColoredItem>

// #4 Реализовать инкремент счетчика кликов на элементе пользователя (redux)

export const UsersList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsersSuccess(getUsers(20)));
  }, []);

  const onUserClick = () => {
    // TODO: increment
  };

  return (
    <>
      {/* TODOL matches */}
      <hr />
      <ListWrapper>{/* TODO: users list */}</ListWrapper>
    </>
  );
};
