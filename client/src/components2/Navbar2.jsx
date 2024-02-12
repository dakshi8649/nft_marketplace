import React from "react";
import { Link } from "react-router-dom";
// import App1 from "../App1";
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { CiShoppingCart } from "react-icons/ci";

const NavBarItem = ({ title, classprops }) => (
  <li className={`mx-4 cursor-pointer ${classprops}`}>{title}</li>
);

const Navbar2 = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  return (
    <nav className="w-full flex md:justify-center justify-between items-center p-4">
      <div className="md:flex-[0.5] flex-initial text-white text-2xl justify-center items-center">
        {/* <img src={logo} alt="logo" className="w-32 cursor-pointer" /> */}
        DAM
      </div>
      <ul className="text-white md:flex hidden list-none flex-row justify-between items-center flex-initial">
        {["Home", "Explore", "Wallet", "AboutUs", "Contact"].map((item, index) => (
          <NavBarItem key={item + index} title={item} />
        ))}
        <CiShoppingCart size={40} />
        <Link to="/login">
          <li className="bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-pointer text-white hover:bg-[#2546bd]">Login</li>
        </Link>
      </ul>
      <div className="flex relative">
        {!toggleMenu && (
          <HiMenuAlt4 fontSize={28} className="text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(true)} />
        )}
        {toggleMenu && (
          <AiOutlineClose fontSize={28} className="text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(false)} />
        )}
        {toggleMenu && (
          <ul
            className="z-10 fixed -top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none
            flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in"
          >
            <li className="text-xl w-full my-2"><AiOutlineClose onClick={() => setToggleMenu(false)} /></li>
            {["Home", "Explore", "Wallet", "AboutUs", "Contact"].map(
              (item, index) => <NavBarItem key={item + index} title={item} classprops="my-2 text-lg" />,
            )}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar2;
