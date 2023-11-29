import { Box, Button } from "@mui/material";
import { Link } from "react-router-dom";

export const Home = ()=> {

    return (
        <Box sx={{
            margin: "100px auto",
            width: 500
        }}
    >
        <Link to="/" style={{
          textDecoration: "none",
          color: "#fff"
        }}>
            <Button variant="contained" sx={{
                height: 300,
                width: 500
            }}>
                    Upload an Image
            </Button>
        </Link>
    </Box>
    );
}