import React from 'react';
import { Box, Typography, Card, CardContent, Grid } from '@mui/material';

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

const TestimonialSection = () => {
    return (
        <Box
            sx={{
                padding: 4,
                backgroundColor: 'grey.200',
                textAlign: 'center',
            }}
        >
            <Typography
                variant="h2"
                sx={{
                    fontSize: { xs: '2rem', md: '2.5rem' },
                    marginBottom: 4,
                }}
            >
                What Our Clients Say
            </Typography>
            <Grid container spacing={2} justifyContent="center">
                {testimonials.map((testimonial, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Card
                            sx={{
                                maxWidth: 345,
                                margin: 'auto',
                                padding: 2,
                                boxShadow: 3,
                            }}
                        >
                            <CardContent>
                                <Typography
                                    variant="body1"
                                    sx={{
                                        fontSize: { xs: '1rem', md: '1.125rem' },
                                        marginBottom: 2,
                                    }}
                                >
                                    "{testimonial.quote}"
                                </Typography>
                                <Typography
                                    variant="body2"
                                    sx={{
                                        fontSize: { xs: '0.875rem', md: '1rem' },
                                        fontWeight: 'bold',
                                    }}
                                >
                                    - {testimonial.author}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default TestimonialSection;
