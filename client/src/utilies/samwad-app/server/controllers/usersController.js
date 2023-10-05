const User = require("../model/userModel");
const bcrypt = require("bcrypt");
// const distance from '../Functions/distance';
const { calculateDistance } = require('../Functions/distance')


module.exports.signUp= async(req,res,next)=>{
   try {
    // req=null;
    const  {username,email,password,SQ}=req.body;
    const usernameCheck = await User.findOne({username});
    if(usernameCheck)
    return res.json({msg:"Username already uses",status:false});
    const emailCheck = await User.findOne({email});
    if(emailCheck)
    return res.json({msg:"Email already used",status:false})
    const hashedPassword = await bcrypt.hash(password,10);
    const user = await User.create({
        username,
        email,
        password:hashedPassword,
        SQ
    });
    delete user.password;
    return res.json({status:true,user});
   } catch (error) {
    next(error);
   }
};

module.exports.login = async (req, res, next) => {
  try {
    const { username1, password1 } = req.body;
    const username=username1;
    const password = password1;
    const user = await User.findOne({ username });
    if (!user)
      return res.json({ msg: "Incorrect Username or Password", status: false });
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid)
      return res.json({ msg: "Incorrect Username or Password", status: false });
    delete user.password;
    return res.json({ status: true, user });
  } catch (ex) {
    next(ex);
  }
};

module.exports.avatar=async(req,res,next)=>{
  try {
    const userId = req.params.id;
    // console.log(userId);
    const avatarImage = req.body.image;
    const userData = await User.findByIdAndUpdate(
      userId,
      {
        isAvatarImageSet: true,
        avatarImage,
      },
      { new: true }
    );
    return res.json({
      isSet: userData.isAvatarImageSet,
      image: userData.avatarImage,
    });
  } catch (error) {
    next(error)
  }
}

module.exports.forgetPassword=async(req,res,next)=>{
  try {
    const {email, SQ,newPassword } = req.body;
    // const username=username1;
    // const password = password1;
    const user = await User.findOne({email});
    // const realSQ=user.SQ;
    
    if (!user)
    return res.json({ msg: "Incorrect Email or Security question", status: false });

  // const isPasswordValid = await bcrypt.compare(password, user.password);

    if(user.SQ!==SQ)
    return res.json({ msg: "Incorrect Email or Security question", status: false });

      const userId=user._id;
    const newHashedPassword = await bcrypt.hash(newPassword,10);
    const userdata =await User.findByIdAndUpdate(
      userId,{
        password:newHashedPassword,
      }
    );
    return res.json({ status: true, user });
    }
    catch (error) {
    next(error);
  }
}
module.exports.online=async(req,res,next)=>{
  try {
    
    // console.log(userId);
    // const online = req.body;
    const {userId } = req.body;
    // console.log(userId);
    const userdata =await User.findByIdAndUpdate(
      {_id:userId},{
      online:true},
      { new: true }
    );
    return res.json({
      // isSet: userData.isAvatarImageSet,
      online: true,
    });
    // console.log(userdata);
    // return res.json({ status: true, user });
  } catch (error) {
    // console.log("hello");
    next(error);
  }
}

module.exports.result=async(req,res,next)=>{
  try {
    
  
      const { userId,
          latitude,
          longitude,} = req.body;
          const _id=userId;
      const update=await User.findByIdAndUpdate(
        userId,{
          coordinates:{
            latitude,
            longitude,
          },
        },{
          new:true,
        }
      )
      // console.log(update);
      // console.log("hello");
      const activeUsers = await User.find({ online: true }).select('username coordinates avatarImage');
      // console.log(activeUsers);
       // Calculate distances and filter users within 1 km
    const nearbyUsers = activeUsers.filter(user => {
      // console.log(update);
      if(user.username!==update.username){
      const distanceFind = calculateDistance(
        update.coordinates.latitude,
        update.coordinates.longitude,
        user.coordinates.latitude,
        user.coordinates.longitude
      );
      // console.log(distanceFind);
      return distanceFind <= 2;
      }
    });
    // console.log(nearbyUsers);
    // console.log(nearbyUsers);
    const nearbyUsernames = nearbyUsers.map((user) => {
      return {
        username: user.username,
        avatarImage: user.avatarImage,
      };
    });
    // console.log(nearbyUsernames);
    // res.json();
      // const partner=
      // res.json(activeUsers);
      res.json({array:nearbyUsernames});
      // return res.json({
      //   // isSet: userData.isAvatarImageSet,
      //   location:true,
      // });


  } catch (error) {
    // console.log("hello");
    next(error);
  }
}

