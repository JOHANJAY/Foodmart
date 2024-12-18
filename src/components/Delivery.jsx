import { TbCurrencyNaira } from "react-icons/tb";

const Delivery = ({ subtotal }) => {
  const deliveryFee = subtotal > 0 ? 500 : 0; // Example: Delivery fee is 500 if subtotal > 0

  return (
    <div className="border-2 flex flex-col p-3 w-96 gap-3">
      <div className="flex items-center justify-between">
        <label className="font-bold p-1 cursor-pointer active:bg-slate-200 rounded">
          <input
            type="radio"
            name="delivery"
            className="accent-green-700"
            value="scheduled"
            onChange={(e) => setSelected(e.target.value)}
          />
          Scheduled Delivery
        </label>
        <label className="font-bold p-1 cursor-pointer active:bg-slate-200 rounded">
          <input
            type="radio"
            name="delivery"
            value="standard"
            className="accent-green-700"
            onChange={(e) => setSelected(e.target.value)}
          />
          Standard Delivery
        </label>
      </div>
      <div className="flex justify-between p-1 border rounded shadow-md text-sm">
        <div>
          <p>Subtotal</p>
          <p>Delivery</p>
        </div>
        <div>
          <p className="flex items-center">
            <TbCurrencyNaira /> {subtotal}
          </p>
          <p className="flex items-center">
            <TbCurrencyNaira /> {deliveryFee}
          </p>
        </div>
      </div>
      <div className="flex justify-between p-1 border rounded shadow-md font-bold">
        <div>
          <p>Total</p>
        </div>
        <div>
          <p className="flex items-center">
            <TbCurrencyNaira /> {subtotal + deliveryFee}
          </p>
        </div>
      </div>
      <div className="flex justify-center">
        <button className="w-2/3 bg-green-700 hover:bg-green-900 text-white p-2 rounded-full mt-3">
          Checkout
        </button>
      </div>
      <div className="text-xs">
        <p>
          This site is protected by reCAPTCHA and the Google Privacy Policy and
          Terms of Service apply.
        </p>
      </div>
    </div>
  );
};

export default Delivery;
