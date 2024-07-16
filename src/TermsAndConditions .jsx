import React from "react";
import styles from "./TermsAndConditions.module.css";

const TermsAndConditions = () => {
  return (
    <div className={styles.termsContainer}>
      <h1 className={styles.title}>GRIP Terms and Conditions</h1>
      <p className={styles.paragraph}>Effective Date: 15th July 2024</p>

      <section className={styles.section}>
        <p className={styles.paragraph}>
          Welcome to GRIP! These Terms and Conditions ("Terms") govern your use
          of our app, GRIP, designed to help you discover Bible-based content
          from Christian creators through short-form videos and engaging
          interactive formats. By using GRIP, you agree to comply with these
          Terms. If you do not agree, please do not use our app.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>1. Acceptance of Terms</h2>
        <p className={styles.paragraph}>
          By accessing or using GRIP, you agree to be bound by these Terms and
          our Privacy and Service Policy. If you do not agree to these Terms, do
          not use the app.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>2. Eligibility</h2>
        <p className={styles.paragraph}>
          You must be at least 13 years old to use GRIP. By using the app, you
          represent and warrant that you meet this age requirement.
        </p>
      </section>

      {/* Continue with the rest of the sections... */}

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>11. Contact Us</h2>
        <p className={styles.paragraph}>
          If you have any questions about these Terms, please contact us at
          info@gripvines.com.
        </p>
      </section>

      <p className={styles.paragraph}>
        Thank you for using GRIP. We are committed to providing a safe and
        enriching environment for discovering Bible-based content.
      </p>
    </div>
  );
};

export default TermsAndConditions;
