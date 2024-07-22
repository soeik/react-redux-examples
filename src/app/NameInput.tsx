const style = {
  container: {
    paddingBottom: "2rem",
  },
  input: {
    padding: "1rem",
    fontSize: "1.5rem",
  },
  button: {
    padding: "1rem",
    fontSize: "1.5rem",
  },
};

// #1 Реализовать добавление пользователей
// #2 Можно добавлять только пользователей с уникальным именем
export const NameInput = () => {
  const handleAdd = () => {};

  return (
    <div style={style.container}>
      <input style={style.input} />
      <button style={style.button} onClick={handleAdd}>
        Добавить
      </button>
    </div>
  );
};
