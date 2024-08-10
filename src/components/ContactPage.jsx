import React from "react";
import styles from "./ContactPage.module.scss";

const ContactPage = () => {
  return (
    <div className={styles.container}>
      <section className={styles.contactSection}>
        <h2>Let's talk</h2>

        <div className={styles.contactDetails}>
          <p>Email: praiseibec@gmail.com</p>
          <p>Phone: +254 70817 75432</p>
        </div>

        <div className={styles.socialLinks}>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>

        <form className={styles.contactForm}>
          <div className={styles.inputGroup}>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
          </div>
          <textarea placeholder="Message"></textarea>
          <button type="submit">SUBMIT</button>
        </form>
      </section>

      <footer className={styles.footer}>
        <nav className={styles.nav}>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#work">Work</a>
          <a href="#contact">Contact</a>
        </nav>
      </footer>
    </div>
  );
};

export default ContactPage;
