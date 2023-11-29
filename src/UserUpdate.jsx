import React from "react";
import { Box, FormControl, InputLabel, Input, Button } from "@mui/material";
import { useState } from "react";
import axios from "axios";

export const EditUser = ()=> {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const id = null;
    const userUpdate = ()=> {
        axios.post(`https://127.0.0.1:8000/api/editUser/${id}`, {
        email: email,
        password: password
        }).then(res => { 
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
        <Button variant="contained" onClick={()=> userUpdate()}>
            Update profil
        </Button>
        </Box>
    );
}
