type Props = {
  children: React.ReactNode;
};

function Card({ children }: Props) {
  return (
    <div
      style={{
        padding: 12,
        border: "1px solid #ddd",
        borderRadius: 10,
        background: "#fff",
      }}
    >
      {children}
    </div>
  );
}

export default Card;
