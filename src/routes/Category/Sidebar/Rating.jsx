import { useState } from "react";
import { getRatingStar } from "../../../db/Arrays";

//Remember to commit and push

const Rating = () => {
  const [checked, setChecked] = useState([]);

  //handlecheck
  const handleCheck = (e) => {
    const { name, checked } = e.target;
    if (checked) {
      setChecked((prev) => [...prev, name]);
    } else {
      setChecked((prev) => prev.filter((item) => item !== name));
    }
  };

  console.log(checked);

  return (
    <div className="py-2 border-b">
      <h2 className="font-bold text-sm">Rating</h2>
      <div>
        <label className="pb-1 flex space-x-1 items-center">
          <input
            type="checkbox"
            name="5.0"
            onChange={handleCheck}
            className="accent-green-600"
          />
          <div className="flex space-x-1 text-[#ff8a00]">
            {getRatingStar(5)}
          </div>
          <span className="ml-2">5.0</span>
        </label>
        <label className="pb-1 flex space-x-1 items-center">
          <input
            type="checkbox"
            name="4.0 & Up"
            onChange={handleCheck}
            className="accent-green-600"
          />
          <div className="flex space-x-1 text-[#ff8a00]">
            {getRatingStar(4)}
          </div>
          <div className="flex space-x-1 text-[#ccc]">{getRatingStar(1)}</div>
          <span className="ml-2">4.0 & Up</span>
        </label>
        <label className="pb-1 flex space-x-1 items-center">
          <input
            type="checkbox"
            name="3.0 & Up"
            onChange={handleCheck}
            className="accent-green-600"
          />
          <div className="flex space-x-1 text-[#ff8a00]">
            {getRatingStar(3)}
          </div>
          <div className="flex space-x-1 text-[#ccc]">{getRatingStar(2)}</div>
          <span className="ml-2">3.0 & Up</span>
        </label>
        <label className="pb-1 flex space-x-1 items-center">
          <input
            type="checkbox"
            name="2.0 & Up"
            onChange={handleCheck}
            className="accent-green-600"
          />
          <div className="flex space-x-1 text-[#ff8a00]">
            {getRatingStar(3)}
          </div>
          <div className="flex space-x-1 text-[#ccc]">{getRatingStar(2)}</div>
          <span className="ml-2">2.0 & Up</span>
        </label>
        <label className="pb-1 flex space-x-1 items-center">
          <input
            type="checkbox"
            name="1.0 & Up"
            onChange={handleCheck}
            className="accent-green-600"
          />
          <div className="flex space-x-1 text-[#ff8a00]">
            {getRatingStar(1)}
          </div>
          <div className="flex space-x-1 text-[#ccc]">{getRatingStar(4)}</div>
          <span className="ml-2">1.0 & Up</span>
        </label>
      </div>
    </div>
  );
};
export default Rating;
