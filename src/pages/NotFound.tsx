import { Link } from "react-router";

export const NotFound = () => {
  return (
    <div className="not-found">
      <h1>404</h1>
      <h2>Page not found</h2>
      <Link to="/">Back to home</Link>
    </div>
  );
};
