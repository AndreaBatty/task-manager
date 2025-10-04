import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Navbar, { type NavbarItem } from "./components/Navbar";

const navItems: NavbarItem[] = [
    { link: "/", label: "Home" },
    { link: "/login", label: "Login" },
  ];

function App() {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <Navbar items={navItems} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
