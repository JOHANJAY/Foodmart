import { Link } from "react-router-dom";
import { categories } from "../db/Arrays";

const CategoriesList = () => {
  return (
    <div className="p-5 w-full">
      <h2 className="text-2xl pb-5">Explore Categories</h2>
      <ul className="w-fit flex gap-10 items-center">
        {categories.map((cat, i) => (
          <li key={i} className="p-2 w-36 h-44 flex justify-center items-center border shadow-md cursor-pointer">
            <Link to={`/categories`}>
              <div className="w-20 pb-2">{cat.img}</div>
              <p className="text-center">{cat.name}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default CategoriesList;
