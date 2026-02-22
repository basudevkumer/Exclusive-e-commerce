import React from "react";
import Container from "./Container";
import { menuItems } from "../../helper/ProjectArr";
import { allIcon } from "../../helper/IconProvider";

const Navbar = () => {
  //for icons
  const { navIcon, searchIcon } = allIcon;
  return (
    <nav className="pt-10 pb-4">
      <Container>
        <div className="flex items-center justify-between">
          <h6 className="heading24PXBold text-text2">Exclusive</h6>
          <ul className="flex items-center gap-x-[48px]">
            {menuItems.map((items) => {
              return (
                <li
                  key={items.id}
                  className="text-text2 title16PXRegular cursor-pointer relative after:absolute after:content-[''] after:h-[2px] after:w-full after:bg-[#0000007b] after:bottom-[0px] after:-left-full overflow-hidden  hover:after:left-0 py-[2px] after:transition-all after:duration-300 after:ease-in-out"
                >
                  {items.name}
                </li>
              );
            })}
          </ul>
          <div className="flex items-center gap-x-7">
            <div className="relative bg-secondary px-5 w-[260px] rounded">
              <input
                type="text"
                placeholder="What are you looking for? "
                className="py-[10px] w-[190px] "
              />
              <button    className="text-2xl top-1/2 translate-y-[-50%]  right-3 absolute cursor-pointer">
                {" "}
                {searchIcon}
              </button  >
            </div>
            <ul className="flex gap-x-4 ">
              {navIcon.map((items) => {
                return items.to === "/addtocart" ? (
                  <li
                    key={items.id}
                    className=" cursor-pointer text-[22px] p-3 hover:bg-secondary2 hover:text-white transition duration-300 ease-in-out  rounded-full relative group"
                  >
                    {items.icon}
                    <span className="absolute top-[3px] right-1 text-[10px]  bg-secondary2 text-white rounded-full h-5 w-5 flex items-center justify-center group-hover:bg-white group-hover:text-[#000000]  transition duration-300 ease-in-out ">
                      02
                    </span>
                  </li>
                ) : (
                  <li
                    key={items.id}
                    className=" cursor-pointer text-[22px] p-3 hover:bg-secondary2 hover:text-white transition duration-300 ease-in-out  rounded-full"
                  >
                    {items.icon}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
