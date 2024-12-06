import { premiumSubs } from "../db/Arrays";
import { imageAssets } from "../assets";

const Hero = () => {
  return (
    <section className="w-screen mt-3 bg-gray-300 flex items-center gap-9">
      <div className="pl-5">
        <h1 className="pb-10 font-bold italic text-2xl text-center">
          Be a premium subscriber and enjoy the following perks
        </h1>
        <div className="pl-10 pr-10 flex justify-between gap-28">
          {premiumSubs.map((item) => {
            return (
              <div key={item.id} className="w-52 h-32 p-2 text-sm bg-gray-400 shadow-md shadow-gray-500">
                <h2 className="pb-3 font-bold">{item.title}</h2>
                <p>{item.details}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <img src={imageAssets.EllaOlssonhero} alt="Hero Image" className="w-80 h-52" />
      </div>
    </section>
  );
};
export default Hero;
