import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">

        <h1 className="text-xl font-bold">
          Travel Explorer
        </h1>

        <div className="space-x-4 flex items-center">
          <Link to="/">Home</Link>

          <Link to="/about">About</Link>

          <Link to="/packages">Packages</Link>

          <Link to="/contact">Contact</Link>

          <Link to="/faq">FAQ</Link>

          {!user ? (
            <Link to="/login">Login</Link>
          ) : (
            <>
              {user.role === "admin" ? (
                <Link to="/admin">
                  Dashboard
                </Link>
              ) : (
                <Link to="/dashboard">
                  Dashboard
                </Link>
              )}

              <button
                onClick={logout}
                className="bg-red-500 px-3 py-1 rounded"
              >
                Logout
              </button>
            </>
          )}
        </div>

      </div>
    </nav>
  );
};

export default Navbar;