import { imageAssets } from "../assets";
import { TbCurrencyNaira } from "react-icons/tb";
import { getRatingStar } from "./Arrays";

export const data = [
  {
    img: <img src={imageAssets.avocado} className="w-44 mb-1" alt="Avocado" />,
    title: "Avocado",
    price: (
      <div className="flex items-center font-bold">
        <TbCurrencyNaira />
        1000
      </div>
    ),
    rating: (
      <div className="flex space-x-1">
        <div className="flex space-x-1 text-[#ff8a00]">{getRatingStar(4)}</div>
        <div className="flex space-x-1 text-[#ccc]">{getRatingStar(1)}</div>
      </div>
    ),
    button: (
      <button className="px-3 text-xs border border-purple-800 text-purple-800 font-bold">
        ADD
      </button>
    ),
    category: "fruits",
  },
  {
    img: <img src={imageAssets.cauliflower} className="w-44 mb-1" alt="Cauliflower" />,
    title: "Cauliflower",
    price: (
      <div className="flex items-center font-bold">
        <TbCurrencyNaira />
        1000
      </div>
    ),
    rating: (
      <div className="flex space-x-1">
        <div className="flex space-x-1 text-[#ff8a00]">{getRatingStar(4)}</div>
        <div className="flex space-x-1 text-[#ccc]">{getRatingStar(1)}</div>
      </div>
    ),
    button: (
      <button className="px-3 text-xs border border-purple-800 text-purple-800 font-bold">
        ADD
      </button>
    ),
    category: "vegetables",
  },
  {
    img: <img src={imageAssets.chineseCabbage} className="w-44 mb-1" alt="Chinese Cabbage" />,
    title: "Chinese Cabbage",
    price: (
      <div className="flex items-center font-bold">
        <TbCurrencyNaira />
        1000
      </div>
    ),
    rating: (
      <div className="flex space-x-1">
        <div className="flex space-x-1 text-[#ff8a00]">{getRatingStar(4)}</div>
        <div className="flex space-x-1 text-[#ccc]">{getRatingStar(1)}</div>
      </div>
    ),
    button: (
      <button className="px-3 text-xs border border-purple-800 text-purple-800 font-bold">
        ADD
      </button>
    ),
    category: "vegetables",
  },
  {
    img: <img src={imageAssets.cucumber} className="w-44 mb-1" alt="Cucumber" />,
    title: "Cucumber",
    price: (
      <div className="flex items-center font-bold">
        <TbCurrencyNaira />
        1000
      </div>
    ),
    rating: (
      <div className="flex space-x-1">
        <div className="flex space-x-1 text-[#ff8a00]">{getRatingStar(4)}</div>
        <div className="flex space-x-1 text-[#ccc]">{getRatingStar(1)}</div>
      </div>
    ),
    button: (
      <button className="px-3 text-xs border border-purple-800 text-purple-800 font-bold">
        ADD
      </button>
    ),
    rating: (
      <div className="flex space-x-1">
        <div className="flex space-x-1 text-[#ff8a00]">{getRatingStar(4)}</div>
        <div className="flex space-x-1 text-[#ccc]">{getRatingStar(1)}</div>
      </div>
    ),
    category: "vegetables",
  },
  {
    img: <img src={imageAssets.eggplants} className="w-44 mb-1" alt="Eggplant" />,
    title: "Eggplants",
    price: (
      <div className="flex items-center font-bold">
        <TbCurrencyNaira />
        1000
      </div>
    ),
    rating: (
      <div className="flex space-x-1">
        <div className="flex space-x-1 text-[#ff8a00]">{getRatingStar(4)}</div>
        <div className="flex space-x-1 text-[#ccc]">{getRatingStar(1)}</div>
      </div>
    ),
    button: (
      <button className="px-3 text-xs border border-purple-800 text-purple-800 font-bold">
        ADD
      </button>
    ),
    category: "vegetables",
  },
  {
    img: <img src={imageAssets.grapes} className="w-44 mb-1" alt="Grapes" />,
    title: "Grapes",
    price: (
      <div className="flex items-center font-bold">
        <TbCurrencyNaira />
        1000
      </div>
    ),
    rating: (
      <div className="flex space-x-1">
        <div className="flex space-x-1 text-[#ff8a00]">{getRatingStar(4)}</div>
        <div className="flex space-x-1 text-[#ccc]">{getRatingStar(1)}</div>
      </div>
    ),
    button: (
      <button className="px-3 text-xs border border-purple-800 text-purple-800 font-bold">
        ADD
      </button>
    ),
    category: "fruits",
  },
  {
    img: <img src={imageAssets.greenApples} className="w-44 mb-1" alt="Green Apples" />,
    title: "Green Apples",
    price: (
      <div className="flex items-center font-bold">
        <TbCurrencyNaira />
        1000
      </div>
    ),
    rating: (
      <div className="flex space-x-1">
        <div className="flex space-x-1 text-[#ff8a00]">{getRatingStar(4)}</div>
        <div className="flex space-x-1 text-[#ccc]">{getRatingStar(1)}</div>
      </div>
    ),
    button: (
      <button className="px-3 text-xs border border-purple-800 text-purple-800 font-bold">
        ADD
      </button>
    ),
    category: "fruits",
  },
  {
    img: <img src={imageAssets.greenCapsicum} className="w-44 mb-1" alt="Green Capsicum" />,
    title: "Green Capsicum",
    price: (
      <div className="flex items-center font-bold">
        <TbCurrencyNaira />
        1000
      </div>
    ),
    rating: (
      <div className="flex space-x-1">
        <div className="flex space-x-1 text-[#ff8a00]">{getRatingStar(4)}</div>
        <div className="flex space-x-1 text-[#ccc]">{getRatingStar(1)}</div>
      </div>
    ),
    button: (
      <button className="px-3 text-xs border border-purple-800 text-purple-800 font-bold">
        ADD
      </button>
    ),
    category: "vegetables",
  },
  {
    img: <img src={imageAssets.greenChili} className="w-44 mb-1" alt="Green Chilli" />,
    title: "Green Chilli",
    price: (
      <div className="flex items-center font-bold">
        <TbCurrencyNaira />
        1000
      </div>
    ),
    rating: (
      <div className="flex space-x-1">
        <div className="flex space-x-1 text-[#ff8a00]">{getRatingStar(4)}</div>
        <div className="flex space-x-1 text-[#ccc]">{getRatingStar(1)}</div>
      </div>
    ),
    button: (
      <button className="px-3 text-xs border border-purple-800 text-purple-800 font-bold">
        ADD
      </button>
    ),
    category: "vegetables",
  },
  {
    img: <img src={imageAssets.lettuce} className="w-44 mb-1" alt="Lettuce" />,
    title: "Lettuce",
    price: (
      <div className="flex items-center font-bold">
        <TbCurrencyNaira />
        1000
      </div>
    ),
    rating: (
      <div className="flex space-x-1">
        <div className="flex space-x-1 text-[#ff8a00]">{getRatingStar(4)}</div>
        <div className="flex space-x-1 text-[#ccc]">{getRatingStar(1)}</div>
      </div>
    ),
    button: (
      <button className="px-3 text-xs border border-purple-800 text-purple-800 font-bold">
        ADD
      </button>
    ),
    category: "vegetables",
  },
  {
    img: <img src={imageAssets.maize} className="w-44 mb-1" alt="Maize" />,
    title: "Maize",
    price: (
      <div className="flex items-center font-bold">
        <TbCurrencyNaira />
        1000
      </div>
    ),
    rating: (
      <div className="flex space-x-1">
        <div className="flex space-x-1 text-[#ff8a00]">{getRatingStar(4)}</div>
        <div className="flex space-x-1 text-[#ccc]">{getRatingStar(1)}</div>
      </div>
    ),
    button: (
      <button className="px-3 text-xs border border-purple-800 text-purple-800 font-bold">
        ADD
      </button>
    ),
    category: "vegetables",
  },
  {
    img: <img src={imageAssets.mangos} className="w-44 mb-1" alt="Mango" />,
    title: "Mango",
    price: (
      <div className="flex items-center font-bold">
        <TbCurrencyNaira />
        1000
      </div>
    ),
    rating: (
      <div className="flex space-x-1">
        <div className="flex space-x-1 text-[#ff8a00]">{getRatingStar(4)}</div>
        <div className="flex space-x-1 text-[#ccc]">{getRatingStar(1)}</div>
      </div>
    ),
    button: (
      <button className="px-3 text-xs border border-purple-800 text-purple-800 font-bold">
        ADD
      </button>
    ),
    category: "fruits",
  },
  {
    img: <img src={imageAssets.okra} className="w-44 mb-1" alt="Okra" />,
    title: "Okra",
    price: (
      <div className="flex items-center font-bold">
        <TbCurrencyNaira />
        1000
      </div>
    ),
    rating: (
      <div className="flex space-x-1">
        <div className="flex space-x-1 text-[#ff8a00]">{getRatingStar(4)}</div>
        <div className="flex space-x-1 text-[#ccc]">{getRatingStar(1)}</div>
      </div>
    ),
    button: (
      <button className="px-3 text-xs border border-purple-800 text-purple-800 font-bold">
        ADD
      </button>
    ),
    category: "vegetables",
  },
  {
    img: <img src={imageAssets.orange} className="w-44 mb-1" alt="Orange" />,
    title: "Orange",
    price: (
      <div className="flex items-center font-bold">
        <TbCurrencyNaira />
        1000
      </div>
    ),
    rating: (
      <div className="flex space-x-1">
        <div className="flex space-x-1 text-[#ff8a00]">{getRatingStar(4)}</div>
        <div className="flex space-x-1 text-[#ccc]">{getRatingStar(1)}</div>
      </div>
    ),
    button: (
      <button className="px-3 text-xs border border-purple-800 text-purple-800 font-bold">
        ADD
      </button>
    ),
    category: "fruits",
  },
  {
    img: <img src={imageAssets.peach} className="w-44 mb-1" alt="Peach" />,
    title: "Peach",
    price: (
      <div className="flex items-center font-bold">
        <TbCurrencyNaira />
        1000
      </div>
    ),
    rating: (
      <div className="flex space-x-1">
        <div className="flex space-x-1 text-[#ff8a00]">{getRatingStar(4)}</div>
        <div className="flex space-x-1 text-[#ccc]">{getRatingStar(1)}</div>
      </div>
    ),
    button: (
      <button className="px-3 text-xs border border-purple-800 text-purple-800 font-bold">
        ADD
      </button>
    ),
    category: "fruits",
  },
  {
    img: <img src={imageAssets.pineapple} className="w-44 mb-1" alt="Pineapple" />,
    title: "Pineapple",
    price: (
      <div className="flex items-center font-bold">
        <TbCurrencyNaira />
        1000
      </div>
    ),
    rating: (
      <div className="flex space-x-1">
        <div className="flex space-x-1 text-[#ff8a00]">{getRatingStar(4)}</div>
        <div className="flex space-x-1 text-[#ccc]">{getRatingStar(1)}</div>
      </div>
    ),
    button: (
      <button className="px-3 text-xs border border-purple-800 text-purple-800 font-bold">
        ADD
      </button>
    ),
    category: "fruits",
  },
  {
    img: <img src={imageAssets.pomegranate} className="w-44 mb-1" alt="Pomegranate" />,
    title: "Pomegranate",
    price: (
      <div className="flex items-center font-bold">
        <TbCurrencyNaira />
        1000
      </div>
    ),
    rating: (
      <div className="flex space-x-1">
        <div className="flex space-x-1 text-[#ff8a00]">{getRatingStar(4)}</div>
        <div className="flex space-x-1 text-[#ccc]">{getRatingStar(1)}</div>
      </div>
    ),
    button: (
      <button className="px-3 text-xs border border-purple-800 text-purple-800 font-bold">
        ADD
      </button>
    ),
    category: "fruits",
  },
  {
    img: <img src={imageAssets.potatos} className="w-44 mb-1" alt="Potatos" />,
    title: "Potatos",
    price: (
      <div className="flex items-center font-bold">
        <TbCurrencyNaira />
        1000
      </div>
    ),
    rating: (
      <div className="flex space-x-1">
        <div className="flex space-x-1 text-[#ff8a00]">{getRatingStar(4)}</div>
        <div className="flex space-x-1 text-[#ccc]">{getRatingStar(1)}</div>
      </div>
    ),
    button: (
      <button className="px-3 text-xs border border-purple-800 text-purple-800 font-bold">
        ADD
      </button>
    ),
    category: "vegetables",
  },
  {
    img: <img src={imageAssets.rasberries} className="w-44 mb-1" alt="Rasberries" />,
    title: "Rasberries",
    price: (
      <div className="flex items-center font-bold">
        <TbCurrencyNaira />
        1000
      </div>
    ),
    rating: (
      <div className="flex space-x-1">
        <div className="flex space-x-1 text-[#ff8a00]">{getRatingStar(4)}</div>
        <div className="flex space-x-1 text-[#ccc]">{getRatingStar(1)}</div>
      </div>
    ),
    button: (
      <button className="px-3 text-xs border border-purple-800 text-purple-800 font-bold">
        ADD
      </button>
    ),
    category: "fruits",
  },
  {
    img: <img src={imageAssets.redCapsicum} className="w-44 mb-1" alt="Red Capsicum" />,
    title: "Red Capsicum",
    price: (
      <div className="flex items-center font-bold">
        <TbCurrencyNaira />
        1000
      </div>
    ),
    rating: (
      <div className="flex space-x-1">
        <div className="flex space-x-1 text-[#ff8a00]">{getRatingStar(4)}</div>
        <div className="flex space-x-1 text-[#ccc]">{getRatingStar(1)}</div>
      </div>
    ),
    button: (
      <button className="px-3 text-xs border border-purple-800 text-purple-800 font-bold">
        ADD
      </button>
    ),
    category: "vegetables",
  },
  {
    img: <img src={imageAssets.redChili} className="w-44 mb-1" alt="Red Chilli" />,
    title: "Red Chilli",
    price: (
      <div className="flex items-center font-bold">
        <TbCurrencyNaira />
        1000
      </div>
    ),
    rating: (
      <div className="flex space-x-1">
        <div className="flex space-x-1 text-[#ff8a00]">{getRatingStar(4)}</div>
        <div className="flex space-x-1 text-[#ccc]">{getRatingStar(1)}</div>
      </div>
    ),
    button: (
      <button className="px-3 text-xs border border-purple-800 text-purple-800 font-bold">
        ADD
      </button>
    ),
    category: "vegetables",
  },
  {
    img: <img src={imageAssets.tomatos} className="w-44 mb-1" alt="Tomatos" />,
    title: "Tomatos",
    price: (
      <div className="flex items-center font-bold">
        <TbCurrencyNaira />
        1000
      </div>
    ),
    rating: (
      <div className="flex space-x-1">
        <div className="flex space-x-1 text-[#ff8a00]">{getRatingStar(4)}</div>
        <div className="flex space-x-1 text-[#ccc]">{getRatingStar(1)}</div>
      </div>
    ),
    button: (
      <button className="px-3 text-xs border border-purple-800 text-purple-800 font-bold">
        ADD
      </button>
    ),
    category: "vegetables",
  },
  {
    img: <img src={imageAssets.strawberries} className="w-44 mb-1" alt="Stawberries" />,
    title: "Stawberries",
    price: (
      <div className="flex items-center font-bold">
        <TbCurrencyNaira />
        1000
      </div>
    ),
    rating: (
      <div className="flex space-x-1">
        <div className="flex space-x-1 text-[#ff8a00]">{getRatingStar(4)}</div>
        <div className="flex space-x-1 text-[#ccc]">{getRatingStar(1)}</div>
      </div>
    ),
    button: (
      <button className="px-3 text-xs border border-purple-800 text-purple-800 font-bold">
        ADD
      </button>
    ),
    category: "fruits",
  },
];
