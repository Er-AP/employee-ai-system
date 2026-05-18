import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div
      style={{
        background: "#111827",
        padding: "15px",
        borderRadius: "10px",
        display: "flex",
        justifyContent: "center",
        gap: "30px",
      }}
    >
      <Link
        to="/"
        style={{
          color: "white",
          textDecoration: "none",
        }}
      >
        Home
      </Link>

      <Link
        to="/login"
        style={{
          color: "white",
          textDecoration: "none",
        }}
      >
        Login
      </Link>

      <Link
        to="/signup"
        style={{
          color: "white",
          textDecoration: "none",
        }}
      >
        Signup
      </Link>

      <Link
        to="/recommendation"
        style={{
          color: "white",
          textDecoration: "none",
        }}
      >
        AI Recommendation
      </Link>
    </div>
  );
}

export default Navbar;