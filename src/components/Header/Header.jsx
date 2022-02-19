import React from 'react';
import styles from './Header.module.css'

const Header = () => {
  return (
    <header className={styles.header}>
      <img className={styles.logo} src="https://seeklogo.com/images/A/adobe-photoshop-cc-circle-logo-3BE8AF841D-seeklogo.com.png" alt=""/>
    </header>
  );
};

export default Header;