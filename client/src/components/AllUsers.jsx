import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import {getUsers,dltUser} from "../service/api.js";
import React, { useEffect } from 'react';
import { useState } from "react";
import "../style/AllUsers.css"
import {useNavigate} from "react-router-dom";

const AllUsers = () =>{

    const navigate = useNavigate()
    const [users, setusers] = useState([]);

    const editUser = (Id) => {
        navigate(`/EditUser/${Id}`);
    }

    const deleteUser = async (Id) =>{
        await dltUser(Id);
        getAllUsers();
    }

    useEffect(()=>{
        getAllUsers();
    }, []);

    const getAllUsers = async () =>{
        let response = await getUsers();
        setusers(response.data);
    }

    return(
        <TableContainer className="table-container">
            <Table>
                <TableHead>
                    <TableRow>
                        {/* <TableCell className="table-head"> ID </TableCell> */}
                        <TableCell className="table-head"> Name </TableCell>
                        <TableCell className="table-head"> Username </TableCell>
                        <TableCell className="table-head"> Email </TableCell>
                        <TableCell className="table-head"> Phone </TableCell>
                        <TableCell className="table-head"></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        users.map(user => (
                            <TableRow key={user.userId}>
                                {/* <TableCell>{user.userId}</TableCell> */}
                                <TableCell>{user.name}</TableCell>
                                <TableCell>{user.username}</TableCell>
                                <TableCell>{user.email}</TableCell>
                                <TableCell>{user.phone}</TableCell>
                                <TableCell>
                                    <Button className="edit-button" onClick={()=> editUser(user.userId)}>Edit</Button>
                                    <Button className="delete-button" onClick={() => deleteUser(user.userId)}>Dlt</Button>
                                </TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default AllUsers;