import styles from './header.module.css';
// import { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.title}>
        <p>
          Trip<span>Goal</span>
        </p>
      </div>
      <div className={styles.options}>
        <Link to='/'>
          <p>Home</p>
        </Link>
        <Link to='/aboutUs'>
          <p>About</p>
        </Link>
        <Link to='/packages'>
          <p>Packages</p>
        </Link>
        <Link>
          <p>Contact Us</p>
        </Link>
        <Link>
          <p>FAQ</p>
        </Link>
      </div>
      <div className={styles.auth}>
        <Link>Register</Link>
      </div>
    </div>
  );
};

export default Header;
