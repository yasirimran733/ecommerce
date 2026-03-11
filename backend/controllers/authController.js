import prisma from "../config/db";
import bcrypt from "bcrypt"
export const register = async (req,res) =>{
    const {name, email,password,role,goole_id,guest_id,auth_provider} = req.body;
    try{
        const hashPassword = bcrypt.hash(password,10);
        if(!guestId){
            localStorage.setItem("guestId" , name+timespan)
        }
       const user = await prisma.user.create({
        data:{
            name:name,
            password:hashPassword,
            email:email,
            role:role,
        }
    }) 
    }
    catch(error){
        res.status(500).json({success:false,message:error})
    }
}