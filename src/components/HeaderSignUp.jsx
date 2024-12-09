import { NavLink, Link } from "react-router-dom";
import Searchbar from "./search/Searchbar";
import Logo from "./Logo";
import cart from "../assets/img/cart.png"
import dropdown from "../assets/img/dropdown.png"
import favourites from "../assets/img/favourites.png"
import home from "../assets/img/home.png"
import order from "../assets/img/order.png"

const HeaderSignUp = () => {
  return (
    <nav className="fixed top-0 bg-white">
      <div className="w-screen h-12 px-5 flex items-center border-b-4 border-gray-300 bg-white gap-6">
        <Logo />
        <div>
          <Searchbar />
        </div>
        <div>
          <ul className="flex gap-10">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "font-semibold text-lg "
                    : "font-semibold text-lg "
                }
              >
                <div className="flex gap-2 " style={{ alignItems:"center"}}>

              <img src={home } className="w-5 h-4 align-bottom" />  Home
              </div>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/categories"
                className={({ isActive }) =>
                  isActive
                    ? "font-semibold text-lg "
                    : "font-semibold text-lg "
                }
              >
                Categories
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/favourites"
                className={({ isActive }) =>
                  isActive
                    ? "font-semibold text-lg"
                    : "font-semibold text-lg "
                }
              >
                <div className="flex gap-2 " style={{ alignItems:"center"}}>
                <img src={favourites} className="w-5 h-4 align-bottom" />Favourite 
                </div>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/order"
                className={({ isActive }) =>
                  isActive
                    ? "font-semibold text-lg"
                    : "font-semibold text-lg "
                }
              >
                 <div className="flex gap-2 " style={{ alignItems:"center"}}>
                <img src={order} className="w-5 h-4 align-bottom" />Order
                </div>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/my-cart"
                className={({ isActive }) =>
                  isActive
                    ? "font-semibold text-lg"
                    : "font-semibold text-lg "
                }
              >
                 <div className="flex gap-2 " style={{ alignItems:"center"}}>
                <img src={cart} className="w-5 h-4 align-bottom" />MyCart
                </div>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  isActive
                    ? "font-semibold text-lg"
                    : "font-semibold text-lg "
                }
              >
                 <div className="flex gap-2 " style={{ alignItems:"center"}}>
                Login<img src={dropdown} className="w-4 h-2 align-bottom" />
                </div>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>


    </nav>
  );
};

export default HeaderSignUp;
