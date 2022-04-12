import { useState } from 'react';
import { useSearchParams, useNavigate, createSearchParams } from 'react-router-dom';
import Logo from '../components/Logo.js';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function SearchPage(props) {

    const [search, setSearch] = useState('');

    const updateSearch = (e) => {
        const new_val = e.target.value;
        setSearch(new_val.replace(/^\s+|\s+$/g, ''));
    }
   
    const navigate = useNavigate();
    const handleSearch = () => {
        let params = search.split(',');
        params = params.map((p) => {return p.replace(/^\s+|\s+$/g, '')});
        navigate({pathname: 'search',
                  search  : createSearchParams({
                  params  : params.toString(',')
                }).toString()
        });
    };

    const handleEnter = (e) => {
        if(e.key === 'Enter') {
            handleSearch();
        }
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
                    <TextField label='Drink Name' sx={{  width: "50%" }} onChange={updateSearch} onKeyPress={handleEnter} />
                </Grid>
                <Grid item xs={12} textAlign='center'>
                    <Button sx={{ mr: 2, mt: 3, color: 'black'  }} onClick={handleSearch}>Search</Button>
                </Grid>
            </Grid>
    );
}
