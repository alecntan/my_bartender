import { useState } from 'react';
import { auth } from './config.js';
import UserMenu from './components/UserMenu.js';
import { onAuthStateChanged } from 'firebase/auth';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import Container from '@mui/material/Container';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import logo from './logo.png';

function App() {

    let navigate = useNavigate();

    const handleClickLogin = () => {
        navigate('/login');
    }

    const handleClickLogo = () => {
        navigate('/');
    }

    const [currUser, setCurrUser] = useState(null);

    onAuthStateChanged(auth, (user) => {
        if(user) {
            setCurrUser(user);
        } else {
            setCurrUser(null);
        }
    });


    return (
        <Container>
            <AppBar sx={{ boxShadow: 'none', mb: 3, }} color='transparent' position='static'>
                <Toolbar position='static' sx={{ justifyContent: 'space-between', p:0}} >
                     <Box 
                        sx={{
                            maxHeight: { xs: 100 },
                            maxWidth:  { xs: 100 },
                            flexGrow: 1
                        }}
                        component='img'
                        alt='logo'
                        src={logo}
                        onClick={handleClickLogo}
                     />
                     { currUser != null ? <UserMenu email={currUser.email} /> : <Button color='inherit' sx={{ mr : 5}} onClick={handleClickLogin}>Login</Button> }
                </Toolbar>
            </AppBar> 
            <Outlet context={[currUser, setCurrUser]} />
        </Container>
    );
}

export default App;
