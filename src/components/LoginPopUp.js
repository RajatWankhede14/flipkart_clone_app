import React from "react";
import TextField from "@mui/material/TextField";

function LoginPopUp({ open, setOpen }) {
  return (
    <div className="align-middle">
      {open ? (
        <div className="flex fixed top-44 w-full   border-2 rounded-lg bg-white text-black">
          <div className="bg-blue-500 text-white px-7 py-9">
            <h1 className="text-3xl font-semibold pb-10">Login</h1>
            <p>Get access to your Orders, Wishlist and Recommendations</p>
            <img
              src="https://blog.advids.co/wp-content/uploads//2017/12/wifi_manager_for_the_new_guide_pages2_1x.png"
              className="h-48 object-contain mx-auto my-20"
              alt="jouk"
            />
          </div>
          <div className="p-14">
            <TextField
              className="w-full"
              id="standard-basic"
              label="Email/Phone Number"
              variant="standard"
            />
            <button className="bg-yellow-500 text-white font-semibold w-full">
              Login
            </button>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default LoginPopUp;
