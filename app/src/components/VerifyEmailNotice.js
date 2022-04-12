import { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { auth } from '../config.js';
import { sendEmailVerification } from 'firebase/auth';

export default function VerifyEmailNotice(props) {

    const [sent, setSent] = useState(false);

    const handleSendEmail = () => {
        sendEmailVerification(auth.currentUser)
        .then(() => {
            setSent('Email sent!');
        });
    }

    return (
        <Card sx={{ width: '100%' }}>
            <CardContent>
                <Typography gutterBottom variant='h5'>
                    Confirm Email
                </Typography>
                <Typography gutterBottom variant="body2">
                    You must confirm you email address before you can view your favourites.
                </Typography>
                { sent && <Typography variant='body2'>Email Sent!</Typography> }
            </CardContent>
        <CardActions>
            <Button size="small" onClick={handleSendEmail}>Send Email</Button>
        </CardActions>
    </Card>
    );
}
