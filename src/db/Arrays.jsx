import { imageAssets } from "../assets";
import { FaStar } from "react-icons/fa6";
import { TbCurrencyNaira } from "react-icons/tb";
import { IoIosCheckmarkCircle } from "react-icons/io";

export const getRatingStar = (rating) => {
  return Array.from({ length: rating }, (_, index) => <FaStar key={index} />);
};

const renderRating = (rating) => (
  <div className="flex space-x-1">
    <div className="flex space-x-1 text-[#ff8a00]">{getRatingStar(rating)}</div>
    <div className="flex space-x-1 text-[#ccc]">
      {getRatingStar(5 - rating)}
    </div>
  </div>
);

renderRating();

export const premiumSubs = [
  {
    id: 1,
    title: "Discount Products",
    details:
      "As a premium subscriber, you get early acess to discounted products",
  },

  {
    id: 2,
    title: "Scheduled Delivery",
    details:
      "As a premium subscriber, you can schedule a convenient time of delivery",
  },

  {
    id: 3,
    title: "Cash on Delivery",
    details: "As a premium subscriber, you can pay on delivery",
  },
];

export const categories = [
  {
    img: <img className="w-20" src={imageAssets.vegetables} alt="Vegetables" />,
    name: "Vegetables",
  },
  {
    img: <img className="w-20" src={imageAssets.fruits} alt="Fruits" />,
    name: "Fruits",
  },
  {
    img: <img className="w-20" src={imageAssets.grains} alt="Grains" />,
    name: "Grain",
  },
  {
    img: <img className="w-20" src={imageAssets.groceries} alt="Groceries" />,
    name: "Groceries",
  },
  {
    img: <img className="w-20" src={imageAssets.bevrages} alt="Bevrages" />,
    name: "Bevrages",
  },
  {
    img: (
      <img className="w-20" src={imageAssets.edibleOils} alt="Edible Oils" />
    ),
    name: "Edible Oils",
  },
];

export const popularVendors = [
  {
    id: 1,
    img: <img src={imageAssets.Amys} alt="Amy Foods" />,
    name: "Amy Foods",
    location: "Surulere",
    rating: getRatingStar(5),
  },
  {
    id: 2,
    img: <img src={imageAssets.Frisa} alt="Frisa Mart" />,
    name: "Frisa Mart",
    location: "Victoria Island",
    rating: getRatingStar(4),
  },
  {
    id: 3,
    img: <img src={imageAssets.Lola} alt="Lola Palace" />,
    name: "Lola Palace",
    location: "Igando",
    rating: getRatingStar(5),
  },
  {
    id: 4,
    img: <img src={imageAssets.Foa} alt="Foa Mart" />,
    name: "Foa Mart",
    location: "Ikeja",
    rating: getRatingStar(4),
  },
];

export const sale = [
  {
    id: 1,
    img: <img src={imageAssets.redCapsicum} alt="Red Capsicum" />,
    name: "Red Capsicum",
    price: (
      <div className="flex">
        <div className="flex items-center">
          <TbCurrencyNaira />
          <span>1000</span>
        </div>
        <del className="font-thin flex items-center">
          <TbCurrencyNaira />
          <del>1200</del>
        </del>
      </div>
    ),
    rating: (
      <div className="flex space-x-1">
        <div className="flex space-x-1 text-[#ff8a00]">{getRatingStar(4)}</div>
        <div className="flex space-x-1 text-[#ccc]">{getRatingStar(1)}</div>
      </div>
    ),
  },
  {
    id: 2,
    img: <img src={imageAssets.mangos} alt="Mango" />,
    name: "Mango",
    price: (
      <div className="flex">
        <div className="flex items-center">
          <TbCurrencyNaira />
          <span>1000</span>
        </div>
        <del className="font-thin flex items-center">
          <TbCurrencyNaira />
          <del>1200</del>
        </del>
      </div>
    ),
    rating: (
      <div className="flex space-x-1">
        <div className="flex space-x-1 text-[#ff8a00]">{getRatingStar(4)}</div>
        <div className="flex space-x-1 text-[#ccc]">{getRatingStar(1)}</div>
      </div>
    ),
  },
  {
    id: 3,
    img: <img src={imageAssets.greenCapsicum} alt="Green Capsicum" />,
    name: "Green Capsicum",
    price: (
      <div className="flex">
        <div className="flex items-center">
          <TbCurrencyNaira />
          <span>1000</span>
        </div>
        <del className="font-thin flex items-center">
          <TbCurrencyNaira />
          <del>1200</del>
        </del>
      </div>
    ),
    rating: (
      <div className="flex space-x-1">
        <div className="flex space-x-1 text-[#ff8a00]">{getRatingStar(4)}</div>
        <div className="flex space-x-1 text-[#ccc]">{getRatingStar(1)}</div>
      </div>
    ),
  },
];

export const tags = [
  "Healthy",
  "Low fat",
  "Vegetarian",
  "Kids food",
  "Vitamins",
  "Bread",
  "Meat",
  "Snacks",
  "Tiffin",
  "Lunch",
  "Dinner",
  "Breakfasr",
  "Fruit",
];

export const labels = ["All", "Vegetables", "Fruits", "Grain"];

export const tabs = [
  {
    id: 1,
    title: "Description",
    content: (
      <div className="flex flex-col gap-3 font-light">
        <p>Grapes are Fruits</p>
        <div>
          {Array.from({ length: 5 }, (_, index) => (
            <div key={index} className="flex items-center">
              <IoIosCheckmarkCircle className="text-green-500" />
              <span className="ml-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, quod.
              </span>
            </div>
          ))}
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus
          aliquid enim animi ducimus ex quod libero recusandae repudiandae
          dolorum? Doloribus laudantium aut reiciendis dignissimos aspernatur!
          Labore iure quas dolore quod!
        </p>
      </div>
    ),
  },
  {
    id: 2,
    title: "Available Vendors",
    content: (
      <div className="flex gap-10">
        <img src={imageAssets.Amys} className="w-64 h-60 " alt="Amys" />
        <img src={imageAssets.Foa} className="w-64 h-60 " alt="" />
      </div>
    ),
  },
  {
    id: 3,
    title: "Customer Reviews",
    content: (
      <div>
        <div className="flex gap-3">
          <img src={imageAssets.Amys} className="w-14" alt="Amys" />
          <div className="flex space-x-2 items-center">
            <img
              src={imageAssets.Profile}
              alt="Profile"
              className="w-14"
              srcset=""
            />
            <div>
              <p className="font-bold">Kemi</p>
              {renderRating(4)}
            </div>
          </div>
        </div>
        <p className="font-light">
          I got my produce from Amy Foods, and I dont regret it one bit.
        </p>
      </div>
    ),
  },
];
