import React from "react";
import styles from "./Contact.module.scss"; // Assuming you're using SCSS for styling
import face from "../images/SVG.svg";
import In from "../images/SVG1.svg";
import Ig from "../images/SVG2.svg";
import X from "../images/SVG3.svg";

const Contact = () => {
  return (
    <div
      className="relative h-[100vh]"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="fixed bottom-0 h-[100vh] w-full">
        <div className={styles.contactSection}>
          <div className={styles.contactBox}>
            <div className={styles.letTalk}></div>
            <p className={styles.email}>praiseibec@gmail.com</p>
            <div className={styles.socialLinks}>
              <div>
                <img src={Ig} alt="" />
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
              </div>
              <div>
                <img src={face} alt="" />
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Facebook
                </a>
              </div>
              <div>
                <img src={X} alt="" />
                <a
                  href="https://x.com/_Halel"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Twitter
                </a>
              </div>
              <div>
                <img src={In} alt="" />
                <a
                  href="https://www.linkedin.com/in/praise-ibe-3556a625b/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
          <nav className={styles.nav}>
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#work">Work</a>
            <a href="#contact">Contact</a>
          </nav>
          <div className={styles.scrollContainer}>
            <div className={styles.scrollText}>
              <span>Praise Ibe Chidumebi</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
