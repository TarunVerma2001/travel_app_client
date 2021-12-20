import styles from './header.module.css';
import { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';
import { Context as AuthContext } from './../../context/authContext';

const Header = () => {
  const value = useContext(AuthContext);

  useEffect(() => {
    value.getMe();
  }, []);

  return (
    <div className={styles.header}>
      <div className={styles.title}>
        <p>
          Trip<span>Goal</span>
        </p>
      </div>
      <div className={styles.options}>
        <Link to="/">
          <p>Home</p>
        </Link>
        <Link to="/aboutUs">
          <p>About</p>
        </Link>
        <Link to="/packages">
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
        {value.isLoggedIn && (
          <button
            to="/login"
            className={styles.logout}
            onClick={() => value.logout()}
          >
            Logout
          </button>
        )}
        {!value.isLoggedIn && (
          <Link to="/login" className={styles.login}>
            Sign In
          </Link>
        )}
        {!value.isLoggedIn && (
          <Link to="/signup" className={styles.signup}>
            Register
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
