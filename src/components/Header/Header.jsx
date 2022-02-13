import React from 'react';
import module from './Header.module.css'

const Header = () => {
  return (
    <header className={module.header}>
      <img className={module.logo} src="https://cutewallpaper.org/24/adobe-photoshop-logo-png/best-windows-10-photo-editing-apps-2021-windows-central.png" alt=""/>
    </header>
  );
};

export default Header;