import User from "../schema/user-schema.js";


export const addUser = async (req, res) =>{
    const user = req.body;
    const newUser = new User(user);

    try{
        await newUser.save();
        res.status(201).json(newUser);
    }catch(error){
        res.status(409).json({message: error.message})
        console.log("error in user controller.js", error);
    }
}
export const getUsers = async (req, res) =>{
    try{
        const users = await User.find({});
        res.status(200).json(users);
    }catch(error){
        res.status(400).json({message: error.message});
        console.log()
    }
}

export const getUserEdit = async (req, res) =>{
    console.log(req.params.id);
    try{
        // const user = await User.find({userId: req.params.id});
        // res.status(200).json(user);
        const user = await User.findOne({userId: req.params.id});
        res.status(200).json(user);
    }catch(error){
        res.status(400).json({message: error.message});
        console.log()
    }
}

export const editUser = async (req,res)=>{
    let user = req.body;
    const editUser = new User(user);

    try{
        await User.updateOne({userId: req.params.id}, editUser);
        res.status(201).json(editUser);
    }catch(error){
        res.status(409).json({message: error.message});
    }
}

export const dltUser = async (req, res) =>{
    try{
        await User.deleteOne({userId: req.params.id})
        res.status(200).json({message: 'User deleted sucessfully'})
    }catch(error){
        res.status(409).json({message: error.message});
    }
}