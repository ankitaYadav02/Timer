import User from "../Model/user.js"

const createRoomServices = async(req, res) => {
    const{ url, duration, owner } = req.body;
    
   const cretedUser =  await User.create({url, duration, owner});
   if (cretedUser) { 
       res.status(200).send({message: "User created"})
   } else {
       res.status(500).send("INTERNAL SERVER ERROR");
   }

}

export default createRoomServices;