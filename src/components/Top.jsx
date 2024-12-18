import { imageAssets } from "../assets";
import data from "../db/data";
import { getRatingStar } from "../db/Arrays";

const Top = () => {
  return (
    <article className="flex justify-between p-5">
      <section>
        <h2 className="underline underline-offset-4 decoration-green-600 decoration-2 mb-3">Top Sells</h2>
        <div className="flex space-x-3 mb-5">
          <div className="bg-slate-200 p-5">
            <img src={imageAssets.pineapple} alt="" className="w-40" />
          </div>
          <div className="pt-5 flex flex-col items-center font-bold">
            <p>{data[15].title} 1kg</p>
            <p className="flex">{getRatingStar(4)}</p>
            <p>{data[15].price}</p>
          </div>
        </div>
        <div className="flex space-x-3 mb-5">
          <div className="bg-slate-200 p-5">
            <img src={imageAssets.pineapple} alt="" className="w-40" />
          </div>
          <div className="pt-5 flex flex-col items-center font-bold">
            <p>{data[15].title} 1kg</p>
            <p className="flex">{getRatingStar(4)}</p>
            <p>{data[15].price}</p>
          </div>
        </div>
      </section>
      <section>
        <h2 className="underline underline-offset-4 decoration-green-600 decoration-2 mb-3">Top Rated</h2>
        <div className="flex space-x-3 mb-5">
          <div className="bg-slate-200 p-5">
            <img src={imageAssets.pineapple} alt="" className="w-40" />
          </div>
          <div className="pt-5 flex flex-col items-center font-bold">
            <p>{data[15].title} 1kg</p>
            <p className="flex">{getRatingStar(4)}</p>
            <p>{data[15].price}</p>
          </div>
        </div>
        <div className="flex space-x-3 mb-5">
          <div className="bg-slate-200 p-5">
            <img src={imageAssets.pineapple} alt="" className="w-40" />
          </div>
          <div className="pt-5 flex flex-col items-center font-bold">
            <p>{data[15].title} 1kg</p>
            <p className="flex">{getRatingStar(4)}</p>
            <p>{data[15].price}</p>
          </div>
        </div>
      </section>
      <section>
        <h2 className="underline underline-offset-4 decoration-green-600 decoration-2 mb-3">Trending</h2>
        <div className="flex space-x-3 mb-5">
          <div className="bg-slate-200 p-5">
            <img src={imageAssets.pineapple} alt="" className="w-40" />
          </div>
          <div className="pt-5 flex flex-col items-center font-bold">
            <p>{data[15].title} 1kg</p>
            <p className="flex">{getRatingStar(4)}</p>
            <p>{data[15].price}</p>
          </div>
        </div>
        <div className="flex space-x-3 mb-5">
          <div className="bg-slate-200 p-5">
            <img src={imageAssets.pineapple} alt="" className="w-40" />
          </div>
          <div className="pt-5 flex flex-col items-center font-bold">
            <p>{data[15].title} 1kg</p>
            <p className="flex">{getRatingStar(4)}</p>
            <p>{data[15].price}</p>
          </div>
        </div>
      </section>
    </article>
  );
};
export default Top;
