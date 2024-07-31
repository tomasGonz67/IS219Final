import Image from "next/image";
import styles from "./page.module.css";
import MailChimp from '../Components/mailchimp.js';
import { Button } from '@mui/material';

export default function Home() {
  return (
      <main className={styles.main}>
          <div>
              <Button
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
              <MailChimp/>
          </div>
    </main>
  );
}
