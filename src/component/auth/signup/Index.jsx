import React from "react";
import Container from "../../commonComponent/Container";
import allImages from "../../../helper/imageProvider";
import Button from "../../commonComponent/Button";
import { allIcon } from "../../../helper/IconProvider";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const signupShema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

const Signup = () => {
  //for shcma form

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(signupShema),
  });

  // for icon images
  const { authImage } = allImages;
  const { google } = allIcon;
  //for handle event
  const onSubmit = (data) => {
    console.log(data);
  };
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
              onSubmit={handleSubmit(onSubmit)}
            >
              <h4 className="text-text2  heading36PXMedium">
                Create an account
              </h4>
              <p className="title16PXRegular text-text2 pt-6 pb-12">
                Enter your details below
              </p>

              <div className="flex flex-col gap-y-10">
                <input
                  type="text"
                  placeholder="Name"
                  className="placeholder:text-[#00000051] title16PXRegular text-[#00000051] border-b-2 border-[#00000030] py-2"
                  {...register("name")}
                />
                {errors.name && (
                  <p className="text-red-500 title16PXRegular">
                    {errors.name.message}
                  </p>
                )}
                <input
                  type="email"
                  placeholder="Email  "
                  {...register("email")}
                  className="placeholder:text-[#00000051] title16PXRegular text-[#00000051] border-b-2 border-[#00000030] py-2"
                />
                {errors.email && (
                  <p className="text-red-500 title16PXRegular">
                    {errors.email.message}
                  </p>
                )}
                <input
                  type="password"
                  placeholder="Password"
                  className="placeholder:text-[#00000051] title16PXRegular text-[#00000051] border-b-2 border-[#00000030] py-2"
                  {...register("password")}
                />
                {errors.password && (
                  <p className="text-red-500 title16PXRegular">
                    {errors.password.message}
                  </p>
                )}
              </div>
              <div className="mt-[56px] space-y-4">
                <Button children={"Create Account"} />
                <button className=" flex cursor-pointer items-center justify-center gap-x-4 py-4 title16PXRegular text-text2 w-full rounded-[6px] border-2 border-[#00000051]">
                  <span className="text-xl">{google}</span>
                  Sign up with Google
                </button>
              </div>
              <div className="flex gap-x-3 items-center mt-8 justify-center">
                <p className="title16PXRegular text-[#00000099]">
                  Already have account?
                </p>
                <button className="text-text2 title16PXRegular   border-b  border-[#00000051] cursor-pointer ">
                  Log in
                </button>
              </div>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Signup;
