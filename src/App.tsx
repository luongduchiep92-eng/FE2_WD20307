import { Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Lab2 from "./pages/Lab2";
import { Toaster } from "react-hot-toast";
import Lab1 from "./pages/Lab1";
import RegisterForm from "./labs/lab3/RegisterForm";
import LoginForm from "./labs/lab3/LoginForm";
import Lab3 from "./pages/Lab3";
import StoryForm from "./labs/lab4/Lab4";
import Lab4 from "./pages/Lab4";
import Lab5 from "./pages/Lab5";

function App() {
  return (
    <>
      <nav className="bg-blue-600 text-white shadow">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="#" className="text-xl font-semibold">
            <strong>WEB2091 App</strong>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="#" className="hover:text-gray-200">
              Trang chủ
            </Link>
            <Link to="/lab1" className="hover:text-gray-200">
              Lab 1
            </Link>
            <Link to="/lab2" className="hover:text-gray-200">
              Lab 2
            </Link>
            <Link to="/lab3" className="hover:text-gray-200">
              Lab 3
            </Link>
            <Link to="/lab4" className="hover:text-gray-200">
              Lab 4
            </Link>
            <Link to="/lab5" className="hover:text-gray-200">
              Lab 5
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <Link to="/login" className="hover:text-gray-200">
              Đăng nhập
            </Link>
            <Link to="/register" className="hover:text-gray-200">
              Đăng ký
            </Link>
          </div>
        </div>
      </nav>

      <div style={{ padding: 20 }}>
        <Routes>
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/" element={<Home />} />
          <Route path="/lab1" element={<Lab1 />} />
          <Route path="/lab2" element={<Lab2 />} />
          <Route path="/lab3" element={<Lab3 />} />
          <Route path="/lab4" element={<Lab4 />} />
          <Route path="/lab5" element={<Lab5 />} />
        </Routes>
          <StoryForm></StoryForm>
      </div>

      <Toaster />
    </>
  );
}

export default App;