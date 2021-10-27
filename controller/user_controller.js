const User = require("../model/user_model");

const addUser = async (req,res)=>{
    try {        
     await User.create({name:req.body.name,email:req.body.email})  
     res.send({status:200,message:"added successfully",data:null})
    } catch (error) {
        res.send({status:401,message:error,data:null})  
    }
}

const allUsers =  async (req,res)=>{

    try {        
     const user = await User.findAll({offset:0,limit:10,order:[["createdAt","DESC"]]})  
     res.send({status:200,message:"All Users",data:user})
    } catch (error) {
        res.send({status:401,message:error,data:null})  
    }
}

const getSingleUser =  async (req,res)=>{
    try {        
     const user = await User.findOne({where:{id:req.params.id}})  
     res.send({status:200,message:"All Users",data:user})
    } catch (error) {
        res.send({status:401,message:error,data:null})  
    }
}

const updateUser =  async (req,res)=>{
    try {        
     const user = await User.update({name:req.body.name,email:req.body.email},{where:{id:req.params.id}})  
     res.send({status:200,message:"updated successfully",data:null})
    } catch (error) {
        res.send({status:401,message:error,data:null})  
    }
}

const deleteUser =  async (req,res)=>{
    try {        
     const user = await User.destroy({where:{id:req.params.id}})  
     res.send({status:200,message:"delete successfully",data:user})
    } catch (error) {
        res.send({status:401,message:error,data:null})  
    }
}




module.exports = {
    addUser,
    allUsers,
    getSingleUser,
    updateUser,
    deleteUser
}