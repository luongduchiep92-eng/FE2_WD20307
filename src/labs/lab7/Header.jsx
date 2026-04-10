import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { ThemeContext } from "../context/ThemeContext";
import { Button, Avatar, Switch } from "antd";

const Header = () => {
  const { user, setUser } = useContext(UserContext);
  const { theme, toggleTheme } = useContext(ThemeContext);

  const handleLogin = () => {
    setUser({
      name: "Hiệp đẹp trai",
      avatar: "https://i.pravatar.cc/40"
    });
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <div style={{
      display: "flex",
      justifyContent: "space-between",
      padding: "10px 20px",
      background: theme === "dark" ? "#333" : "#eee",
      color: theme === "dark" ? "#fff" : "#000"
    }}>
      <h3>My App</h3>

      <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
        <Switch onChange={toggleTheme} checked={theme === "dark"} />

        {user ? (
          <>
            <Avatar src={user.avatar} />
            <span>{user.name}</span>
            <Button onClick={handleLogout}>Logout</Button>
          </>
        ) : (
          <Button type="primary" onClick={handleLogin}>
            Login
          </Button>
        )}
      </div>
    </div>
  );
};

export default Header;