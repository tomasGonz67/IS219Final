"use client";
import Image from "next/image";
import styles from "./page.module.css";
import MailChimp from '../Components/mailchimp.js';
import { Button } from '@mui/material';
import { useState } from 'react';
import Header from "../Components/header"
import HeroSection from "../Components/hero"
import TestimonialSection from "../Components/testis"
import Footer from "../Components/footer"


export default function Home() {
    const [isOpen, setIsOpen] = useState(false);

    const togChimp = () =>{
        setIsOpen(isOpen => !isOpen);
    }
  return (
      <main>
          <div>
              <Header />
              <HeroSection />
              <TestimonialSection />
              <Footer/>
              <Button
                  onClick={togChimp}
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
              {isOpen &&
                  <MailChimp />}
          </div>
    </main>
  );
}
