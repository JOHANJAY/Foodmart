import { tags } from "../../../db/Arrays";

const PopTags = () => {
  return (
    <div className="py-2">
      <h2 className="font-bold text-sm">Popular Tags</h2>
      <div>
        {tags.map((item, id) => (
          <button
            key={id}
            className="px-3 py-1 mr-2 my-2 rounded-full bg-slate-200 focus:bg-green-600 focus:text-white font-thin text-xs"
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
};
export default PopTags;
