import React ,{useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import {resultRoute } from '../utilies/APIRoutes';
import {Link} from 'react-router-dom';
import axios from 'axios';


export const Result = () => {
    const navigate=useNavigate();
    const [nearData, setNearData] = useState([]);
    useEffect( () => {
        if (!localStorage.getItem("sanwad-app"))
          navigate("/login");
      },[]);
      // const [latitude,setLatitude]=useState(null);
      // const [longitude,setLongitude]=useState(null);
      
      useEffect(()=>{
        if("geolocation" in navigator){
          navigator.geolocation.getCurrentPosition(
            (position)=>{
              // setLatitude(position.coords.latitude);
              // setLongitude(position.coords.longitude);
              setLocation(position.coords.latitude,position.coords.longitude);
            }
          )
          
          // setLongitude(position.coords.longitude);
        }else{
          console.log("error");
        }
        
      }
      ,[])
      // useEffect(()=>{
      //   axios
      //     .get(resultRoute)
      //     .then((response) => {
      //       setNearData(response.data.nearbyUsernames);
      //       console.log(nearData);
      //     })
      //     .catch((error) => {
      //       console.error('Error fetching data:', error);
      //     });
      // })
      
      const setLocation = async (latitude,longitude) => {
        
        // event.preventDefault();
        // const objId=localStorage.getItem(body.id);
        // const user = await JSON.parse(localStorage.getItem("sanwad-app")); 
        const user = await JSON.parse(localStorage.getItem("sanwad-app"));
        // console.log(latitude,longitude);
        const userId=user._id;
        // console.log(userId); 
        await axios.post(resultRoute, {
          userId,
          latitude,
          longitude,
        }).then(response => {
          setNearData(response.data.array);
          // console.log(nearData);
        })
        .catch(error => {
          console.error('Error fetching array:', error);
        });
        // console.log(nearData);


        // if(data.location===true){
        //   // user.isAvatarImageSet=true;
        //   user.coordinates.latitude=latitude;
        //   user.coordinates.longitude=longitude;
        //   localStorage.setItem("sanwad-app",JSON.stringify(user));
        //   // navigator("/");
        //   // navigate("/");
        // }
         
          // const {data}=await axios.post(resultRoute,{
          //   userId,
          //   latitude,
          //   longitude,
          //   // online:true
          // });
          // if(data.online===true){
          //   // user.isAvatarImageSet=true;
          //   // user.online=true;
          //   // localStorage.setItem("sanwad-app",JSON.stringify(user));
          //   // navigator("/");
          //   // navigate("/");
          // }
      }
    
    
  return (
    <div>
        
        <section className=" w-full h-fit md:h-[83vh] flex  justify-center z-[50] pb-32">

<div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-16 h-fit relative md:top-10 top-6 transition-all ease-in-out">



    {nearData.map((user, index) => (
          <div key={index} className="bg-white font-semibold text-center rounded-3xl border shadow-lg p-8 h-[18rem] w-[14rem] md:w-[16rem] md:h-[19rem]">
            <img
              className="mb-3 w-24 h-24  shadow-lg mx-auto outline outline-[3px] outline-offset-[3px] outline-primary-color rounded-full hover:scale-110 transition-all ease-in-out"
              src={user.avatarImage}
              alt="product designer"
            />
            <h1 className="text-lg text-gray-700">{user.username}</h1>
            <h3 className="text-xs text-gray-400 "> Annonymous </h3>
            {/* <p className="text-sm text-gray-400 mt-4">
                {" "}
                This user is within the range.{" "}
              </p> */}
            <Link
              to="#_"
              className="relative inline-flex items-center justify-center p-4 px-7 py-2 overflow-hidden  text-primary-color transition duration-300 ease-out border-2 border-primary-color rounded-full shadow-md group mt-8 font-semibold"
            >
              <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-primary-color    group-hover:translate-x-0 ease rounded-full">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </span>
              <span className="absolute flex items-center justify-center w-full h-full text-purple-500 transition-all duration-300 transform group-hover:translate-x-full ease font-semibold">
                Chat
              </span>
              <span className="relative invisible font-semibold">Chat</span>
            </Link>
          </div>
        ))}





    
</div>
      </section>



    </div>
  )
}
