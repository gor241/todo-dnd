import React from 'react';
import styles from './Footer.module.css';

interface FooterProps {
    companyName: string;
}

const Footer: React.FC<FooterProps> = ({ companyName }) => {
    return (
        <footer className={styles.footer}>
            <p className={styles['company-name']}>
                &copy; {new Date().getFullYear()} {companyName}
            </p>
        </footer>
    );
};

export default Footer;
