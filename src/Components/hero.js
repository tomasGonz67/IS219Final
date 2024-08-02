'use client';

import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';

const GOLDEN_RATIO = 1.618;

const useStyles = makeStyles((theme) => ({
    heroContainer: {
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundImage: 'url("/path-to-your-background-image.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        textAlign: 'center',
        color: '#fff',
        padding: theme.spacing(4),
    },
    headline: {
        fontSize: '3rem',
        marginBottom: '0.5rem',
        [theme.breakpoints.up('md')]: {
            fontSize: '4rem',
        },
    },
    subheadline: {
        fontSize: '1.5rem',
        marginBottom: '2rem',
        [theme.breakpoints.up('md')]: {
            fontSize: '2rem',
        },
    },
    ctaButton: {
        fontSize: '1rem',
        padding: theme.spacing(1.5, 4),
        [theme.breakpoints.up('md')]: {
            fontSize: '1.25rem',
        },
    },
}));

export default function HeroSection() {
    const classes = useStyles();

    return (
        <Box className={classes.heroContainer}>
            <Typography variant="h1" className={classes.headline}>
                Your Awesome Headline
            </Typography>
            <Typography variant="h6" className={classes.subheadline}>
                An inspiring subheadline that grabs attention.
            </Typography>
            <Button variant="contained" color="primary" className={classes.ctaButton}>
                Get Started
            </Button>
        </Box>
    );
}
