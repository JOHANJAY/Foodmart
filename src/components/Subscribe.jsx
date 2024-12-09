const Subscribe = () => {
  return (
    <div>
      <div
        className=" bg-white  rounded-md p-6  flex items-center  gap-60"
        style={{ marginTop: "5rem", width: "75rem", maxWidth: "60rem" }}
      >
        {/* Text */}
        <div className="flex-col">
          <h2 className="text-lg font-semibold">Subscribe our Newsletter</h2>
          <p className="text-sm text-gray-500">
            Enter you email address to subscribe to our regular, <pre />{" "}
            entertaining Newsletter
          </p>
        </div>

        {/* Subscribe Input and Button */}
        <div className="flex items-center">
          <input
            type="email"
            placeholder="Your email address"
            className="p-3 px-10 rounded-l-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <button className="bg-green-500 text-black px-6 py-3 rounded-r- font-semibold hover:bg-green-600 transition">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};
export default Subscribe;
