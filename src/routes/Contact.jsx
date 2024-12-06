import { FaMailBulk } from "react-icons/fa";
import Logo from "../components/Logo";
import { FaFaceLaugh } from "react-icons/fa6";

const Contact = () => {
  return (
    <section className="mt-32 bg-[url('/src/assets/img/EllaOlssonhero.jpg')] bg-cover">
      <div className="p-10 bg-[#ffffff53] flex flex-col items-center gap-3">
        <h2 className="font-bold text-2xl">Contact Us</h2>
        <Logo isContact={true} />
        <p className="font-semibold">
        Any questions or remarks? Just write us a message!</p>
        <form className="flex flex-col gap-3">
          <div className="w-60 pl-2 flex items-center bg-gray-300  rounded">
            <FaFaceLaugh className="text-2xl" />
            <input type="text" placeholder="Name" className="w-full p-1 pl-2 placeholder-black font-bold focus:outline-none bg-transparent" />
          </div>
          <div className="w-60 pl-2 flex items-center bg-gray-300  rounded">
            <FaMailBulk className="text-2xl" />  
            <input type="text" placeholder="Email" className="w-full p-1 pl-2 placeholder-black font-bold focus:outline-none bg-transparent" /> 
          </div>
          <textarea name="message" placeholder="Message"  className="p-2 resize-none bg-gray-300 rounded  placeholder-black font-bold focus:outline-none"></textarea>
        </form>
      </div>
    </section>
  );
};
export default Contact;
