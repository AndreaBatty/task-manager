import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Navbar, { type NavbarItem } from "./components/Navbar";
import ProtectedRoute from "./pages/ProtectedRoute";
import Dashboard from "./pages/Dashboard";
import { useAppSelector } from "./store/hooks";



function App() {

  const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated)

  const navItems: NavbarItem[] = [
    { link: "/", label: "Home" },
    { link: "/login", label: "Login", isVisible: !isAuthenticated },
    { link: "/dashboard", label: "Dashboard", isVisible: isAuthenticated },
  ]

  return (
    <>
      <div className="min-h-screen flex flex-col">
        <Navbar items={navItems} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
        </Routes>
      </div>
    </>
  );
}

export default App;
