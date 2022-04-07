import { Link, Outlet } from 'react-router-dom';
import Container from '@mui/material/Container';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';

function App() {
    return (
        <Container>
            <AppBar sx={{ boxShadow: 'none'}} color='transparent' position='static'>
                <Toolbar sx={{ justifyContent: 'end'}} >
                     <Button color='inherit'>Login</Button>
                </Toolbar>
            </AppBar> 
            <Outlet />
        </Container>
    );
}

export default App;
