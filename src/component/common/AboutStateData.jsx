import React from "react";
import allIcon from "../../helper/IconProvider";

const AboutStateData = ({icon,title,description}) => {
  const { statsData } = allIcon;

  return (
    <div className="py-[32px] px-[35px] border border-[#0000004d] rounded-[4px] gap-y-4 flex flex-col items-center hover:bg-secondary2 hover:border-transparent group  transition duration-700 ease-in-out">
      <div className="bg-[#2f2e3038]   relative w-fit p-2.5 rounded-full flex items-center justify-center  group-hover:bg-[#ffffff3c] group-hover:transition group-hover:duration-700 group-hover:ease-in-out">
        <span
          className="text-[30px] p-3 bg-button text-primary group-hover:text-button group-hover:bg-primary inline-block rounded-full  group-hover:transition group-hover:duration-700 group-hover:ease-in-out 
"
        >
          {icon}
        </span>
      </div>
      <h3 className="heading32PXBold group-hover:text-text text-text2 group-hover:transition group-hover:duration-700 group-hover:ease-in-out">
        {title}
      </h3>
      <p className="text-button break-all title16PXRegular  group-hover:text-text group-hover:transition group-hover:duration-700 group-hover:ease-in-out ">
        {description}
      </p>
    </div>
  );
};

export default AboutStateData;
