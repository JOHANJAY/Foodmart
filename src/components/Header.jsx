import { NavLink, Link } from "react-router-dom";
import Searchbar from "./search/Searchbar";
import BannerImg from "./BannerImg";
import Logo from "./Logo";

const Header = () => {
  return (
    <nav className="fixed top-0 bg-white">
      <div className="w-screen h-12 px-5 flex items-center border-b-4 border-gray-300 bg-white">
        <Logo />
        <div>
          <Searchbar />
        </div>
        <div>
          <ul className="flex gap-4">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "font-semibold text-xl underline underline-offset-2"
                    : ""
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/categories"
                className={({ isActive }) =>
                  isActive
                    ? "font-semibold text-xl underline underline-offset-2"
                    : ""
                }
              >
                Browse All Categories
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      <BannerImg />
    </nav>
  );
};

export default Header;
