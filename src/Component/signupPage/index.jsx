import React from 'react'
import Styles from './index.module.css';
import { Button, TextField } from '@mui/material';


const SignUp = () => {
    return (
        <div className={Styles.main}>
            <TextField type="text" placeholder='Name' size="small" label="Name"
                sx={{
                    background: "lightgray"
                }}
            />
            <TextField type="email" placeholder='Email' size="small" label="Email"
                sx={{
                    background: "lightgray"
                }}
            />
            <TextField type="password" placeholder='Password' size="small" label="Password"
                sx={{
                    background: "lightgray"
                }}
            />
            <Button variant="contained">Sing up</Button>
        </div>
    )
}

export default SignUp