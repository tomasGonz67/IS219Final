'use client';

import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box, TextField, IconButton } from '@mui/material';

const GOLDEN_RATIO = 1.618;

export default function Header() {
    const logoSize = 36; // Example size in pixels
    const spacing = logoSize * GOLDEN_RATIO;

    return (
        <AppBar position="static">
            <Toolbar
                sx={{
                    backgroundColor: '#4A522A',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    p: 2,
                }}
            >
                {/* Logo Section */}
                <Box
                    sx={{
                        padding: 4,
                        backgroundImage: 'url("https://as1.ftcdn.net/v2/jpg/02/99/32/42/1000_F_299324218_ZC0sY6f697km7hz6cYsn5D6kMo5a0lkQ.jpg")',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        textAlign: 'center',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                />
                {/* Navigation Links */}
                <Box sx={{display: 'flex', gap: spacing }}>
                    <Button color="inherit">Home</Button>
                    <Button color="inherit">About</Button>
                    <Button color="inherit">Services</Button>
                    <Button color="inherit">Contact</Button>
                </Box>
            </Toolbar>
        </AppBar>
    );
}
