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
import EditStory from "./labs/lab5/FormEdit";
import FormList from "./labs/lab5/FormList";
import Header from "./labs/Lab8/Header";
function App() {
  return (
    <>
      <Header />

      <div style={{ padding: 20 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/lab1" element={<Lab1 />} />
          <Route path="/lab2" element={<Lab2 />} />
          <Route path="/lab3" element={<Lab3 />} />
          <Route path="/lab4" element={<Lab4 />} />
          <Route path="/lab5" element={<Lab5 />} />

          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />
        </Routes>
      </div>

      <Toaster />
    </>
  );
}

export default App;