import { useState } from "react";
import { data } from "../../../db/data";

const SideCategories = ({ onCategoryChange }) => {
  const [selected, setSelected] = useState("");

  const handleChange = (e) => {
    const { value } = e.target;
    setSelected(value);
    onCategoryChange(value); // Notify parent about category change
  };

  const categories = [
    { label: "Fresh Fruit", value: "fruits" },
    { label: "Vegetables", value: "vegetables" },
    { label: "Grain", value: "grain" },
    { label: "Groceries", value: "groceries" },
    { label: "Beverages", value: "beverages" },
    { label: "Edible Oil", value: "edibleOil" },
  ];

  return (
    <form onChange={handleChange} className="border-b pb-1">
      {categories.map((cat) => (
        <label key={cat.value} className="pb-2 font-light text-sm flex">
          <input
            type="radio"
            name="category"
            value={cat.value}
            className="mt-1 accent-green-600 mr-1"
            checked={selected === cat.value} // Bind the selected state
          />
          {cat.label}
        </label>
      ))}
    </form>
  );
};

export default SideCategories;
