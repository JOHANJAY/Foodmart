import SideCategories from "./SideCategories";
import Rating from "./Rating";
import PopTags from "./PopTags";
import sideBannar from "../../../assets/img/sideBannar.jpg";
import Sale from "./Sale";

const Sidebar = () => {
  return (
    <article className="w-1/5 mt-10 ">
      <div>
        <h2 className="pb-2 font-bold text-sm">All Categories</h2>
      </div>
      <SideCategories />
      <Rating />
      <PopTags />
      <img src={sideBannar} alt="" />
      <Sale />
    </article>
  );
};
export default Sidebar;
