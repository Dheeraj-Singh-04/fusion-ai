import React from "react";
import { Button } from "../../ui/button";
import ResponsiveContainer from "../ResponsiveContainer";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <ResponsiveContainer>
      {" "}
      <header className="flex justify-between  items-center py-3">
        <div className="flex gap-2  items-center justify-center">
          <img
            className="h-12 w-12 object-cover p-1 rounded-full border-2 border-gray-300 "
            src="icons/logo.png"
            alt=""
          />
          <p className="font-semibold">SupportAI</p>
        </div>
        <div className="flex gap-8">
          <p className="text-gray-400 text-sm text hover:text-gray-200 cursor-pointer">
            Features
          </p>
          <p className="text-gray-400 text-sm text hover:text-gray-200 cursor-pointer">
            Intergration
          </p>

          <p className="text-gray-400 text-sm text hover:text-gray-200 cursor-pointer">
            Pricing
          </p>
        </div>
        <div className="flex gap-4  items-center justify-center">
          <p className="text-gray-400 text-sm hover:text-gray-200 cursor-pointer">
            Sign In
          </p>
          <Button className={"bg-white text-black cursor-pointer rounded-full"}>
            Get Started
          </Button>
          <Link to={'/dashboard'}>
            {" "}
            <Button
              className={"bg-white text-black cursor-pointer rounded-full"}
            >
              Dashboard
            </Button>
          </Link>
        </div>
      </header>
    </ResponsiveContainer>
  );
};

export default Header;
