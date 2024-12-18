import { imageAssets } from "../assets";

const DiscountHome = () => {
  return (
    <div className="p-5 flex justify-between">
      <img src={imageAssets.cook1} alt="Cook" />
      <img src={imageAssets.strawberry} alt="Cook" />
      <div className="mr-5 flex flex-col bg-[#8E44AD61] py-5 items-center px-1 rounded-2xl">
        <p className="font-bold pb-1 text-xl">5% OFF</p>
        <p className="pb-3">For new member sign up</p>
        <input
          type="text"
          placeholder="Email Address"
          className="mb-5 px-2 py-5 w-full outline-none  shadow-md bg-slate-200"
        />
        <input
          type="text"
          placeholder="Password"
          className=" px-2 py-5 w-full outline-none  shadow-md bg-slate-200"
        />
        <button className="bg-green-400 hover:bg-green-500 px-8 py-2 text-white mt-5">
          Sign Up
        </button>
      </div>
    </div>
  );
};
export default DiscountHome;
