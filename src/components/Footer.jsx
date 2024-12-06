import { Link } from "react-router-dom";
import Logo from "./Logo";
import { svgAssets } from "../assets";
import {
  FaFacebookF,
  FaTwitter,
  FaPinterestP,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[#D4B8E0]">
      <div className="border-b-2 border-gray-300">
        <div className="p-5 flex justify-between">
          <div className="">
            <Logo isFooter={true} />
            <div className="pl-3 text-sm">
              <p>
                Address: <i>Lagos</i>
              </p>
              <p>
                Phone: <i>08123456789</i>
              </p>
              <p>
                Email: <i>foodmart@gmail.com</i>
              </p>
            </div>
          </div>
          <div className="pt-3 flex flex-col text-sm">
            <h2 className="pb-2 font-bold">Links</h2>
            <Link to="/about">About Us</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/">Promotions</Link>
            <Link to="/">Reviews</Link>
          </div>
          <div className="pt-3 flex flex-col text-sm">
            <h2 className="pb-2 font-bold">Help Center</h2>
            <Link to="/">Payments</Link>
            <Link to="/">Shipping</Link>
            <Link to="/">Q&A</Link>
            <Link to="/">Privacy Policy</Link>
          </div>
        </div>
      </div>
      <div className="px-7 py-3 flex justify-between items-center">
        <div className="flex space-x-1 items-center">
          <img src={svgAssets.copyright} alt="copyright" className="w-6" />
          <p className="text-sm">2024, All Rights Reserved</p>
        </div>
        <div className="flex space-x-5">
          <a href="#"><FaFacebookF /></a>
          <a href="#"><FaTwitter /></a>
          <a href="#"><FaPinterestP /></a>
          <a href="#"><FaInstagram /></a>
        </div>
      </div>
    </div>
  );
};
export default Footer;
