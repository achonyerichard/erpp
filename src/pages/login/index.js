import React from "react";
import Logo from "../../assets/images/logo.png";

const SignIn = () => {
  return (
    <div className=" bg-center bg-fixed font-poppins w-screen h-screen flex justify-center items-center">
      <div className=" bg-white shadow-xl lg:w-4/12 w-3/4 h-auto px-6  pb-8 rounded-lg">
        <div className="w-full flex justify-center ">
          <img className="" src={Logo} alt="logo2" />
        </div>
        <form className="w-full " action="get">
          <div class="px-12 ">
            <div class="w-full mb-2">
              <div class="flex items-center">
                <input
                  type="text"
                  placeholder="Username"
                  className="mb-2 text-center py-2 bg-gray-200   w-full border rounded placeholder:text-lg placeholder:text-black  py-2 text-black transition focus:outline-none"
                />
              </div>
            </div>
            <div class="w-full mb-2">
              <div class="flex items-center">
                <input
                  type="text"
                  placeholder="Password"
                  className=" text-center py-2 bg-gray-200   w-full border rounded placeholder:text-lg placeholder:text-black  py-2 text-black transition focus:outline-none"
                />
              </div>
            </div>
            <div class="mt-4 flex justify-center items-center">
              <button
                type="text"
                class=" text-lg bg-[color:#194383] text-white rounded px-12 py-2"
              >
                Sign in
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
