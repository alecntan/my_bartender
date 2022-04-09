import { auth } from '../config.js';
import { useState } from 'react';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';


export default function UserMenu(props) {

    const navigate = useNavigate();
    const handleClickFavourites = () => {
        navigate(`/favourites/${auth.currentUser.uid}`);
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
        navigate('/update_password');
        setAnchorEl(null);
    }

    const handleClickLogout = () => {
        signOut(auth).then(() => {
            navigate('/');
        });
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
                <MenuItem onClick={handleCloseMenu}>Update Email</MenuItem>
                <MenuItem onClick={handleCloseMenu} onClick={handleUpdatePassword}>Update Password</MenuItem>
                <MenuItem onClick={handleCloseMenu}>Delete Account</MenuItem>
                <MenuItem onClick={handleClickLogout}>Logout</MenuItem>
            </Menu>
        </Box>
    );
}
