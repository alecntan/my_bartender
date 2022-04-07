import Box from '@mui/material/Box';
import logo from '../logo.png';

export default function Logo(props) {
    return (
        <Box
            display='flex'
            justifyContent='center'
            component='img'
            sx={{
                mt: 25,
                mb: 3,
                height: props.height,
                width: props.width,
                maxHeight: { xs: props.height },
                maxWidth: { xs: props.width },

            }}
            alt="My Bartender Logo"
            src={logo}
        />
    );
}
