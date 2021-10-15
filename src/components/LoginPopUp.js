import React from "react";
import TextField from "@mui/material/TextField";
import "../App.css";

function LoginPopUp({ open, setOpen, setUser }) {
  return (
    <div className="align-middle relative">
      {open ? (
        <div className="loginPopUp">
          <div className="bg-blue-500 text-white px-7 py-9">
            <h1 className="text-3xl font-semibold pb-10">Login</h1>
            <p>Get access to your Orders, Wishlist and Recommendations</p>
            <img
              src="https://blog.advids.co/wp-content/uploads//2017/12/wifi_manager_for_the_new_guide_pages2_1x.png"
              className="h-48 object-contain mx-auto my-20"
              alt="jouk"
            />
          </div>
          <div className="p-14 w-max">
            <TextField
              className="w-full my-4"
              id="standard-basic"
              label="Email/Phone Number"
              variant="standard"
            />
            <div className="py-4"></div>
            <TextField
              className="w-full my-4"
              id="standard-basic"
              label="Password"
              variant="standard"
            />
            <p className="my-6 text-sm">
              By continuing, you agree to Flipkart's{" "}
              <span className="text-blue-700 font-semibold">Terms of Use</span>{" "}
              and{" "}
              <span className="text-blue-700 font-semibold">
                Privacy Policy.
              </span>
            </p>
            <button
              className="bg-yellow-500 text-white font-semibold w-full py-3 shadow-lg"
              onClick={() => {
                setUser(true);
                setOpen(false);
              }}
            >
              Login
            </button>
            <p className="text-gray-600 text-center py-6">OR</p>
            <button className="w-full border rounded-md text-blue-600 font-semibold py-3 shadow-lg">
              Request OTP
            </button>
            <p className="text-blue-600 font-semibold text-sm text-center align-bottom my-6">
              New to Flipkart? Create an account
            </p>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default LoginPopUp;
