import React from "react";
import { Box, Button, styled } from "@mui/material";
import { CloudUpload } from "@mui/icons-material";

const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1
});

export const ImageUpload = ()=> {
    const handleApi = (e)=> {
        const formData = new FormData();
        const image = e.target.files[0];
        console.log(image);
        formData.append('image', image);
        console.log(formData);
    }
    return (
        <Box sx={{
            margin: "15% 45%",
            width: 500
        }}>
            <Button 
                component="label" 
                variant="contained" 
                startIcon={<CloudUpload />}
            >
                Upload an Image
                <VisuallyHiddenInput type="file" onChange={handleApi}/>
            </Button>
        </Box>
    );
}
