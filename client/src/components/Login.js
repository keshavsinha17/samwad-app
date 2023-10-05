import React, { useEffect, useState } from "react";
import "./login.css";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { signUpRoute, loginRoute } from "../utilies/APIRoutes";
// require("dotenv").config();
// import dotenv from 'dotenv';
// dotenv.config;

export const Login = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const wrapper = document.querySelector(".wrapper");
    const signUpLink = document.querySelector(".signUp-Link");
    const signInLink = document.querySelector(".signIn-Link");

    signUpLink.addEventListener("click", () => {
      wrapper.classList.add("animate-signIn");
      wrapper.classList.remove("animate-signUp");
    });

    signInLink.addEventListener("click", () => {
      wrapper.classList.add("animate-signUp");
      wrapper.classList.remove("animate-signIn");
    });
  });

  // SIGNUP FUNCTIONALITY
  const toastOption = {
    position: "bottom-right",
    autoClose: 3000,
    hideProgressBar: false,
    newestOnTop: false,
    rtl: false,
  };
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    SQ: "",
  });
  useEffect(() => {
    if (localStorage.getItem("sanwad-app")) {
      navigate("/");
    }
  }, []);
  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };
  const handleValidation = () => {
    const { username, email, password, SQ } = values;
    if (username.length < 1) {
      toast.error("Username is required.", toastOption);
      return false;
    } else if (username.length < 3) {
      toast.error(
        "Username should be equal or greater 3 character.",
        toastOption
      );
      return false;
    } else if (email === "") {
      toast.error("Email is required.", toastOption);
      return false;
    } else if (password.length < 1) {
      toast.error("Paasword is required.", toastOption);
      return false;
    } else if (password.length < 8) {
      toast.error(
        "Password should be equal or greater 8 character.",
        toastOption
      );
      return false;
    } else if (SQ.length < 1) {
      toast.error("Security question is required.", toastOption);
      return false;
    }
    return true;
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (handleValidation()) {
      console.log("in validation", signUpRoute);
      const { username, email, password, SQ } = values;
      const { data } = await axios.post(signUpRoute, {
        username,
        email,
        password,
        SQ,
      });
      if (data.status === false) {
        toast.error(data.msg, toastOption);
      }
      if (data.status === true) {
        localStorage.setItem("sanwad-app", JSON.stringify(data.user));
        navigate("/avatar");
      }
      // toast.success("Successful",toastOption);
    }
  };

  // SIGNIN FUNCTIONALITY
  const [values1, setValues1] = useState({ username1: " ", password1: " " });

  useEffect(() => {
    if (localStorage.getItem("sanwad-app")) {
      navigate("/");
    }
  }, []);
  const handleChange1 = (event) => {
    setValues1({ ...values1, [event.target.name]: event.target.value });
  };

  const validateForm = () => {
    const { username1, password1 } = values1;
    // console.log(password1.length);
    if (username1 === "") {
      toast.error("Email and Password is required.", toastOption);
      return false;
    } else if (password1 === "") {
      toast.error("Email and Password is required.", toastOption);
      return false;
    }
    return true;
  };

  const handleSubmit1 = async (event) => {
    event.preventDefault();
    if (validateForm()) {
      const { username1, password1 } = values1;
      const { data } = await axios.post(loginRoute, {
        username1,
        password1,
      });
      if (data.status === false) {
        toast.error(data.msg, toastOption);
      }
      if (data.status === true) {
        // toast.success("Successful",toastOption);
        localStorage.setItem("sanwad-app", JSON.stringify(data.user));

        navigate("/");
        // toast.success("Successful",toastOption);
      }
    }
  };

  return (
    <>
      <div className="flex justify-center items-center relative top-20 mb-96">
        <div className="wrapper relative w-[20rem] h-[26.5rem] z-50 ">
          <div className="form-wrapper sign-up absolute top-0 left-0 flex justify-center items-center w-full h-full bg-white drop-shadow-2xl rounded-xl rotate-[7deg]">
            <form onSubmit={(event) => handleSubmit(event)} className="w-[85%]">
              <h2 className="text-[1.85rem] text-[#555] text-center font-bold">
                Sign Up
              </h2>

              <div className="input-group relative w-[17rem] my-[20px] mx-0">
                <input
                  type="text"
                  // required
                  name="username"
                  onChange={(e) => handleChange(e)}
                  className="w-full h-[40px] text-[16px] text-[#333] py-0 px-[10px] bg-transparent  "
                />
                <label
                  htmlFor=""
                  className="absolute  left-[5px] top-2 text-[15px] text-[#333] py-0 px-1 pointer-events-none transition-all ease-in-out duration-100"
                >
                  Username
                </label>
              </div>
              <div className="input-group relative w-[17rem] my-[20px] mx-0">
                <input
                  type="email"
                  // required
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

              <div className="input-group relative w-[17rem] my-[20px] mx-0">
                <input
                  type="password"
                  // required
                  name="password"
                  onChange={(e) => handleChange(e)}
                  className="w-full h-[40px] text-[16px] text-[#333] py-0 px-[10px] bg-transparent "
                />
                <label
                  htmlFor=""
                  className="absolute  left-[5px] top-2 text-[15px] text-[#333] py-0 px-1 pointer-events-none transition-all ease-in-out duration-100"
                >
                  Password
                </label>
              </div>

              <div className="input-group relative w-[17rem] my-[20px] mx-0">
                <input
                  type="text"
                  // required
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

              <button
                type="submit"
                className="btn relative top-0 left-0 w-full h-[40px] bg-primary-color text-[16px] text-white font-medium cursor-pointer rounded-md shadow-xl hover:scale-95 active:scale-95"
              >
                Sign Up
              </button>
              <div className="sign-link text-[14px] text-center my-[25px] mx-0">
                <p className="text-[#333]">
                  Already have an account?{" "}
                  <Link
                    to="#"
                    className="text-primary-color font-semibold hover:decoration-dashed signIn-Link"
                  >
                    Sign In
                  </Link>
                </p>
              </div>
            </form>
          </div>

          {/* ---------------SignUp------------------ */}

          <div className="form-wrapper sign-in absolute top-0 left-0 flex justify-center items-center w-full h-full bg-white drop-shadow-2xl rounded-xl">
            <form
              onSubmit={(event) => handleSubmit1(event)}
              className="w-[85%]"
            >
              <h2 className="text-[1.85rem] text-[#555] text-center font-bold">
                Login
              </h2>

              <div className="input-group relative w-[17rem] my-[30px] mx-0">
                <input
                  type="text"
                  name="username1"
                  onChange={(e) => handleChange1(e)}
                  min="3"
                  className="w-full h-[40px] text-[16px] text-[#333] py-0 px-[10px] bg-transparent  "
                />
                <label
                  htmlFor=""
                  className="absolute  left-[5px] top-2 text-[15px] text-[#333] py-0 px-1 pointer-events-none transition-all ease-in-out duration-100"
                >
                  Username
                </label>
              </div>

              <div className="input-group relative w-[17rem] my-[30px] mx-0">
                <input
                  type="password"
                  name="password1"
                  onChange={(e) => handleChange1(e)}
                  className="w-full h-[40px] text-[16px] text-[#333] py-0 px-[10px] bg-transparent "
                />
                <label
                  htmlFor=""
                  className="absolute  left-[5px] top-2 text-[15px] text-[#333] py-0 px-1 pointer-events-none transition-all ease-in-out duration-100"
                >
                  Password
                </label>
              </div>

              <div className="forget-pass -mt-[15px] mr-0 mb-[15px]">
                <Link to="/forgetpassword" className="text-[#333] text-[14px]">
                  Forgot Password?
                </Link>
              </div>
              <button
                type="submit"
                className="btn relative top-0 left-0 w-full h-[40px] bg-primary-color text-[16px] text-white font-medium cursor-pointer rounded-md shadow-xl hover:scale-95 active:scale-95"
              >
                Login
              </button>
              <div className="sign-link text-[14px] text-center my-[25px] mx-0">
                <p className="text-[#333]">
                  Don't have an account?{" "}
                  <Link
                    to="#"
                    className="text-primary-color font-semibold hover:decoration-dashed signUp-Link"
                  >
                    Sign Up
                  </Link>
                </p>
              </div>
            </form>
          </div>
          <ToastContainer />
        </div>
      </div>
    </>
  );
};
