import React from 'react';

const Footer = () => {
    const getYear = () => {
        return new Date().getFullYear();
    }

    return (
        <footer>
            <p>Copyright &#169;  {getYear()} Tauhid-Taiyaar</p>
        </footer>
    );
};

export default Footer;