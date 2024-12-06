import { data } from "../../db/data";

const Products = () => {
  return (
    <article className="w-fit grid grid-cols-6 mt-10">
      {data.map((item, id) => (
        <section
          key={id}
          className="w-48 m-1 p-2 cursor-pointer border border-[1px solid #e6e6e6] hover:border hover:border-[1px solid #2c742f] hover:shadow-sm hover:shadow-[#2c742f] rounded"
        >
          {item.img}
          <section className="w-44 flex items-center space-x-7">
            <div>
              <h3>{item.title}</h3>
              {item.price}
              <section className="flex space-x-1">{item.rating}</section>
            </div>
            {item.button}
          </section>
        </section>
      ))}
    </article>
  );
};
export default Products;
