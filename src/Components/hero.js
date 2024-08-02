
import React from 'react';
import { Box, Typography, Button } from '@mui/material';

const HeroSection = () => {
    return (
        <Box
            sx={{
                padding: 4,
                backgroundColor: 'primary.main',
                color: 'common.white',
                textAlign: 'center',
            }}
        >
            <Typography
                variant="h1"
                sx={{
                    fontSize: { xs: '2.5rem', md: '3rem' },
                    marginBottom: 2,
                }}
            >
                Welcome to Our Website
            </Typography>
            <Typography
                variant="h2"
                sx={{
                    fontSize: { xs: '1.25rem', md: '1.5rem' },
                    marginBottom: 4,
                }}
            >
                We offer the best services for you
            </Typography>
            <Button variant="contained" color="secondary">
                Learn More
            </Button>
        </Box>
    );
};

export default HeroSection;
