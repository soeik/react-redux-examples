// Не меняется в задании
export const ListWrapper = ({
  children,
}: {
  children?: React.ReactElement | React.ReactElement[];
}) => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
      {children}
    </div>
  );
};
