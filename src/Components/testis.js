'use client';

import React from 'react';
import { Box, Typography, Card, CardContent, CardMedia, Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';

const GOLDEN_RATIO = 1.618;

const useStyles = makeStyles((theme) => ({
    testimonialSection: {
        padding: theme.spacing(4),
        backgroundColor: theme.palette.grey[200],
        textAlign: 'center',
    },
    headline: {
        fontSize: '2rem',
        marginBottom: theme.spacing(4),
        [theme.breakpoints.up('md')]: {
            fontSize: '2.5rem',
        },
    },
    testimonialCard: {
        maxWidth: 345,
        margin: 'auto',
        padding: theme.spacing(2),
        boxShadow: theme.shadows[3],
    },
    testimonialText: {
        fontSize: '1rem',
        marginBottom: theme.spacing(2),
        [theme.breakpoints.up('md')]: {
            fontSize: '1.125rem',
        },
    },
    author: {
        fontSize: '0.875rem',
        fontWeight: 'bold',
        [theme.breakpoints.up('md')]: {
            fontSize: '1rem',
        },
    },
}));

const testimonials = [
    {
        quote: "This service is amazing! It changed my life for the better.",
        author: "Jane Doe",
    },
    {
        quote: "Highly recommend this to anyone looking for quality and reliability.",
        author: "John Smith",
    },
    {
        quote: "The best experience I've had with a company in years.",
        author: "Alice Johnson",
    },
];

export default function TestimonialSection() {
    const classes = useStyles();

    return (
        <Box className={classes.testimonialSection}>
            <Typography variant="h2" className={classes.headline}>
                What Our Clients Say
            </Typography>
            <Grid container spacing={2} justifyContent="center">
                {testimonials.map((testimonial, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Card className={classes.testimonialCard}>
                            <CardContent>
                                <Typography variant="body1" className={classes.testimonialText}>
                                    "{testimonial.quote}"
                                </Typography>
                                <Typography variant="body2" className={classes.author}>
                                    - {testimonial.author}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}