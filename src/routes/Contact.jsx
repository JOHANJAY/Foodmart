import { useState } from "react";
import { FaMailBulk } from "react-icons/fa";
import Logo from "../components/Logo";
import { FaFaceLaugh } from "react-icons/fa6";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      alert("Response collected successfully!");
      // Optionally reset form
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } else {
      alert("Please fill out all fields.");
    }
  };

  return (
    <section className="mt-32 bg-[url('/src/assets/img/EllaOlssonhero.jpg')] bg-cover">
      <div className="p-10 bg-[#ffffff53] flex flex-col items-center gap-3">
        <h2 className="font-bold text-2xl">Contact Us</h2>
        <Logo isContact={true} />
        <p className="font-semibold">
          Any questions or remarks? Just write us a message!
        </p>
        <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
          <div className="w-60 pl-2 flex items-center bg-gray-300 rounded">
            <FaFaceLaugh className="text-2xl" />
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              className="w-full p-1 pl-2 placeholder-black font-bold focus:outline-none bg-transparent"
            />
          </div>
          <div className="w-60 pl-2 flex items-center bg-gray-300 rounded">
            <FaMailBulk className="text-2xl" />
            <input
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full p-1 pl-2 placeholder-black font-bold focus:outline-none bg-transparent"
            />
          </div>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Message"
            className="p-2 resize-none h-40 bg-gray-300 rounded placeholder-black font-bold focus:outline-none"
          ></textarea>
          <div className="flex justify-center">
            <button
              type="submit"
              className="w-40 bg-green-700 text-white p-2 rounded-full"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
