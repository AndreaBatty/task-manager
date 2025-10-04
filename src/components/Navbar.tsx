import { NavLink } from "react-router-dom";

export type NavbarItem = {
  link: string;
  label: string;
};

type NavbarProps = {
  items: NavbarItem[];
};

const Navbar = ({ items }: NavbarProps) => {
  return (
    <nav className="bg-gray-900 text-white px-6 py-3 flex justify-between items-center">
      {/* Logo */}
      <NavLink to="/" className="text-xl font-bold">
        TaskManager
      </NavLink>

      {/* Links */}
      <div className="space-x-4">
        {items.map((item, index) => {
          return (
            <>
              <NavLink
                key={index+item.label}
                to={item.link}
                className={({ isActive }) =>
                  isActive ? "text-blue-400 font-bold" : "hover:text-blue-400"
                }
              >
                {item.label}
              </NavLink>
            </>
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;
