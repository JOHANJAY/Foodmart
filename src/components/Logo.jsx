import { Link } from "react-router-dom";
import { imageAssets } from "../assets";

const Logo = ({ isFooter, isContact }) => {
  return isFooter ? (
    <div className="pb-1 flex items-center space-x-1">
      <img
        src={imageAssets.Foodmartlogo}
        alt="Foodmart Logo"
        className="w-[100px]"
      />
      <h2 className="text-sm font-bold">FoodMart</h2>
    </div>
  ) : isContact ? (
    <img src={imageAssets.Foodmartlogo} alt="Foodmart Logo" className="w-60" />
  ) : (
    <Link to="/">
      <img
        src={imageAssets.Foodmartlogo}
        alt="Foodmart Logo"
        className="w-[65px] h-auto"
      />
    </Link>
  );
};
export default Logo;
