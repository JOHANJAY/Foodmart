const SideCategories = () => {
  return (
    <div className="border-b pb-1">
      <label className="pb-2 font-light text-sm flex ">
        <input
          type="radio"
          name="test"
          className="mt-1 accent-green-600 mr-1"
        />
        Fresh Fruit
      </label>
      <label className="pb-2 font-light text-sm flex ">
        <input type="radio" name="test" className="accent-green-600 mr-1" />
        Vegetables
      </label>
      <label className="pb-2 font-light text-sm flex ">
        <input type="radio" name="test" className="accent-green-600 mr-1" />
        Grain
      </label>
      <label className="pb-2 font-light text-sm flex ">
        <input type="radio" name="test" className="accent-green-600 mr-1" />
        Groceries
      </label>
      <label className="pb-2 font-light text-sm flex ">
        <input type="radio" name="test" className="accent-green-600 mr-1" />
        Beverages
      </label>
      <label className="pb-2 font-light text-sm flex ">
        <input type="radio" name="test" className="accent-green-600 mr-1" />
        Edible Oil
      </label>
    </div>
  );
};
export default SideCategories;
