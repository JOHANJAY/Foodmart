import CategoriesList from "../components/CategoriesList";
import Hero from "../components/hero";
import VendorList from "../components/VendorList";
import FeaturedProducts from "../components/FeaturedProducts";
import DiscountHome from "../components/DiscountHome";
import Top from "../components/Top";
import ShopFaster from "../components/ShopFaster";

const App = () => {
  return (
    <div className="mt-36">
      <Hero />
      <CategoriesList />
      <VendorList />
      <FeaturedProducts />
      <DiscountHome />
      <Top />
      <ShopFaster />
    </div>
  );
};
export default App;
