'use client';

import React, { useState, useEffect } from 'react';
import { Box, Button, Typography } from '@mui/material';
import { getLocalStorage, setLocalStorage } from '@/Components/storageHelper';

export default function CookieBanner() {
    const [cookieConsent, setCookieConsent] = useState(null);
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const storedCookieConsent = getLocalStorage("cookie_consent", null);
        if (storedCookieConsent !== null) {
            setCookieConsent(storedCookieConsent);
            setIsVisible(false);
        }
    }, []);

    useEffect(() => {
        if (cookieConsent !== null) {
            const newValue = cookieConsent ? 'granted' : 'denied';

            // Check if window.gtag is defined
            if (typeof window.gtag === 'function') {
                window.gtag("consent", 'update', {
                    'analytics_storage': newValue
                });
            } else {
                console.error("Google Analytics gtag function is not available.");
            }

            setLocalStorage("cookie_consent", cookieConsent);

            // For Testing
            console.log("Cookie Consent: ", cookieConsent);

            // Hide the banner after setting the consent
            setIsVisible(false);
        }
    }, [cookieConsent]);

    if (!isVisible) return null;

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
                bgcolor: 'gray',
                borderRadius: 2,
                boxShadow: 3,
                gap: 2,
            }}
        >
            <Box sx={{ textAlign: 'center' }}>
                <Typography color="skyblue" fontWeight="bold">
                    We use <span style={{ color: 'skyblue', fontWeight: 'bold' }}>cookies</span> on our site.
                </Typography>
            </Box>
            <Box sx={{ display: 'flex', gap: 2 }}>
                <Button
                    onClick={() => setCookieConsent(false)}
                    variant="outlined"
                    color="inherit"
                    sx={{ backgroundColor: 'black', borderColor: 'gray.900', color: 'gray.300' }}
                >
                    Decline
                </Button>
                <Button
                    onClick={() => setCookieConsent(true)}
                    variant="contained"
                    sx={{ bgcolor: 'gray.900' }}
                >
                    Allow Cookies
                </Button>
            </Box>
        </Box>
    );
}
