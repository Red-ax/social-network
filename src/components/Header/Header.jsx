import React from 'react';
import styles from './Header.module.css'

const Header = () => {
  return (
    <header className={styles.header}>
      <img className={styles.logo} src="https://cutewallpaper.org/24/adobe-photoshop-logo-png/best-windows-10-photo-editing-apps-2021-windows-central.png" alt=""/>
    </header>
  );
};

export default Header;