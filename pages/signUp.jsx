import HomeControl from "../src/components/homeControl";
import Subscribe from "../src/components/Subscribe";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
import Footer from "../src/components/Footer";

const SignUp = () => {
   // State for email, password, and validation
   const [email, setEmail] = useState("");
   const [passwordVisible, setPasswordVisible] = useState(false);
   const [error, setError] = useState("");
 
   // Handle login click
   const handleLoginClick = (e) => {
     e.preventDefault();
 
     if (validateEmail(email)) {
       navigate("/sign-up");
     } else {
       setError("Please enter a valid email.");
     }
   };
 
   // Handle password visibility toggle
   const togglePasswordVisibility = () => {
     setPasswordVisible(!passwordVisible);
   };
 
   // Handle email change
   const handleEmailChange = (e) => {
     setEmail(e.target.value);
     setError("");
   };
 
   // Email validation regex
   const validateEmail = (email) => {
     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
     return emailRegex.test(email);
   };
 

  return (
    <div>
      <HomeControl />
      <div className="h-auto flex flex-col items-center justify-center bg-gray-50">
        {/* Sign-In Card */}
        <div
          className="bg-white border-2 border-black shadow-md shadow-black rounded-md p-8 text-center"
          style={{ width: "25rem", marginTop: "2rem" }}
        >
          {/* Tabs */}
          <div className="flex justify-between border-b pb-2 mb-6">
            <button className="text-green-600 font-semibold border-b-2 border-green-600">
              Consumer
            </button>
            <button className="text-gray-500">Vendor</button>
          </div>
          <br />
          {/* Sign-In Header */}
          <h2 className="text-2xl font-semibold mb-4">Sign Up</h2>

          {/* Sign-In Form */}
          <form style={{ marginTop: "1rem" }}>
            {/* Email Input */}
            <div className="mb-4">
              <input
                type="email"
                placeholder="Email Address"
                className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400"
                value={email}
                onChange={handleEmailChange}
              />
              {error && (
                <p
                  className="text-red-500 text-sm"
                  style={{
                    color: "red",
                    marginTop: "-1.6rem",
                    marginLeft: "8rem",
                  }}
                >
                  {error}
                </p>
              )}
            </div>
            <br />
            {/* Password Input */}
            <div className="mb-4 relative">
              {/* Password Input */}
              <input
                type={passwordVisible ? "text" : "password"}
                placeholder="Password"
                className="w-full p-3 pr-10 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400"
              />

              {/* Eye Icon Inside Input */}
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute inset-y-0 right-3 flex items-center text-gray-500"
                style={{
                  background: "transparent",
                  border: "none",
                  cursor: "pointer",
                  marginTop: "-1.8rem",
                  marginLeft: "19rem",
                }}
              >
                {passwordVisible ? (
                  <FaEyeSlash size={20} />
                ) : (
                  <FaEye size={20} />
                )}
              </button>
            </div>
            <br /> <br />
            {/*Confirm Password*/}
            <div className="mb-4 relative">
              {/* Password Input */}
              <input
                type={passwordVisible ? "text" : "password"}
                placeholder="Confirm Password"
                className="w-full p-3 pr-10 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400"
              />

              {/* Eye Icon Inside Input */}
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute inset-y-0 right-3 flex items-center text-gray-500"
                style={{
                  background: "transparent",
                  border: "none",
                  cursor: "pointer",
                  marginTop: "-1.8rem",
                  marginLeft: "19rem",
                }}
              >
                {passwordVisible ? (
                  <FaEyeSlash size={20} />
                ) : (
                  <FaEye size={20} />
                )}
              </button>
            </div>
            <br /> <br />
            {/* Agree to our terms and Forgot Password */}
            <div className="flex justify-between items-center mb-6 text-sm">
              <label className="flex items-center text-gray-600">
                <input
                  type="checkbox"
                  className="form-checkbox h-4 w-4 text-green-600"
                />
                <span
                  className="ml-2 text-sm"
                  style={{ fontSize: "0.7rem", fontWeight: "bold" }}
                >
                  You agree to our Terms of Service and Privacy Policy
                </span>
              </label>
            </div>
            {/* Login Button */}
            <button
              type="submit"
              className="w-48 bg-green-500 text-white py-3 rounded-md font-semibold hover:bg-green-600 transition"
              style={{ marginTop: "1rem" }}
            >
              LOG IN
            </button>
          </form>

          {/* Footer */}
          <div className="mt-6 text-sm">
            <p className="text-gray-600" style={{ fontWeight: "bold" }}>
              Already have an account?{" "}
              <a
                href="./login"
                style={{ color: "#8E44AD", fontWeight: "bold" }}
              >
                Sign In
              </a>
            </p>
          </div>
        </div>

        <Subscribe />
      </div>
      <Footer />
    </div>
  );
};
export default SignUp;
