import {AppBar,Toolbar} from '@mui/material';
import { NavLink } from 'react-router-dom';
import '../style/Navbar.css';



const Navbar = () => {
    return(
        <AppBar className='header'>
            <Toolbar>
                <NavLink to='/' className='tabs'>Frying Code</NavLink>
                <NavLink to='/AddUser' className='tabs'>Add User</NavLink>
                <NavLink to='/AllUsers' className='tabs'>All User</NavLink>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar;