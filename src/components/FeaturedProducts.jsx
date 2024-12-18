import { imageAssets } from "../assets";
import AddBtn from "./AddBtn";
import { labels } from "../db/Arrays";

const FeaturedProducts = () => {
  return (
    <article className="p-5">
      <div className="pb-3 flex justify-between">
        <h2>Featured Products</h2>
        <div className="flex gap-5">
            {labels.map((item) => (
            <button className="focus:text-purple-400">{item}</button>
            ))}
        </div>
      </div>
      <section className="flex justify-evenly">
        <div className="w-36 shadow-md p-2">
          <img src={imageAssets.peach} alt="Peach" className="w-24" />
          <div className="flex justify-between text-xs space-x-1">
            <h3>Fresh Peach</h3>
            <AddBtn />
          </div>
        </div>
        <div className="w-36 shadow-md p-2">
          <img src={imageAssets.grapes} alt="Grapes" className="w-24" />
          <div className="flex justify-between text-xs space-x-1">
            <h3>Grapes</h3>
            <AddBtn />
          </div>
        </div>
        <div className="w-36 shadow-md p-2">
          <img src={imageAssets.avocado} alt="Avocado" className="w-24" />
          <div className="flex justify-between text-xs space-x-1">
            <h3>Avocado</h3>
            <AddBtn />
          </div>
        </div>
        <div className="w-36 shadow-md p-2">
          <img src={imageAssets.strawberries} alt="Strawberries" className="w-24" />
          <div className="flex justify-between text-xs space-x-1">
            <h3>Strawberries</h3>
            <AddBtn />
          </div>
        </div>
        <div className="w-36 shadow-md p-2">
          <img src={imageAssets.mangos} alt="Mangos" className="w-24" />
          <div className="flex justify-between text-xs space-x-1">
            <h3>Mangos</h3>
            <AddBtn />
          </div>
        </div>
        <div className="w-36 shadow-md p-2">
          <img src={imageAssets.orange} alt="Orange" className="w-24" />
          <div className="flex justify-between text-xs space-x-1">
            <h3>Orange</h3>
            <AddBtn />
          </div>
        </div>
        <div className="w-36 shadow-md p-2">
          <img src={imageAssets.pineapple} alt="Pineapple" className="w-24" />
          <div className="flex justify-between text-xs space-x-1">
            <h3>Pineapple</h3>
            <AddBtn />
          </div>
        </div>
        <div className="w-36 shadow-md p-2">
          <img src={imageAssets.pomegranate} alt="Pomegranate" className="w-24" />
          <div className="flex justify-between text-xs space-x-1">
            <h3>Pomegranate</h3>
            <AddBtn />
          </div>
        </div>
      </section>
    </article>
  );
};
export default FeaturedProducts;
