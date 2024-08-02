import React from 'react';
import { Box, Typography, Card, CardContent, Grid } from '@mui/material';

const testimonials = [
    {
        quote: "This gym is amazing. I am in the best shape of my life!",
        author: "Eric Werner",
    },
    {
        quote: "Highly recommend this to anyone looking for quality and reliability.",
        author: "Andrew Cruz",
    },
    {
        quote: "The best experience I've had with fitness in years.",
        author: "Sam Levinson",
    },
];

const TestimonialSection = () => {
    return (
        <Box
            sx={{
                padding: 4,
                backgroundColor: '#4A522A',
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
                            <CardContent
                                sx={{
                                    backgroundColor: "#C5C5C5",
                                }}>
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
