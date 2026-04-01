import { Link } from "react-router-dom";
import { useAuthStore } from "../../stores/useAuthStore";

const Header = () => {
    const { user, token, setAuth } = useAuthStore();

  const handleLogout = () => {
    setAuth({ user: null, token: null });
  };

  return (
    <nav className="bg-blue-600 text-white shadow">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="text-xl font-semibold">
          WEB2091 App
        </Link>
        <div className="space-x-6">
          <Link to="/lab1">Lab1</Link>
          <Link to="/lab2">Lab2</Link>
          <Link to="/lab3">Lab3</Link>
          <Link to="/lab4">Lab4</Link>
          <Link to="/lab5">Lab5</Link>
        </div>

        <div>
          {token ? (
            <>
              <span className="mr-4">
                Xin chào: {user?.email}
              </span>
              <button onClick={handleLogout}>Logout</button>
            </>
          ) : (
            <>
              <Link to="/login" className="mr-4">
                Đăng nhập
              </Link>
              <Link to="/register">Đăng ký</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;