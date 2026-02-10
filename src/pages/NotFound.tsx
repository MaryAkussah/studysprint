import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div>
      <h1 style={{ marginTop: 0 }}>Page not found</h1>
      <p>The page you’re looking for doesn’t exist.</p>
      <Link to="/">Go back home</Link>
    </div>
  );
}

export default NotFound;
