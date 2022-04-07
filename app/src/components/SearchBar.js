import { useState } from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';

export default function SearchBar(props){
    
    const [ searchBy, setSearchBy ] = useState('');

    const handleChange = (event) => {
        setSearchBy(event.target.value);
    };

    return (
        <h1>Search</h1>
    );
}
