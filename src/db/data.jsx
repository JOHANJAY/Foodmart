import { imageAssets } from "../assets";
import { TbCurrencyNaira } from "react-icons/tb";
import { getRatingStar } from "./Arrays";
import AddBtn from "../components/AddBtn";

export const data = [
  {
    imgSrc: imageAssets.avocado,
    title: "Avocado",
    price: 1000,
    rating: 4,
    category: "fruits",
  },
  {
    imgSrc: imageAssets.cauliflower,
    title: "Cauliflower",
    price: 1000,
    rating: 4,
    category: "vegetables",
  },
  {
    imgSrc: imageAssets.chineseCabbage,
    title: "Chinese Cabbage",
    price: 1000,
    rating: 4,
    category: "vegetables",
  },
  {
    imgSrc: imageAssets.cucumber,
    title: "Cucumber",
    price: 1000,
    rating: 4,
    category: "vegetables",
  },
  {
    imgSrc: imageAssets.eggplants,
    title: "Eggplants",
    price: 1000,
    rating: 4,
    category: "vegetables",
  },
  {
    imgSrc: imageAssets.grapes,
    title: "Grapes",
    price: 1000,
    rating: 4,
    category: "fruits",
  },
  {
    imgSrc: imageAssets.greenApples,
    title: "Green Apples",
    price: 1000,
    rating: 4,
    category: "fruits",
  },
  {
    imgSrc: imageAssets.greenCapsicum,
    title: "Green Capsicum",
    price: 1000,
    rating: 4,
    category: "vegetables",
  },
  {
    imgSrc: imageAssets.greenChili,
    title: "Green Chilli",
    price: 1000,
    rating: 4,
    category: "vegetables",
  },
  {
    imgSrc: imageAssets.lettuce,
    title: "Lettuce",
    price: 1000,
    rating: 4,
    category: "vegetables",
  },
  {
    imgSrc: imageAssets.maize,
    title: "Maize",
    price: 1000,
    rating: 4,
    category: "vegetables",
  },
  {
    imgSrc: imageAssets.mangos,
    title: "Mango",
    price: 1000,
    rating: 4,
    category: "fruits",
  },
  {
    imgSrc: imageAssets.okra,
    title: "Okra",
    price: 1000,
    rating: 4,
    category: "vegetables",
  },
  {
    imgSrc: imageAssets.orange,
    title: "Orange",
    price: 1000,
    rating: 4,
    category: "fruits",
  },
  {
    imgSrc: imageAssets.peach,
    title: "Peach",
    price: 1000,
    rating: 4,
    category: "fruits",
  },
  {
    imgSrc: imageAssets.pineapple,
    title: "Pineapple",
    price: 1000,
    rating: 4,
    category: "fruits",
  },
  {
    imgSrc: imageAssets.pomegranate,
    title: "Pomegranate",
    price: 1000,
    rating: 4,
    category: "fruits",
  },
  {
    imgSrc: imageAssets.potatos,
    title: "Potatos",
    price: 1000,
    rating: 4,
    category: "vegetables",
  },
  {
    imgSrc: imageAssets.rasberries,
    title: "Rasberries",
    price: 1000,
    rating: 4,
    category: "fruits",
  },
  {
    imgSrc: imageAssets.redCapsicum,
    title: "Red Capsicum",
    price: 1000,
    rating: 4,
    category: "vegetables",
  },
  {
    imgSrc: imageAssets.redChili,
    title: "Red Chilli",
    price: 1000,
    rating: 4,
    category: "vegetables",
  },
  {
    imgSrc: imageAssets.tomatos,
    title: "Tomatos",
    price: 1000,
    rating: 4,
    category: "vegetables",
  },
  {
    imgSrc: imageAssets.strawberries,
    title: "Stawberries",
    price: 1000,
    rating: 4,
    category: "fruits",
  },
];

const renderPrice = (price) => (
  <div className="flex items-center font-bold">
    <TbCurrencyNaira />
    {price}
  </div>
);

const renderRating = (rating) => (
  <div className="flex space-x-1">
    <div className="flex space-x-1 text-[#ff8a00]">{getRatingStar(rating)}</div>
    <div className="flex space-x-1 text-[#ccc]">{getRatingStar(5 - rating)}</div>
  </div>
);
const renderData = data.map((item) => ({
  img: <img src={item.imgSrc} className="w-44 mb-1" alt={item.title} />,
  title: item.title,
  price: renderPrice(item.price),
  rating: renderRating(item.rating),
  button: <AddBtn />,
  category: item.category,
}));

export default renderData;