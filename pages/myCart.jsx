import useCartStore from "../src/routes/Category/Sidebar/UseStore";
import { getRatingStar } from "../src/db/Arrays";
import { TbCurrencyNaira } from "react-icons/tb";
import Delivery from "../src/components/Delivery";

const renderRating = (rating) => (
  <div className="flex space-x-1">
    <div className="flex space-x-1 text-[#ff8a00]">{getRatingStar(rating)}</div>
    <div className="flex space-x-1 text-[#ccc]">
      {getRatingStar(5 - rating)}
    </div>
  </div>
);

const MyCart = () => {
  const { cart, removeProduct } = useCartStore();

  // Calculate subtotal
  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <article className="mt-36 p-10 w-screen h-screen">
      <h2 className="font-bold text-2xl pb-5">Cart</h2>
      <div className="flex gap-20 w-screen">
        <section className="flex flex-col gap-2">
          {cart.length > 0 ? (
            cart.map((item) => (
              <div
                key={item.id}
                className="p-2 flex justify-between items-center border-2 shadow-md"
              >
                <div className="flex gap-4">
                  <img
                    src={item.imgSrc}
                    alt={item.title}
                    className="w-[50px]"
                  />
                  <div className="flex flex-col gap-20">
                    <div className="w-52 h-64 flex flex-col">
                      <p className="font-bold">{item.title}</p>
                      <p>{renderRating(4)}</p>
                    </div>
                    <div>
                      <p className="flex items-center">
                        <TbCurrencyNaira />
                        {item.price} x {item.quantity}
                      </p>
                    </div>
                  </div>
                  <button
                  onClick={() => removeProduct(item.id)}
                  className="text-red-500 text-xl font-bold cursor-pointer"
                >
                  ✕
                </button>
                </div>
              </div>
            ))
          ) : (
            <p>Your cart is empty.</p>
          )}
        </section>

        {/* Show Delivery component only if cart has items */}
        {cart.length > 0 && (
          <section>
            <Delivery subtotal={subtotal} />
          </section>
        )}
      </div>
    </article>
  );
};

export default MyCart;
