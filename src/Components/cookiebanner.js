'use client';

import React from 'react';
import Link from 'next/link';
import { Box, Button, Typography } from '@mui/material';

export default function CookieBanner() {
    return (
        <Box
            sx={{
                my: 2,
                mx: 'auto',
                maxWidth: { xs: '90%', sm: '600px' },
                position: 'fixed',
                bottom: 0,
                left: 0,
                right: 0,
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'row' },
                alignItems: 'center',
                justifyContent: 'space-between',
                p: 2,
                bgcolor: 'gray.700',
                borderRadius: 2,
                boxShadow: 3,
                gap: 2,
            }}
        >
            <Box sx={{ textAlign: 'center' }}>
                <Link href="/info/cookies" passHref>
                    <Typography component="a" color="skyblue" fontWeight="bold">
                        We use <span style={{ color: 'skyblue', fontWeight: 'bold' }}>cookies</span> on our site.
                    </Typography>
                </Link>
            </Box>
            <Box sx={{ display: 'flex', gap: 2 }}>
                <Button variant="outlined" color="inherit" sx={{ borderColor: 'gray.900', color: 'gray.300' }}>
                    Decline
                </Button>
                <Button variant="contained" sx={{ bgcolor: 'gray.900' }}>
                    Allow Cookies
                </Button>
            </Box>
        </Box>
    );
}
