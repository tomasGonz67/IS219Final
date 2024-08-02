
import React from 'react';
import { Box, Typography, Button } from '@mui/material';

const HeroSection = () => {
    return (
        <Box
            sx={{
                padding: 4,
                backgroundImage: 'url("https://img.freepik.com/premium-photo/fitness-exercise-happy-couple-out-running-jogging-forest-trail-park-outdoors-sporty-smiling-man-woman-staying-active-fit-while-exercising-bonding-workout_590464-77228.jpg")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                height:'100vh',
                alignItems: 'center',
                color: 'white', // Ensure the text is readable
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
