import { NavLink } from "react-router-dom";
import Button from "./Button";
import { useDispatch } from "react-redux";
import { logout } from "../store/authSlice";
import { useAppSelector } from "../store/hooks";


export type NavbarItem = {
  link: string;
  label: string;
  isVisible?: boolean;
};

type NavbarProps = {
  items: NavbarItem[];
};

const Navbar = ({ items }: NavbarProps) => {

  const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated)

  const dispatch = useDispatch();

  return (
    <nav className="bg-gray-900 text-white px-6 py-3 flex justify-between items-center">
      {/* Logo */}
      <NavLink to="/" className="text-xl font-bold">
        TaskManager
      </NavLink>

      <div className="space-x-4">
        {
          items.filter((item) => item.isVisible !== false)
          .map((item) => (
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
        }
        { isAuthenticated && <Button children="Logout" onClick={() => dispatch(logout())} />}
        
      </div>
    </nav>
  );
};

export default Navbar;
