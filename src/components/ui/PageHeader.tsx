type Props = {
  title: string;
  subtitle?: string;
};

function PageHeader({ title, subtitle }: Props) {
  return (
    <div style={{ marginBottom: 12 }}>
      <h1 style={{ margin: 0 }}>{title}</h1>
      {subtitle && <p style={{ margin: "6px 0 0", color: "#555" }}>{subtitle}</p>}
    </div>
  );
}

export default PageHeader;
