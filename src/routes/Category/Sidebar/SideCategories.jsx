import { useState } from "react";

//Remember to commit and push

const SideCategories = () => {
  const [selected, setSelected] = useState("");

  //handlechange
  const handleChange = (e) => {
    const { value } = e.target;
    setSelected(value);
  };

  //radio buttons
  const { fruit, vegetables, grain, groceries, beverages, edibleOil } = {
    fruit: "fruit",
    vegetables: "vegetables",
    grain: "grain",
    groceries: "groceries",
    beverages: "beverages",
    edibleOil: "edibleOil",
  };

  console.log(selected);

  return (
    <form onChange={handleChange} className="border-b pb-1">
      <label className="pb-2 font-light text-sm flex ">
        <input
          type="radio"
          name="test"
          value={fruit}
          className="mt-1 accent-green-600 mr-1"
        />
        Fresh Fruit
      </label>
      <label className="pb-2 font-light text-sm flex ">
        <input
          type="radio"
          name="test"
          value={vegetables}
          className="accent-green-600 mr-1"
        />
        Vegetables
      </label>
      <label className="pb-2 font-light text-sm flex ">
        <input
          type="radio"
          name="test"
          value={grain}
          className="accent-green-600 mr-1"
        />
        Grain
      </label>
      <label className="pb-2 font-light text-sm flex ">
        <input
          type="radio"
          name="test"
          value={groceries}
          className="accent-green-600 mr-1"
        />
        Groceries
      </label>
      <label className="pb-2 font-light text-sm flex ">
        <input
          type="radio"
          name="test"
          value={beverages}
          className="accent-green-600 mr-1"
        />
        Beverages
      </label>
      <label className="pb-2 font-light text-sm flex ">
        <input
          type="radio"
          name="test"
          value={edibleOil}
          className="accent-green-600 mr-1"
        />
        Edible Oil
      </label>
    </form>
  );
};
export default SideCategories;
