import { useParams } from "react-router-dom";
import { data } from "../../db/data";
import { TbCurrencyNaira } from "react-icons/tb";
import {
  FaFacebook,
  FaInstagram,
  FaPinterestP,
  FaTwitter,
} from "react-icons/fa";
import { useState, useEffect } from "react";
import Tabs from "./Tabs";
import useCartStore from "./Sidebar/UseStore";
import RelatedProducts from "./RelatedProducts";

const ProductDetails = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null); // State to hold the current product
  const [count, setCount] = useState(1); // Default to 1 for count

  const { cart, addProduct } = useCartStore();

  // Fetch product details on component mount
  useEffect(() => {
    const foundProduct = data.find((_, index) => index === parseInt(productId));
    if (foundProduct) setProduct(foundProduct);
  }, [productId]);

  // Log the cart whenever it updates
  useEffect(() => {
    console.log("Cart updated:", cart);
  }, [cart]);

  if (!product) {
    return <div>Product not found</div>;
  }

  const handleIncrement = () => setCount((prev) => prev + 1);
  const handleDecrement = () => setCount((prev) => (prev > 1 ? prev - 1 : 1));

  const handleAddToCart = () => {
    if (count > 0) {
      addProduct({
        id: productId,
        title: product.title,
        price: product.price,
        imgSrc: product.imgSrc,
        quantity: count,
      });
      alert("Product added to cart!");
    } else {
      alert("Please select at least 1 quantity.");
    }
  };

  return (
    <article className="product-details mt-32 p-6">
      <section className="flex gap-10">
        {/* Product Images */}
        <div className="flex items-center space-x-3 w-1/2 h-1/2">
          <div>
            {[...Array(4)].map((_, index) => (
              <img
                key={index}
                src={product.imgSrc}
                alt={product.title}
                className="w-20 product-image"
              />
            ))}
          </div>
          <div>
            <img
              src={product.imgSrc}
              alt={product.title}
              className="product-image w-80"
            />
          </div>
        </div>

        {/* Product Details */}
        <div className="flex flex-col gap-10">
          <h1 className="font-bold text-2xl">
            {product.title}{" "}
            <span className="p-1 font-normal text-lg text-green-800 bg-[#20B52633] rounded">
              In stock
            </span>
          </h1>
          <div className="price flex items-center font-semibold text-green-800 text-2xl">
            <TbCurrencyNaira />
            {product.price}
          </div>

          {/* Share Section */}
          <div className="flex items-center space-x-1">
            <p>Share item:</p>
            <div className="flex items-center space-x-5">
              <FaFacebook className="text-green-600 w-10 h-7" />
              <FaTwitter />
              <FaPinterestP />
              <FaInstagram />
            </div>
          </div>

          {/* Product Description */}
          <p className="pr-52">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
            facere nihil magnam sit pariatur incidunt corrupti eius unde fugiat
            dicta vel dignissimos quasi dolore, illum cumque inventore qui
            facilis nobis.
          </p>
          <div className="flex space-x-5">
            {/* Counter */}
            <div className="flex items-center gap-4 p-1 border-2 rounded-full">
              <button
                onClick={handleDecrement}
                className={`px-3 py-1 bg-gray-300 rounded-full -z-10 ${
                  count === 1 ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                -
              </button>
              <span className="font-bold">{count}</span>
              <button
                onClick={handleIncrement}
                className="px-3 py-1 bg-gray-300 text-white rounded-full"
              >
                +
              </button>
            </div>

            {/* Add to Cart Button */}
            <button
              onClick={handleAddToCart}
              className="px-4 py-2 w-96 bg-[#00B207] text-white rounded-full hover:bg-green-700"
            >
              Add to Cart
            </button>
          </div>
          <p className="font-bold">
            Category: <span className="font-normal">{product.category}</span>
          </p>
        </div>
      </section>
      <section>
        <Tabs />
        <RelatedProducts />
      </section>
    </article>
  );
};

export default ProductDetails;
