import Image from "next/image";
import styles from "./page.module.css";
import MailChimp from '../Components/mailchimp.js';

export default function Home() {
  return (
      <main className={styles.main}>
          <div>
              <p>hello</p>
              <MailChimp/>
          </div>
    </main>
  );
}
