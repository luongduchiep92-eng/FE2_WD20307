import { Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Lab2 from "./pages/Lab2";
import { Toaster } from "react-hot-toast";
import Lab1 from "./pages/lab1";

function App() {
  return (
    <>
      <nav className="bg-blue-600 text-white p-4 flex gap-6">
        <Link to="/">Trang chủ</Link>
        <Link to="/lab1">Lab 1</Link>
        <Link to="/lab2">Lab 2</Link>
      </nav>

      <div style={{ padding: 20 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/lab1" element={<Lab1 />} />
          <Route path="/lab2" element={<Lab2 />} />
        </Routes>
      </div>

      <Toaster />
    </>
  );
}

export default App;