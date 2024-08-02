import React from 'react';
import { Box, Typography, Link, IconButton } from '@mui/material';


const Footer = () => {
    return (
        <Box
            sx={{
                padding: 4,
                backgroundColor: "#4B5136",
                color: 'common.white',
                textAlign: 'center',
                width: '100vw',
                height:'20vh',
            }}
        >


            <Box sx={{ marginTop: 4 }}>
                <Typography variant="body2">123 tree top Valley, Holmdel, NJ</Typography>
                <Typography variant="body2">Business Phone: (123) 456-7890</Typography>
            </Box>

            <Box mt={4}>
                <Typography variant="body2">&copy; {new Date().getFullYear()} Your Company. All rights reserved.</Typography>
            </Box>
        </Box>
    );
};

export default Footer;

