import { BsCart2 } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa6";
import { FaRegUser } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { IoMdSend } from "react-icons/io";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { IoEyeOutline } from "react-icons/io5";
import { FaStar } from "react-icons/fa6";
import { RiDeleteBin6Line } from "react-icons/ri";
import { GrCart } from "react-icons/gr";



export const allIcon = {
  navIcon: [
    { id: 1, icon: <FaRegHeart />, to: "/wishlist" },
    { id: 2, icon: <BsCart2 />, to: "/addtocart" },
    { id: 3, icon: <FaRegUser /> },
  ],
  searchIcon: <IoIosSearch />,
  send: <IoMdSend />,
  socialLinks: [
    {
      id: 1,
      icon: <FaFacebookF />,
      url: "https://facebook.com",
      label: "Facebook",
    },
    {
      id: 2,
      icon: <FaTwitter />,
      url: "https://twitter.com",
      label: "Twitter",
    },
    {
      id: 3,
      icon: <FaInstagram />,
      url: "https://instagram.com",
      label: "Instagram",
    },
    {
      id: 4,
      icon: <FaLinkedinIn />,
      url: "https://linkedin.com",
      label: "LinkedIn",
    },
  ],
  google: <FcGoogle />,
  eye: <IoEyeOutline />,
  star: <FaStar />,
  deletes: <RiDeleteBin6Line/>,
  cart:<GrCart/>
};
