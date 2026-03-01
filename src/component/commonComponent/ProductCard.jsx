import React from "react";
import allImages from "../../helper/imageProvider";
import { allIcon } from "../../helper/IconProvider";

const ProductCard = () => {
  // for images & icons
  const { gammingImage } = allImages;
  const { eye, navIcon } = allIcon;
  return (
    <div>
      <div className="bg-secondary rounded-[4px] py-[35px] px-10 flex justify-center relative">
        <div className="px-3 py-1 bg-secondary2 text-text absolute rounded-[4px] top-3 left-3">
          -41%
        </div>
        <div className="flex h-fit  flex-col absolute right-[17px] gap-y-2 top-[17px]">
          <button className="bg-primary p-[10px] inline-block rounded-full   cursor-pointer text-xl">{navIcon[0].icon}</button>
          <button className="bg-primary p-[10px] inline-block rounded-full  cursor-pointer text-xl">{eye}</button>
        </div>
        <figure className="">
          <img
            src={gammingImage}
            alt="gammingImage"
            className="max-w-[190px] max-h-[180px] object-cover"
          />
        </figure>
      </div>
      <div className="mt-4 space-y-2">
        <p className="title16PXMedium text-text2">HAVIT HV-G92 Gamepad</p>
        <p>
          <span className="text-secondary2 title16PXMedium">$120</span>
          <del className="text-[#00000071] title16PXMedium ml-4">$160</del>
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
