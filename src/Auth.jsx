import { Box, FormControl, InputLabel, Input, Button } from "@mui/material";
import { useContext } from "react";
import { userProfilContext } from "./UserContext";
import { useNavigate } from "react-router-dom";
import { authentication, isAuthentication } from "./data";


export const Auth = ()=> {
    const value = useContext(userProfilContext);
    const {
        email,
        password,
        setUserProfilContext
    } = value;
    const navigate = useNavigate();
    const Autorization = ()=> {
        const promise = authentication(email, password);
        const login = async ()=> {
            const data = await promise;
            if (data) 
                if (isAuthentication()) navigate("/");
        };
        login();
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
                onChange={ e => setUserProfilContext({[e.target.name]: e.target.value})}
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
                onChange={ e => setUserProfilContext({[e.target.name]: e.target.value})}
            />
        </FormControl>
        <Button variant="contained"
            onClick={()=> Autorization()}
        >
            Login
        </Button>
        </Box>
    );
}
