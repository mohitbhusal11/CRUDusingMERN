import mongoose from "mongoose"



const connection = async (username, password) =>{
    const URL = `mongodb://${username}:${password}@ac-mheuhqa-shard-00-00.ybvpgpg.mongodb.net:27017,ac-mheuhqa-shard-00-01.ybvpgpg.mongodb.net:27017,ac-mheuhqa-shard-00-02.ybvpgpg.mongodb.net:27017/?ssl=true&replicaSet=atlas-p12odp-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try{
        await mongoose.connect(URL,{ useUnifiedTopology: true, useNewUrlParser: true});
        console.log("Database connected");
    }catch(error){
        console.log("error while using mongoDB :", error);
    }
}

export default connection;