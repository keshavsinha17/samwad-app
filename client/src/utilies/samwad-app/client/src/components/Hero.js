import React ,{useEffect}from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import "./Hero.css";
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import axios from "axios";
import {
  Link
} from "react-router-dom";
import { setOnlineRoute} from "../utilies/APIRoutes";

export const Hero = () => {
  const navigate=useNavigate();
  useEffect( () => {
    if (!localStorage.getItem("sanwad-app"))
      navigate("/login");
  },[]);
  
  const [text1] = useTypewriter({
    words : ['Locate...', 'Chat...' , 'Repeat...'],
    loop : {},
    typeSpeed : 100,
    deleteSpeed : 100,
    delaySpeed : 1500,
  });

  
  const Connect = async () => {
   
    // event.preventDefault();
    // const objId=localStorage.getItem(body.id);
    // const user = await JSON.parse(localStorage.getItem("sanwad-app")); 
    const user = await JSON.parse(localStorage.getItem("sanwad-app"));
    // console.log(user._id);
    const userId=user._id;
      const {data}=await axios.post(setOnlineRoute,{
        userId,
        // online:true
      });
      if(data.online===true){
        // user.isAvatarImageSet=true;
        user.online=true;
        localStorage.setItem("sanwad-app",JSON.stringify(user));
        // navigator("/");
        // navigate("/");
      }
  }
  return (
    <>
      <section className="bg-g w-full md:h-[77vh] mt-[px] flex justify-center">
        <div className="bg-g lg:w-[83.8rem] md:w-[63.6rem] w-[47.5rem]  h-full  px-0">
          <div className="flex md:flex-row flex-col-reverse items-center h-full lg:p-0 ">
          {/* ---------------------------------- */}
            <div className="flex flex-col gap-y-8 m-8 md:m-0">
              <div className="headline">
                <div className="text-gray-400 font-medium text-xl items-center mb-4">
                  <p>• Made In India</p>
                </div>
                <p className="flex  text-3xl font-extrabold md:text-4xl xl:text-6xl">
                  Proximity Meets Posiblity
                </p>

                <div className="flex font-extrabold text-primary-color md:text-5xl text-3xl">
                  <span className="multi-type">{text1}  </span>
                  <span className="">
                  <Cursor cursorStyle="|" />
                  </span>
                </div>
              </div>

              <div className="m md:text-3xl text-2xl tracking-wide font-medium font text-slate-500">
                <span>Discover Nearby Conversations &</span>
                <br />
                <span>Connect with Ease.</span>
              </div>

              <div className="flex items-center">
                <button  onClick={Connect}>
                <Link
                
                  to="/result"
                  // onClick={Connect}
                  className="cursor-pointer rounded-full font-medium bg-primary-color text-white font-rubik xl:text-lg text-sm  xl:px-9  px-5 xl:py-4 py-2"
                >
                  {/* <button  onClick={Connect}> */}
                  <span className="flex-col items-center mr-3">
                    Connect Now
                  </span>
                  {/* </button> */}
                  <FontAwesomeIcon
                    icon={faArrowRightLong}
                    style={{ color: "#ffffff" }}
                    className="text-xl font-normal opacity-90"
                  />
                </Link>
                </button>
              </div>
            </div>
            {/* ---------------Split-------------- */}
            <div className="p-0 flex md:flex-col items-center h-full justify-between">

                <div className="relative top-[80px] -right-[140px] md:block hidden z-40 w-[100px] bg-none p-0 m-0 animate-topdown">
                <img src="hands.png" alt="" className=" rotate-12" />
                </div>
              

              <img src="Phone.png" alt="" className="p-0 w-[37.8rem]" />
              
              <div className="relative right-[0px] -top-[5px] z-40 md:block hidden w-[90px] bg-none p-0 m-0 animate-topdown">
                <img src="globe.png" alt="" className="relative right-[170px] -top-[100px] z-40 md:inline-block hidden w-[90px] bg-none p-0 m-0 animate-topdown rotate-12" />
                
              </div>
              
              
              
            
            </div>
          </div>
        </div>
      </section>
      {/* <section className="bg-purple-200 w-full h-[77vh] rounded-[5rem] "></section> */}
      
    </>
  );
};
