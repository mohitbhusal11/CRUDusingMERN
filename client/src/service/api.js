import axios from "axios";

const URL = "http://localhost:8000";

export const addUser = async (data) =>{
    try{
        return await axios.post(`${URL}/add`, data);
    }catch (error){
        console.log('Error while calling add user API ', error);
    }
}

export const getUsers = async () =>{
    try{
        return await axios.get(`${URL}/all`)
    }catch(error){
        console.log("error while get user in api js file ", error);
    }
}

export const getUserEdit = async(id) =>{
    try{
        return await axios.get(`${URL}/${id}`);
    }catch(error){
        console.log("error in api js in getUser", error);
    }
}

export const editUser = async(user, id) =>{
    try{
        return await axios.post(`${URL}/${id}`,user);
    }catch(error){
        console.log("error while using editUser in api.js", error);
    }
}

export const dltUser = async (id) =>{
    try{
        return await axios.delete(`${URL}/${id}`);
    }catch(error){
        console.log("erroe while using dltUser in Api.js", error);
    }
}