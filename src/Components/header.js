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
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    p: 2,
                }}
            >
                {/* Logo Section */}
                <Box sx={{ display: 'flex', alignItems: 'center', gap: spacing }}>
                    <Typography variant="h6" component="div" sx={{ fontSize: `${logoSize}px` }}>
                        MyLogo
                    </Typography>
                </Box>

                {/* Navigation Links */}
                <Box sx={{display: 'flex', gap: spacing }}>
                    <Button color="inherit">Home</Button>
                    <Button color="inherit">About</Button>
                    <Button color="inherit">Services</Button>
                    <Button color="inherit">Contact</Button>
                </Box>

                {/* Search Bar */}
                <Box sx={{ display: 'flex', alignItems: 'center', gap: spacing }}>
                    <TextField
                        variant="outlined"
                        size="small"
                        placeholder="Search..."
                        sx={{ backgroundColor: 'white', width: `${spacing}px` }}
                    />
                </Box>
            </Toolbar>
        </AppBar>
    );
}
