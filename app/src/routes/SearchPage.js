import { useState, useEffect } from 'react';
import { useSearchParams, useNavigate, createSearchParams } from 'react-router-dom';
import Logo from '../components/Logo.js';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function SearchPage(props) {

    const [search, setSearch] = useState('');
    const [searchParams, setSearchParams] = useSearchParams();

    const updateSearch = (e) => {
        const new_val = e.target.value;
        setSearch(new_val.replace(/^\s+|\s+$/g, ''));
    }
   
    const navigate = useNavigate();
    const handleSearch = () => {
        navigate({pathname: 'search',
                  search  : createSearchParams({
                    filter : search
                  }).toString()
        });
    };

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
                    <TextField sx={{  width: "50%" }} onChange={updateSearch}/>
                </Grid>
                <Grid item xs={12} textAlign='center'>
                    <Button sx={{ mr: 2, mt: 3, color: 'black'  }} onClick={handleSearch}>Search</Button>
                    <Button sx={{ ml: 2, mt: 3, color: 'black'  }}>Random</Button>
                </Grid>
            </Grid>
    );
}
