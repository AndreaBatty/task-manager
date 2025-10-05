import { NavLink } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { logout } from "../store/authSlice";

export type NavbarItem = {
  link: string;
  label: string;
};

type NavbarProps = {
  items: NavbarItem[];
};

const Navbar = ({ items }: NavbarProps) => {

  const dispatch = useAppDispatch()
  const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated)
  const user = useAppSelector((state) => state.auth.user)
  return (
    <nav className="bg-gray-900 text-white px-6 py-3 flex justify-between items-center">
      {/* Logo */}
      <NavLink to="/" className="text-xl font-bold">
        TaskManager
      </NavLink>

      {/* Links */}
      <div className="space-x-4">
        {!isAuthenticated ? (
          items.map((item) => (
            <NavLink
              key={item.link}
              to={item.link}
              className={({ isActive }) =>
                isActive ? "text-blue-400 font-bold" : "hover:text-blue-400"
              }
            >
              {item.label}
            </NavLink>
          ))
        ) : (
          <>
            <span className="italic">Ciao, {user?.email}</span>
            <button
              onClick={() => dispatch(logout())}
              className="hover:text-red-400 ml-4"
            >
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
