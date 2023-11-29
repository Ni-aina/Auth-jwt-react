import React, { useState } from "react";
import { Box, FormControl, InputLabel, Input, Button } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Register = ()=> {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const register = ()=> {
        axios.post('https://127.0.0.1:8000/api/register', {
        email: email,
        password: password
        }).then(res => { 
            navigate("/");
            window.location.reload();
        }).catch(() => {
            return false;
        });
    }
    return (
        <Box sx={{
        margin: "150px auto",
        width: 500
        }}>
        <FormControl
            fullWidth
            variant="standard"
            sx={{ m: 1 }}
        >
            <InputLabel htmlFor="email">Email</InputLabel>
            <Input
                id="email"
                type="email"
                name="email"
                onChange={(e)=> setEmail(e.target.value)}
            />
        </FormControl>
        <FormControl
            fullWidth
            variant="standard"
            sx={{ marginTop: 3, marginBottom: 3 }}
        >
            <InputLabel htmlFor="password">Password</InputLabel>
            <Input
                id="password"
                type="password"
                name="password"
                onChange={(e)=> setPassword(e.target.value)}
            />
        </FormControl>
        <Button variant="contained" onClick={()=> register()}>
            Register
        </Button>
        </Box>
    );
}