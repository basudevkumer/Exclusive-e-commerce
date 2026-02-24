import React from "react";
import Container from "../../commonComponent/Container";
import allImages from "../../../helper/imageProvider";
import Button from "../../commonComponent/Button";
import { allIcon } from "../../../helper/IconProvider";

const SignIn = () => {
  // for icon images
  const { authImage } = allImages;
  const { google } = allIcon;

  return (
    <section className="relative overflow-hidden lg:pt-[60px] lg:pb-[140px]">
      <Container>
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-screen py-10">
          {/* Image Section */}
          <figure
            className="
           hidden
           lg:block
            lg:absolute 
            lg:left-0 
            lg:top-1/2 
            lg:-translate-y-1/2
            lg:h-[500px] 
            lg:w-[500px]
            xl:h-[650px] 
            xl:w-[700px]
            2xl:h-[750px] 
            2xl:w-[800px]
          "
          >
            <img
              src={authImage}
              alt="authImage"
              className="h-full w-full object-cover rounded-lg lg:rounded-none"
            />
          </figure>

          {/* Form Section */}
          <div className="w-full flex justify-center lg:justify-end  ">
            <form
              className="
              w-full 
              max-w-[371px] 
            "
            >
              <h4 className="text-text2  heading36PXMedium">
              Log in to Exclusive
              </h4>
              <p className="title16PXRegular text-text2 pt-6 pb-12">
                Enter your details below
              </p>

              <div className="flex flex-col gap-y-10">
                
                <input
                  type="email"
                  placeholder="Email  "
                  className="placeholder:text-[#00000051] title16PXRegular text-[#00000051] border-b-2 border-[#00000030] py-2 "
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="placeholder:text-[#00000051] title16PXRegular text-[#00000051] border-b-2 border-[#00000030] py-2  "
                />
              </div>
               
               <div className="flex items-center gap-x-[87px] mt-10">
                <Button children={"Log In"}/>
                <Button children={"Forget Password?"} className={"!p-0 bg-transparent !text-secondary2"}/>

               </div>

            </form>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default SignIn;
