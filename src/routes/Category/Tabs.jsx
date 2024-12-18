import { useState } from "react";
import { tabs } from "../../db/Arrays";
import { imageAssets } from "../../assets";
const Tabs = () => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  return (
    <div>
      <div className="pl-96 pt-14">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`flex-1 text-center py-2 px-4 font-medium ${
              activeTab === tab.id
                ? "border-b-4 border-green-800"
                : "text-gray-700"
            }`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.title}
          </button>
        ))}
      </div>
      <div className="flex gap-20">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className={activeTab === tab.id ? "block p-5 w-2/3" : "hidden"}
          >
            {tab.content}
          </div>
        ))}
        <div>
        <img src={imageAssets.imag} alt="Image" />
        </div>
      </div>
    </div>
  );
};
export default Tabs;
