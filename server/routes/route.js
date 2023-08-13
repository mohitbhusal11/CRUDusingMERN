import express from "express";
import {addUser, getUserEdit, getUsers, editUser, dltUser} from "../controller/user-controller.js";



const router = express.Router();

router.post('/add', addUser);
router.get('/all', getUsers)
router.get('/:id', getUserEdit);
router.post('/:id', editUser);
router.delete('/:id', dltUser);

export default router;