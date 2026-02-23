import React from "react";
import Container from "./Container";
import { allIcon } from "../../helper/IconProvider";
import { footerLinks } from "../../helper/ProjectArr";
import allImages from "../../helper/imageProvider";

const Footer = () => {
  // for  icon\
  const { appleStore, playStore, footerQr } = allImages;
  const { send,socialLinks} = allIcon;
  return (
    <footer className="bg-button">
      <Container>
        <div className="grid grid-cols-5 gap-x-[87px] pt-[80px] pb-[60px] ">
          <div className="">
            <h6 className="heading24PXBold text-primary">Exclusive</h6>
            <p className="title20PXMedium text-primary py-6">Subscribe</p>
            <p className="title16PXRegular text-primary mb-4">
              Get 10% off your first order
            </p>
            <div className="border-2 border-primary relative rounded-[5px] ">
              <input
                type="text"
                className=" w-[170px] text-[#ffffffab] title16PXRegular px-4 py-3 placeholder:text-[#ffffffab] "
                placeholder="Enter your email"
              />
              <button className="text-primary cursor-pointer text-2xl absolute top-1/2 -translate-y-1/2 right-3 ">
                {send}
              </button>
            </div>
          </div>
          <div className="">
            <p className="title20PXMedium text-primary">Support</p>
            <p className="title16PXRegular text-primary pt-6 pb-4">
              111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
            </p>
            <p className="title16PXRegular text-primary">exclusive@gmail.com</p>
            <p className="title16PXRegular text-primary pt-4">+88015-88888-9999</p>
          </div>
          <div className="">
            <p className="title20PXMedium text-primary pb-6">
              {footerLinks[0].title}
            </p>
            <ul className="space-y-4">
              {footerLinks[0].links.map((items) => {
                return (
                  <li
                    className="title16PXRegular cursor-pointer text-primary"
                    key={items.label}
                  >
                    {items.label}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="">
            <p className="title20PXMedium text-primary pb-6">
              {footerLinks[1].title}
            </p>
            <ul className="space-y-4">
              {footerLinks[1].links.map((items) => {
                return (
                  <li
                    className="title16PXRegular cursor-pointer text-primary"
                    key={items.label}
                  >
                    {items.label}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="">
            <p className="title20PXMedium text-primary pb-6">Download App</p>
            <p className="text-[#ffffffab] title12PXMedium">
              Save $3 with App New User Only
            </p>
            <div className="flex items-center gap-x-[10px] mt-[10px] mb-[26px]">
              <div>
                <figure>
                  <img src={footerQr} alt="footer-qr"  className="cursor-pointer"/>
                </figure>
              </div>
              <div>
                <figure className="space-y-3">
                  <img src={playStore} alt="playstore"  className="cursor-pointer"/>
                  <img src={appleStore} alt="applesotrez" className="cursor-pointer"/>
                </figure>
              </div>
            </div>
            <ul className="flex gap-x-8">
                {socialLinks.map(items=>{
                    return <li key={items.id}><a href={items.url} target="_blank" className="text-primary  text-[22px]  inline-block">{items.icon}</a></li>
                })}
            </ul>
          </div>
        </div>
      </Container>
      <div className="pt-4 pb-6 border-t border-[#ffffff32]">
        <p className="text-[#ffffff57] title16PXRegular text-center">@Copyright Rimel 2022. All right reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
