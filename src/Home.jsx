import { useEffect } from "react";
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { isNotAuthentication } from "./data";

export const Home = ()=> {

    const navigate = useNavigate();

    useEffect(() => {
        if (isNotAuthentication()) navigate("/");
    })

    return (
        <Box sx={{
        margin: "150px auto",
        width: 500
        }}>
            Welcome to the Auth page
        </Box>
    );
}