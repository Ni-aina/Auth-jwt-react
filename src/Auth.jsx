import { Box, FormControl, InputLabel, Input, Button } from "@mui/material";
import { useContext } from "react";
import { userProfilContext } from "./UserContext";
import { useNavigate } from "react-router-dom";
import { authentication } from "./data";
import { jwtDecode } from "jwt-decode";
import Cookies from "universal-cookie";


export const Auth = ()=> {
    const value = useContext(userProfilContext);
    const {
        email,
        password,
        setUserProfilContext
    } = value;
    const navigate = useNavigate();
    const isAuthentication = ()=> {
        const promise = authentication(email, password);
        const login = async ()=> {
            const data = await promise;
            const cookie = new Cookies();
            if (JSON.parse(localStorage.getItem("%&a%g$r$£%z7%&")!==null) && data && cookie.get("a%@&dr$o#%$u%")) {
                const decodeCookie = jwtDecode(cookie.get("a%@&dr$o#%$u%"));
                const decodeData = jwtDecode(JSON.parse(localStorage.getItem("%&a%g$r$£%z7%&")));
                if (decodeCookie.email===decodeData.email)
                    navigate("/home");
            }
        }
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
            onClick={()=> isAuthentication()}
        >
            Login
        </Button>
        </Box>
    );
}
