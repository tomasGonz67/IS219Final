'use client';

import React from 'react';
import { Box, Typography, Link, Grid, IconButton } from '@mui/material';
import { makeStyles } from '@mui/styles';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

const GOLDEN_RATIO = 1.618;

const useStyles = makeStyles((theme) => ({
    footer: {
        padding: theme.spacing(4),
        backgroundColor: theme.palette.grey[800],
        color: theme.palette.common.white,
        textAlign: 'center',
    },
    linkSection: {
        marginBottom: theme.spacing(4),
    },
    link: {
        color: theme.palette.common.white,
        margin: theme.spacing(1),
        textDecoration: 'none',
        fontSize: '0.875rem',
        [theme.breakpoints.up('md')]: {
            fontSize: '1rem',
        },
    },
    socialIcons: {
        marginTop: theme.spacing(2),
    },
    socialIcon: {
        margin: theme.spacing(0.5),
    },
    contactInfo: {
        marginTop: theme.spacing(4),
        fontSize: '0.875rem',
        [theme.breakpoints.up('md')]: {
            fontSize: '1rem',
        },
    },
}));

export default function Footer() {
    const classes = useStyles();

    return (
        <Box className={classes.footer}>
            {/* Links Section */}
            <Box className={classes.linkSection}>
                <Typography variant="h6">Quick Links</Typography>
                <Box>
                    <Link href="/" className={classes.link}>
                        Home
                    </Link>
                    <Link href="/about" className={classes.link}>
                        About
                    </Link>
                    <Link href="/services" className={classes.link}>
                        Services
                    </Link>
                    <Link href="/contact" className={classes.link}>
                        Contact
                    </Link>
                </Box>
            </Box>

            {/* Social Media Icons */}
            <Box className={classes.socialIcons}>
                <IconButton href="https://facebook.com" target="_blank" className={classes.socialIcon}>
                    <FacebookIcon />
                </IconButton>
                <IconButton href="https://twitter.com" target="_blank" className={classes.socialIcon}>
                    <TwitterIcon />
                </IconButton>
                <IconButton href="https://instagram.com" target="_blank" className={classes.socialIcon}>
                    <InstagramIcon />
                </IconButton>
            </Box>

            {/* Contact Information */}
            <Box className={classes.contactInfo}>
                <Typography variant="body2">123 Your Street, Your City, Your Country</Typography>
                <Typography variant="body2">Email: contact@yourdomain.com</Typography>
                <Typography variant="body2">Phone: (123) 456-7890</Typography>
            </Box>

            {/* Copyright */}
            <Box mt={4}>
                <Typography variant="body2">&copy; {new Date().getFullYear()} Your Company. All rights reserved.</Typography>
            </Box>
        </Box>
    );
}
