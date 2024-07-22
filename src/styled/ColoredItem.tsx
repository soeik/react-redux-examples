import { faker } from "@faker-js/faker";

// Не меняется в задании
export const ColoredItem = ({
  children,
}: {
  children: React.ReactElement | React.ReactElement[];
}) => {
  const color = faker.color.rgb();

  return (
    <div
      style={{
        cursor: "pointer",
        background: color,
        padding: "1rem",
        textAlign: "center",
        width: "200px",
      }}
    >
      {children}
    </div>
  );
};
