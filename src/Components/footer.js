import React from 'react';
import { Box, Typography, Link, IconButton } from '@mui/material';


const Footer = () => {
    return (
        <Box
            sx={{
                padding: 4,
                backgroundColor: 'grey.800',
                color: 'common.white',
                textAlign: 'center',
            }}
        >
            <Box sx={{ marginBottom: 4 }}>
                <Typography variant="h6">Quick Links</Typography>
                <Box>
                    <Link href="/" sx={{ color: 'common.white', margin: 1, textDecoration: 'none' }}>
                        Home
                    </Link>
                    <Link href="/about" sx={{ color: 'common.white', margin: 1, textDecoration: 'none' }}>
                        About
                    </Link>
                    <Link href="/services" sx={{ color: 'common.white', margin: 1, textDecoration: 'none' }}>
                        Services
                    </Link>
                    <Link href="/contact" sx={{ color: 'common.white', margin: 1, textDecoration: 'none' }}>
                        Contact
                    </Link>
                </Box>
            </Box>

            <Box>
                <IconButton href="https://facebook.com" target="_blank" sx={{ color: 'common.white', margin: 0.5 }}>
                    
                </IconButton>
                <IconButton href="https://twitter.com" target="_blank" sx={{ color: 'common.white', margin: 0.5 }}>
                    
                </IconButton>
                <IconButton href="https://instagram.com" target="_blank" sx={{ color: 'common.white', margin: 0.5 }}>
                   
                </IconButton>
            </Box>

            <Box sx={{ marginTop: 4 }}>
                <Typography variant="body2">123 Your Street, Your City, Your Country</Typography>
                <Typography variant="body2">Email: contact@yourdomain.com</Typography>
                <Typography variant="body2">Phone: (123) 456-7890</Typography>
            </Box>

            <Box mt={4}>
                <Typography variant="body2">&copy; {new Date().getFullYear()} Your Company. All rights reserved.</Typography>
            </Box>
        </Box>
    );
};

export default Footer;

