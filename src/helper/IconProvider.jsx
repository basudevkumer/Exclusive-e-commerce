import { BsCart2 } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa6";
import { FaRegUser } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";

export const allIcon = {
  navIcon: [
    { id: 1, icon: <FaRegHeart />, to: "/wishlist" },
    { id: 2, icon: <BsCart2 />, to: "/addtocart" },
    { id: 3, icon: <FaRegUser /> },
  ],
  searchIcon: <IoIosSearch />,
};
