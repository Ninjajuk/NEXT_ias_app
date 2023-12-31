import React, { useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
// import { useNavigate } from "react-router-dom";


const LoginForm = ({onClick}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
//   const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    // Add your login logic here
    console.log("Logging in with email:", email, "and password:", password);
    console.log("Remember Me:", rememberMe);
    // navigate("/dashboard");
  };

  const handleRegister = () => {
    // Add your registration logic here
    console.log("Redirecting to the registration page...");
    // navigate("/register");
  };

  const toggleRememberMe = () => {
    setRememberMe(!rememberMe);
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="  flex justify-center items-center min-h-lg ">
      <div className="w-full flex flex-col md:flex-row  ">
        <div className=" md:block md:w-1/2 overflow-hidden rounded-md"style={{backgroundImage:'https://cdnstatic.nextias.com/assets/images/login-signp-pop-up.png'}}>
          <img
            src="https://cdnstatic.nextias.com/assets/images/login-signp-pop-up.png"
            alt="Your Image"
            className="w-full h-full object-cover  "
            // style={{ maxWidth: "100%", height: "auto" }}
          />
        </div>
        <form
          className="bg-white p-6 rounded-md  shadow-md w-full md:w-1/2 "
          onSubmit={handleLogin}
        >
          <h2 className="text-2xl font-semibold mb-6">
            Sign in to your account
          </h2>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-400"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4 relative">
            <label htmlFor="password" className="block text-gray-600">
              Password
            </label>
            <div className="w-full border border-gray-300 rounded px-6 py-2 focus:outline-none focus:border-blue-400">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                className="w-full outline-none"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type="button"
                className="absolute right-5 top-8 focus:outline-none"
                onClick={toggleShowPassword}
              >
                {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
              </button>
            </div>
          </div>
          <div className="mb-4 flex items-center justify-between">
            <div>
              <input
                type="checkbox"
                id="rememberMe"
                className="mr-2"
                checked={rememberMe}
                onChange={toggleRememberMe}
              />
              <label htmlFor="rememberMe" className="text-gray-600">
                Remember Me
              </label>
            </div>
            <button
              type="button"
              className="text-blue-500 hover:underline"
              onClick={() => {
                console.log("Forgot Password clicked");
              }}
            >
              Forgot Password
            </button>
          </div>
          <button
            type="submit"
            className="w-full bg-[#ed3237] text-white rounded-lg py-2 hover:bg-[#e74f5b] transition duration-300 border-[#ed3237]"
          >
            Login
          </button>
          <div className="flex justify-between mt-4">
            <p>Dont have an account</p>
            <button
      onClick={onClick}
              className="text-blue-500 hover:underline"
            >
              Register
            </button>
          </div>

          <div className="mt-4 flex justify-between items-center">
            <div className="border-t border-gray-400 flex-grow"></div>
            <p className="mx-2 text-gray-500">Or continue with</p>
            <div className="border-t border-gray-400 flex-grow"></div>
          </div>
          <div className="flex mt-4 text-center gap-4">
            <button
              onClick={handleLogin}
              className="w-full bg-red-600 text-white rounded-lg py-2 hover:bg-red-800 transition duration-300"
            >
              Gmail
            </button>
            <button
              onClick={handleLogin}
              style={{ backgroundColor: "black" }}
              className="w-full bg-green-500 text-white rounded-lg py-2 hover:bg-green-600 transition duration-300"
            >
              Github
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
