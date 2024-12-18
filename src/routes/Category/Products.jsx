// Refactored Products Component
import { useNavigate } from "react-router-dom";
import { data } from "../../db/data";
import { TbCurrencyNaira } from "react-icons/tb";
import { getRatingStar } from "../../db/Arrays";
import AddBtn from "../../components/AddBtn";

const Products = () => {
  const navigate = useNavigate();

  const handleProductClick = (category, productId) => {
    navigate(`/categories/${category}/${productId}`);
  };

  return (
    <article className="w-fit grid grid-cols-6 mt-10">
      {data.map((item, id) => (
        <section
          key={id}
          className="w-48 m-1 p-2 cursor-pointer border hover:shadow-sm rounded"
          onClick={() => handleProductClick(item.category, id)}
        >
          <img src={item.imgSrc} alt={item.title} className="w-44 mb-1" />
          <section className="w-44 flex items-center space-x-7">
            <div>
              <h3>{item.title}</h3>
              <div className="flex items-center font-bold">
                <TbCurrencyNaira /> {item.price}
              </div>
              <Rating stars={item.rating} />
            </div>
            <AddBtn />
          </section>
        </section>
      ))}
    </article>
  );
};

const Rating = ({ stars }) => (
  <div className="flex space-x-1">
    <div className="flex text-[#ff8a00]">{getRatingStar(stars)}</div>
    <div className="flex text-[#ccc]">{getRatingStar(5 - stars)}</div>
  </div>
);

export default Products;
