import React from "react";
import { Box, FormControl, InputLabel, Input, Button } from "@mui/material";
import axios from "axios";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { useNavigate } from "react-router-dom";

export const Register = ()=> {
    const form = useForm();
    const navigate = useNavigate();
    const { register, control, handleSubmit } = form;
    const saveData = (data)=> {
        axios.post(`${process.env.REACT_APP_API_URL}/api/register`, {
        email: data.email,
        password: data.password
        }).then(res => { 
            navigate("/");
            return res.data;
        }).catch(() => {
            return false;
        });
    }
    return (
        <Box sx={{
        margin: "150px auto",
        width: 500
        }}>
            <form onSubmit={handleSubmit(saveData)}>
                <FormControl
                    fullWidth
                    variant="standard"
                    sx={{ m: 1 }}
                >
                    <InputLabel htmlFor="email">Email</InputLabel>
                    <Input
                        {...register("email")}
                        required
                    />
                </FormControl>
                <FormControl
                    fullWidth
                    variant="standard"
                    sx={{ marginTop: 3, marginBottom: 3 }}
                >
                    <InputLabel htmlFor="password">Password</InputLabel>
                    <Input
                        {...register("password")}
                        type="password"
                        required
                    />
                </FormControl>
                <Button variant="contained" type="submit">
                    Register
                </Button>
            </form>
            <DevTool control={control}/>
        </Box>
    );
}
