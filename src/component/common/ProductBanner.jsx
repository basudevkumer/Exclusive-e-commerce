import React, { useState, useEffect, useRef } from "react";
import allImages from "../../helper/imageProvider";
import Button from "./Button";

const ProductBanner = () => {
  const { bannerPrdouctImg } = allImages;

  const targetDateRef = useRef(null);
  if (!targetDateRef.current) {
    const t = new Date();
    t.setDate(t.getDate() + 5);
    t.setHours(t.getHours() + 23);
    t.setMinutes(t.getMinutes() + 59);
    t.setSeconds(t.getSeconds() + 35);
    targetDateRef.current = t;
  }

  const pad = (n) => String(n).padStart(2, "0");

  const [timeLeft, setTimeLeft] = useState({
    hours: "23",
    days: "05",
    minutes: "59",
    seconds: "35",
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const diff = targetDateRef.current - now;

      if (diff <= 0) {
        clearInterval(interval);
        setTimeLeft({ hours: "00", days: "00", minutes: "00", seconds: "00" });
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
      );
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      setTimeLeft({
        hours: pad(hours),
        days: pad(days),
        minutes: pad(minutes),
        seconds: pad(seconds),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const CountCircle = ({ value, label }) => (
    <div className="flex flex-col items-center justify-center w-[70px] h-[70px] rounded-full bg-primary">
      <span className="title14PXSemiBold text-text2 leading-none">{value}</span>
      <span className="title12PXRegular text-text2 leading-none mt-[3px]">
        {label}
      </span>
    </div>
  );

  return (
    <div
      className="w-full rounded-[4px] bg-cover bg-center bg-no-repeat min-h-[500px] flex items-center px-[56px]"
      style={{ backgroundImage: `url(${bannerPrdouctImg})` }}
    >
      {/* Left Content */}
      <div className=" ">
        {/* Categories — green */}
        <span className="title14PXSemiBold text-button1 ">Categories</span>

        {/* Heading — white, 2 line */}
        <h2
          className="heading48PXSemiBold text-primary my-8"
          style={{ lineHeight: "1.15" }}
        >
          Enhance Your <br /> Music Experience
        </h2>

        {/* Countdown — 4 circles */}
        <div className="flex items-center gap-[12px] pb-10">
          <CountCircle value={timeLeft.hours} label="Hours" />
          <CountCircle value={timeLeft.days} label="Days" />
          <CountCircle value={timeLeft.minutes} label="Minutes" />
          <CountCircle value={timeLeft.seconds} label="Seconds" />
        </div>

        {/* Buy Now Button */}
        <div>
          <Button children={"Buy Now!"} className={"!w-fit !bg-button1"} />
        </div>
      </div>
    </div>
  );
};

export default ProductBanner;
