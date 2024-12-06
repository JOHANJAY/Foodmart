import { imageAssets } from "../assets";

const About = () => {
  return (
    <article className="mt-36 p-20 flex flex-col gap-10">
      <section className="flex gap-20 ">
        <div className="w-1/2">
          <h2 className="font-bold text-4xl">
            100% Trusted Organic Food Store
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Perspiciatis accusamus voluptatem aperiam aliquid laboriosam,
            repudiandae ad quae dolore earum non blanditiis illum voluptate
            velit architecto hic ex, minima pariatur voluptates.
          </p>
        </div>
        <div className="w-1/2 flex justify-center">
          <img src={imageAssets.cook2} alt="Cook" />
        </div>
      </section>
      <section className="flex gap-20 ">
      <div className="w-1/2 flex justify-center">
          <img src={imageAssets.delivery} alt="Delivery" />
        </div>
        <div className="w-1/2">
          <h2 className="font-bold text-4xl">
            100% Trusted Organic Food Store
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Perspiciatis accusamus voluptatem aperiam aliquid laboriosam,
            repudiandae ad quae dolore earum non blanditiis illum voluptate
            velit architecto hic ex, minima pariatur voluptates.
          </p>
        </div>
      </section>
      <section>
        <h2 className="pb-10 font-bold text-4xl text-center">Our Awesome Team</h2>
        <div className="flex gap-3 justify-center">
          <img src={imageAssets.ontaria} alt="Ontaria" />
          <img src={imageAssets.sophia} alt="Sophia" />
          <img src={imageAssets.dawood} alt="Dawood" />
        </div>
      </section>
    </article>
  );
};
export default About;
