import { sale } from "../../../db/Arrays";

const Sale = () => {
  return (
    <div className="py-3">
      <h2 className="pb-2 font-bold text-sm">Sale Products</h2>
      <div>
        {sale.map((item) => (
          <div
            key={item.id}
            className="mb-2 rounded flex space-x-2 border hover:shadow-sm hover:shadow-green-600"
          >
            <div className="w-20">{item.img}</div>
            <div className="flex flex-col">
              <h2 className="text-xs font-thin">{item.name}</h2>
              <div>{item.price}</div>
              <div className="">{item.rating}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Sale;
