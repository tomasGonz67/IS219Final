import Image from "next/image";
import styles from "./page.module.css";


import Header from "../Components/header"
import HeroSection from "../Components/hero"
import TestimonialSection from "../Components/testis"
import Footer from "../Components/footer"
import { AppBar, Toolbar, Typography, Box, TextField, IconButton } from '@mui/material';

export default function Home() {

  return (
      <main>
          <div >
              <Box
                  sx={{
                      backgroundColor:"#363B1F",
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'center',
                  }}>
                  <Header />
                  <HeroSection />
                  <TestimonialSection />
                  <Footer />
              </Box>


          </div>
    </main>
  );
}
