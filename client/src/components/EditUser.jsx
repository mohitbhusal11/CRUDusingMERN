import { Button, FormControl, FormGroup, Input, InputLabel, Typography } from "@mui/material";
import React, { useEffect, useState } from 'react';
import "../style/AddUser.css";
import {editUser, getUserEdit} from "../service/api.js";
import {useNavigate, useParams} from "react-router-dom";


const defaultValue = {
    name: '',
    username: '',
    email: '',
    phone: ''
}

const EditUser = () =>{

    const[user,setUser] = useState(defaultValue);
    const navigate = useNavigate();
    const {id} = useParams();

    useEffect(()=>{
        loadUserDetails();  
    },[]);

    const loadUserDetails = async () =>{
        const response = await getUserEdit(id);
        console.log("User data from server:", response.data); // Log the data
        setUser(response.data);
    }

    

    const onValueChange = (e) =>{
        console.log(e.target.name, e.target.value);
        setUser({...user, [e.target.name]: e.target.value});
        console.log(user);
    }

    const editUserDetails = async () =>{
        await editUser(user,id);
        navigate('/AllUsers');
    }

    return (
        <FormGroup className="form-group">
            <Typography className="title" variant="h4">Edit User</Typography>
            <FormControl className="form-field">
                <InputLabel>Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="name" value={user.name} />
            </FormControl>
            <FormControl className="form-field">
                <InputLabel>Username</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="username" value={user.username}/>
            </FormControl>
            <FormControl className="form-field">
                <InputLabel>E-mail</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="email" value={user.email}/>
            </FormControl>
            <FormControl className="form-field">
                <InputLabel>Phone No.</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="phone" value={user.phone}/>
            </FormControl>
            <FormControl>
                <Button className="button" variant="contained" onClick={()=> editUserDetails()}>Submit</Button>
            </FormControl>
        </FormGroup>
    )
}

export default EditUser;