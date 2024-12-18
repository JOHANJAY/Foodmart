import { data } from "../../db/data";
import { TbCurrencyNaira } from "react-icons/tb";
import { getRatingStar } from "../../db/Arrays"; 

const getRandomProducts = (data, count) => {
  // Shuffle the array and pick the first 'count' items
  const shuffledData = [...data].sort(() => Math.random() - 0.5);
  return shuffledData.slice(0, count);
};

const RelatedProducts = () => {
  const randomProducts = getRandomProducts(data, 3); // Get 3 random products

  const handleProductClick = (category, id) => {
    console.log(`Navigate to ${category} with ID: ${id}`);
    // Add navigation logic here if needed
  };

  return (
    <div className="pt-10">
      <h2 className="font-bold text-2xl text-center">Related Products</h2>
      <div className="flex justify-center flex-wrap gap-20">
        {randomProducts.map((item, id) => (
          <section
            key={id}
            className="w-72 h-96 p-2 cursor-pointer border hover:shadow-sm rounded"
            onClick={() => handleProductClick(item.category, id)}
          >
            <img src={item.imgSrc} alt={item.title} className="mb-1" />
            <section className="w-44 flex items-center space-x-7">
              <div>
                <h3>{item.title}</h3>
                <div className="flex items-center font-bold">
                  <TbCurrencyNaira /> {item.price}
                </div>
                <Rating stars={item.rating} />
              </div>
            </section>
          </section>
        ))}
      </div>
    </div>
  );
};
const Rating = ({ stars }) => (
  <div className="flex space-x-1">
    <div className="flex text-[#ff8a00]">{getRatingStar(stars)}</div>
    <div className="flex text-[#ccc]">{getRatingStar(5 - stars)}</div>
  </div>
);

export default RelatedProducts;
