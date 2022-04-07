import Logo from '../components/Logo.js';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import SearchBar from '../components/SearchBar.js';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function SearchPage(props) {
    return (
            <Grid 
                container
                alignItems='center'
                justifyContent='center'
            >
                <Grid item>
                    <Logo height={150} width={350} />
                </Grid>
                <Grid item xs={12} textAlign='center'>
                    <TextField sx={{  width: "50%" }}/>
                </Grid>
                <Grid item xs={12} textAlign='center'>
                    <Button sx={{ mr: 2, mt: 3, color: 'black'  }}>Search</Button>
                    <Button sx={{ ml: 2, mt: 3, color: 'black'  }}>Random</Button>
                </Grid>
            </Grid>
    );
}
