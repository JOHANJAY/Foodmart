import CatNav from "./CatNav";
import Products from "./Products";
import Sidebar from "./Sidebar/Sidebar";

const Categories = () => {
  return (
    <div className="p-5 mt-32">
      <CatNav />
      <div className="flex space-x-2">
      <Sidebar />
      <Products />
      </div>
      
    </div>
  );
};
export default Categories;
