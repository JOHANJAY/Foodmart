import { MdOutlineSignalCellularAlt } from "react-icons/md";
import { IoIosWifi } from "react-icons/io";
import { BiSolidBattery } from "react-icons/bi";
import Logo from "./Logo";

const ShopFaster = () => {
  return (
    <article className="py-5 px-36 mb-10 bg-[#D4B8E0] flex justify-between">
      <section className="text-center py-24 px-44">
        <p className="text-2xl text- font-bold">Shop Faster With</p>
        <p className="text-2xl font-bold">FoodMart App</p>
        <p className="text-xs pb-2">Available on both ios Android</p>
        <div className="flex gap-3">
          <p className="py-1 px-5  text-transparent bg-[#D9D9D9]">Appleii</p>
          <p className="py-1 px-5  text-transparent bg-[#D9D9D9]">Appleii</p>
        </div>
      </section>
      <section className="p-3 rounded-3xl bg-white">
        <div className="flex justify-between pb-5">
          <p className="font-bold text-xs">9:41</p>
          <div className="flex">
            <MdOutlineSignalCellularAlt />
            <IoIosWifi />
            <BiSolidBattery />
          </div>
        </div>
        <div>
          <Logo isContact={true} />
        </div>
        <div className="flex justify-between p-3">
          <p className="font-semibold">Customer</p>
          <p className="font-light">Vendor</p>
        </div>
        <h2 className="font-bold text-center">Sign up</h2>
        <p className="py-2 pl-2 pr-4 mb-3 bg-[#ECF0F1] shadow-md shadow-slate-300">
          Username/Phone Number
        </p>
        <p className="py-2 pl-2 pr-4 mb-3 bg-[#ECF0F1] shadow-md shadow-slate-300">
          Password
        </p>
        <div className="flex justify-beteen gap-3">
          <p className="font-bold">
            <span className="px-1 mr-1 text-transparent bg-slate-400">o</span>
            Remember me
          </p>
          <p className="text-blue-700">Forgot Password?</p>
        </div>
        <div className="flex justify-center">
          <button className=" py-3 px-14 mt-5 rounded-full text-white bg-[#77C92E] cursor-default">
            LOG in
          </button>
        </div>
      </section>
    </article>
  );
};
export default ShopFaster;
