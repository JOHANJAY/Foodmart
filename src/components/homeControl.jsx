import banner from "../assets/img/banner-SU.png";
import home from "../assets/img/home-back.png";

const HomeControl = () => {
  return (
    <div
      className="mt-6 bg-cover bg-center bg-no-repeat h-24 flex justify-start items-center text-[#999999] text- px-7"
      style={{ backgroundImage: `url(${banner})` }}
    >
      <div>
        <h5 className="font-bold flex align-middle">
          {" "}
          <img src={home} /> {"\u003E"} Account {"\u003E"} Login
        </h5>
      </div>
    </div>
  );
};

export default HomeControl;
