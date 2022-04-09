import { auth } from '../config.js';
import { useState } from 'react';
import { signOut } from 'firebase/auth';
import { useNavigate, useOutletContext } from 'react-router-dom';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';


export default function UserMenu(props) {


    const currUser = useOutletContext();
    const navigate = useNavigate();
    const handleClickFavourites = () => {
        navigate(`/user/${auth.currentUser.uid}/favourites`);
    }

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClickMenu = (e) => {
        setAnchorEl(e.currentTarget);
    };
    const handleCloseMenu = () => {
        setAnchorEl(null);
    }

    const handleUpdatePassword = () => {
        navigate(`/user/${auth.currentUser.uid}/update_password`);
        setAnchorEl(null);
    }

    const handleUpdateEmail = () => {
        navigate(`/user/${auth.currentUser.uid}/update_email`);
        setAnchorEl(null);
    }

    const handleClickLogout = () => {
        signOut(auth).then(() => {
            navigate('/');
        });
    }

    const handleClickDeleteAccount = () => {
        navigate(`/user/${auth.currentUser.uid}/delete_account`);
    }

    return (
        <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }} >
            <Button color='inherit' sx={{ mr : 3}} onClick={handleClickFavourites}>My Favourites</Button>
            <Button 
                id='basic-button'
                color='inherit'  
                aria-controls={open ? 'basic-menu' : undefined }
                aria-haspopup='true'
                aria-expanded={open ? 'true' : undefined }
                onClick={handleClickMenu}
            >
                My Profile
            </Button>
            <Menu
                id='basic-menu'
                anchorEl={anchorEl}
                open={open}
                onClose={handleCloseMenu}
                MenuListProps={{
                    'aria-labelledby' : 'basic button',
                }}
            >
                <MenuItem onClick={handleUpdateEmail}>Update Email</MenuItem>
                <MenuItem onClick={handleUpdatePassword}>Update Password</MenuItem>
                <MenuItem onClick={handleClickDeleteAccount}>Delete Account</MenuItem>
                <MenuItem onClick={handleClickLogout}>Logout</MenuItem>
            </Menu>
            <Typography variant='body1' sx={{ ml: 3 }}>
                user: { auth.currentUser.email }
            </Typography>
        </Box>
    );
}
