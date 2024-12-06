import { svgAssets } from "../../assets";

const CatNav = () => {
  return (
    <div className="p-5 flex justify-between items-center fixed top-32 left-0 right-0 bg-white z-10">
      <div className="w-2/5 flex justify-between">
        <section
          className="px-4 py-1 flex gap-2 bg-[#00B207] items-center rounded-full"
        >
          <p className="text-xs text-white">Filter</p>
          <img src={svgAssets.filter} alt="icon" className="w-3" />
        </section>
        <section className="flex items-center text-xs">
          <p>Sort by:</p>
          <select name="sort" className="ml-1 border">
            <option value="price">Price</option>
            <option value="rating">Rating</option>
          </select>
        </section>
      </div>
      <div>
        <p className="text-xs">
          <span className="font-bold">52 </span>Results Found
        </p>
      </div>
    </div>
  );
};
export default CatNav;
