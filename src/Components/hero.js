"use client";

import { Button } from '@mui/material';
import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import MailChimp from '../Components/mailchimp.js';

const HeroSection = () => {
    const handleClick = () => {
        window.location.href = 'https://njit.us14.list-manage.com/subscribe/post?u=26482de074b2bcbd341e1c09f&id=61cda848da&f_id=00fbd5e0f0';
    };

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
                height: '50vh',
                width: '50vw',
                alignItems: 'center',
                color: '#A3A791', // Text color
                fontFamily: 'Ribeye, sans-serif', // Apply Ribeye font
            }}
        >
            <Typography
                variant="h1"
                sx={{
                    fontSize: { xs: '2.5rem', md: '3rem' }, // responsive sizes
                    fontSize: '42px', // Use golden ratio size
                    marginBottom: 2,
                    color: '#A3A791', // Text color
                    fontFamily: 'Ribeye, sans-serif', // Apply Ribeye font
                    textShadow: '1px 1px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000', // Black outline effect
                }}
            >
                Welcome to Our Website
            </Typography>
            <Typography
                variant="h2"
                sx={{
                    fontSize: { xs: '1.25rem', md: '1.5rem' }, // responsive sizes
                    fontSize: '26px', // Use golden ratio size
                    marginBottom: 4,
                    color: '#A3A791', // Text color
                    fontFamily: 'Ribeye, sans-serif', // Apply Ribeye font
                    textShadow: '1px 1px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000', // Black outline effect
                }}
            >
                We offer the best services for you
            </Typography>
            <Button
                onClick={handleClick}
                style={{
                    backgroundColor: '#A3A791',  // Custom hex color
                    color: '#2C0000',           // Custom text color
                    fontFamily: 'Ribeye Marrow, sans-serif', // Custom font
                    borderRadius: '100px',      // Large border radius
                    fontSize: '24px',
                    padding: '10px 20px',
                }}
            >
                JOIN TODAY
            </Button>
        </Box>
    );
};

export default HeroSection;
