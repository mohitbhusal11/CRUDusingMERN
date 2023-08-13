import { Button, FormControl, FormGroup, Input, InputLabel, Typography } from "@mui/material";
import React, { useState } from 'react';
import "../style/AddUser.css";
import {addUser, getUser} from "../service/api.js";
import {useNavigate} from "react-router-dom";

const defaultValue = {
    name: '',
    username: '',
    email: '',
    phone: ''
}

const AddUser = () =>{

    const navigate = useNavigate();

    const[user,setuser] = useState(defaultValue);

    const onValueChange = (e) =>{
        console.log(e.target.name, e.target.value);
        setuser({...user, [e.target.name]: e.target.value});
        console.log(user);
    }

    const addUserDetails = async () =>{
        await addUser(user);
        navigate('/AllUsers');
    }

    return (
        <FormGroup className="form-group">
            <Typography className="title" variant="h4">Add User</Typography>
            <FormControl className="form-field">
                <InputLabel>Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="name"/>
            </FormControl>
            <FormControl className="form-field">
                <InputLabel>Username</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="username"/>
            </FormControl>
            <FormControl className="form-field">
                <InputLabel>E-mail</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="email"/>
            </FormControl>
            <FormControl className="form-field">
                <InputLabel>Phone No.</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="phone"/>
            </FormControl>
            <FormControl>
                <Button className="button" variant="contained" onClick={()=> addUserDetails()}>Submit</Button>
            </FormControl>
        </FormGroup>
    )
}

export default AddUser;