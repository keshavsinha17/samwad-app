import React, { useState } from "react";
import "./login.css";
// import { Link } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { ForgetRoute } from "../utilies/APIRoutes";

export const ForgetPass = () => {
  const navigate=useNavigate();
  const toastOption = {
    position: "bottom-right",
    autoClose: 3000,
    hideProgressBar: false,
    newestOnTop: false,
    rtl: false,
  };
  const [values, setValues] = useState({
    email: "",
    SQ: "",
    newPassword:"",
  });
  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };
  const validateForm = () => {
    const { email,SQ,newPassword } = values;
    // console.log("no");
    if (email === "") {
      toast.error("Email and security question is required.", toastOption);
      return false;
    } else if (SQ === "") {
      toast.error("Email and security question is required.", toastOption);
      return false;
    }else if (newPassword === "") {
      toast.error("New password is required.", toastOption);
      return false;
    }
    return true;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (validateForm()) {
      // console.log("Hello");
      const {email, SQ, newPassword } = values;
      const { data } = await axios.post(ForgetRoute, {
        email,
        SQ,
        newPassword,
      });
      if (data.status === false) {
        toast.error(data.msg, toastOption);
        console.log("ok");
      }
      if (data.status === true) {
        // toast.success("Successful",toastOption);
        // localStorage.setItem("sanwad-app", JSON.stringify(data.user));
        // console.log("no");
        toast.success("Successful",toastOption);
        navigate("/login");

      }
    }
  };

  return (
    <>
      <div className="flex justify-center items-center relative top-[3.5rem] mb-96">
        <div className="wrapper relative w-[19rem] h-[26.5rem] z-50 ">
          <div className="form-wrapper sign-up absolute top-0 left-0 flex justify-center items-center w-full h-full bg-white drop-shadow-2xl rounded-xl ">
            <form  onSubmit={(event) => handleSubmit(event)} className="w-[85%]">
              <h2 className="text-[1.85rem] text-[#555] text-center font-bold">
                Forgot Password
              </h2>

            


              <div className="input-group relative w-[17rem]  my-[30px] mx-0">
                <input
                  type="email"
                  required
                  name="email"
                  onChange={(e) => handleChange(e)}
                  className="w-full h-[40px] text-[16px] text-[#333] py-0 px-[10px] bg-transparent  email"
                />
                <label
                  htmlFor=""
                  className="absolute  left-[5px] top-2 text-[15px] text-[#333] py-0 px-1 pointer-events-none transition-all ease-in-out duration-100"
                >
                  Email
                </label>
              </div>

              

              <div className="input-group relative w-[17rem] my-[30px] mx-0">
                <input
                  type="text"
                  required
                  name="SQ"
                  onChange={(e) => handleChange(e)}
                  className="w-full h-[40px] text-[16px] text-[#333] py-0 px-[10px] bg-transparent "
                />
                <label
                  htmlFor=""
                  className="absolute  left-[5px] top-2 text-[14px] text-[#333] py-0 px-1 pointer-events-none transition-all ease-in-out duration-100"
                >
                  Security Question - Favourite Movie?
                </label>
              </div>

              <div className="input-group relative w-[17rem] my-[30px] mx-0">
                <input
                  type="text"
                  required
                  name="newPassword"
                  onChange={(e) => handleChange(e)}
                  className="w-full h-[40px] text-[16px] text-[#333] py-0 px-[10px] bg-transparent "
                />
                <label
                  htmlFor=""
                  className="absolute  left-[5px] top-2 text-[14px] text-[#333] py-0 px-1 pointer-events-none transition-all ease-in-out duration-100"
                >
                  New password
                </label>
              </div>

              {/* <Link to="#"> */}
              <button
                type="submit"
                className="btn relative top-0 left-0 w-full h-[40px] bg-primary-color text-[16px] text-white font-medium cursor-pointer rounded-md shadow-xl hover:scale-95 active:scale-95"
              >
                Continue
              </button>
              <div className="sign-link text-[14px] text-center my-[25px] mx-0">
                <p className="text-[#333]">
                  I remember my password?{" "}
                  <Link
                    to="/login"
                    className="text-primary-color font-semibold hover:decoration-dashed signIn-Link"
                  >
                    Sign In
                  </Link>
                </p>
              </div>
            </form>
          </div>

          
        </div>
        
      </div>
      <ToastContainer/>
    </>
  );
};
