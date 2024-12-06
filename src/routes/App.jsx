import CategoriesList from "../components/CategoriesList";
import Hero from "../components/hero";
import VendorList from "../components/VendorList";

const App = () => {
  return (
    <div className="mt-36">
      <Hero />
      <CategoriesList />
      <VendorList />
    </div>
  );
};
export default App;
