import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

export const Chat1 = () => {
  
  return (
    <>
      <div>
        <div className="bg-white min-h-screen">
          <div className="bg-[#7A59F9] w-full h-16 flex items-center shadow-md px-2 py-1 justify-between">
            <div className="flex items-center p-0 w-full bg-[#e9e3ff]"> 
              {/* <ion-icon
                className="cursor-pointer text-white"
                name="arrow-back-outline"
              /> */}
              <div className="back text-white text-[40px] font-semibold cursor-pointer rotate-180">
              <MdOutlineKeyboardArrowRight/>
              </div>
              <div className="detail flex items-center justify-between gap-2 ">
              <img
                className="h-12 rounded-full mr-1 outline outline-2 outline-white"
                src="avt1.png"
                alt="No img"
              />
             
              <h1 className="text-white text-lg font-medium md:font-semibold">Rohit</h1>
              </div>
              
            </div>
            <ion-icon className="text-white" name="ellipsis-vertical-outline" />
          </div>
          <div className="chat-container px-4 py-8">
            <div className="flex pr-20 md:pr-0">
              <div className="chat-message bg-gray-100 p-2 w-96 rounded-lg my-2 shadow-md">
                <p className="text-gray-800">
                  Hii Arslaan, How are you today? Hope you're having a great
                  day! lorem32{" "}
                </p>
              </div>
            </div>
            <div className="flex justify-end pl-20">
              <div className="chat-message  bg-[#7A59F9] w-96  text-white p-4 rounded-lg shadow-md my-3  ">
                <p>
                  Hi Rohit, I'm doing well, thanks! Let's chat. Lorem ipsum
                  dolor sit amet consectetur adipisicing elit. Officiis
                  consectetur excepturi autem!
                </p>
              </div>
            </div>
            <div className="flex pr-20">
              <div className="chat-message bg-gray-100 p-2 w-96 rounded-lg my-3 shadow-md ">
                <p className="text-gray-800">
                  So, what are you doing for a living, and what makes you happy?
                </p>
              </div>
            </div>
            <div className="flex justify-end pl-20">
              <div className="chat-message  bg-[#7A59F9] w-96  text-white p-4 rounded-lg shadow-md my-3">
                <p>
                  I'm a Full-stack web developer, working at Facebook and
                  Amazon. Lorem ipsum dolor sit amet consectetur adipisicing
                  elit. Pariatur dolorum quaerat, tempore sit maiores amet
                  nihil. Inventore assumenda, eos iusto fuga distinctio sed
                  aperiam natus voluptatem minus. Repellendus iure sequi amet
                  perferendis?{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Fixed input and button at the bottom */}
        <div className="fixed bottom-0 left-0 right-0 px-4 py-2 bg-gray-200 z-50 ">
          <div className="flex items-center">
            <input
              type="text"
              id="message-input"
              className="flex-grow w-2/3 rounded-full p-2 border border-gray-300 mr-2 focus:outline-none"
              placeholder="Type your message..."
            />
            <button
              id="send-button"
              className="px-4 py-2 bg-[#7A59F9] purple-500 text-white rounded-full hover:opacity-90  focus:outline-none transition-all ease-in-out"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
