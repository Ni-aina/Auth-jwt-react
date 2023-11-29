import { Box, Button } from "@mui/material";

export const Admin = ()=> {

    return (
        <Box sx={{
                margin: "100px auto",
                width: 500
            }}
        >
            <Button variant="contained" sx={{
                height: 300,
                width: 500
            }}>
                You can't do any thing
            </Button>
        </Box>
    );
}