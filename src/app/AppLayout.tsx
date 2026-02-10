import { NavLink, Outlet } from "react-router-dom";

const linkStyle = ({ isActive }: { isActive: boolean }) => ({
  marginRight: 12,
  fontWeight: isActive ? "700" : "400",
  textDecoration: "none",
});

function AppLayout() {
  return (
    <div style={{ maxWidth: 960, margin: "0 auto", padding: 16 }}>
      <header style={{ display: "flex", alignItems: "center", gap: 16 }}>
        <h2 style={{ margin: 0 }}>StudySprint</h2>

        <nav>
          <NavLink to="/" style={linkStyle}>
            Dashboard
          </NavLink>
          <NavLink to="/topics" style={linkStyle}>
            Topics
          </NavLink>
          <NavLink to="/quiz" style={linkStyle}>
            Quiz
          </NavLink>
          <NavLink to="/progress" style={linkStyle}>
            Progress
          </NavLink>
          <NavLink to="/settings" style={linkStyle}>
            Settings
          </NavLink>
        </nav>
      </header>

      <hr style={{ margin: "16px 0" }} />

      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
