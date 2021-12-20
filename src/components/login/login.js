import styles from './login.module.css';
import { useContext, useState } from 'react';
import Cookies from 'js-cookie';
import toast from 'react-hot-toast';
import { login } from '../../util/api';
import {Context as AuthContext} from './../../context/authContext';

const Login = () => {

  const value = useContext(AuthContext);
  const [email, setemail] = useState();
  const [password, setpassword] = useState();


  const onClick = () => {
    const data = {
      email: email,
      password: password,
    };
    value.logIn(data);
  };

  return (
    <div className={styles.login}>
      <div className={styles.section}>
        <div className={styles.inputFields}>
          <p className={styles.subTitle}>we missed you</p>
          <p className={styles.title}>Login to your Account</p>

          <input
            type="email"
            placeholder="Email"
            onChange={(e) => setemail(e.target.value)}
            clasname={styles.input}
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setpassword(e.target.value)}
            clasname={styles.input}
          />

          <button className={styles.loginButton} onClick={onClick}>
            Log In
          </button>
        </div>
        <div className={styles.images}>
          <img
            src="/static/img/tour-6-1.jpg"
            alt="image1"
            className={styles.image1}
          />
          <img
            src="/static/img/tour-6-2.jpg"
            alt="image2"
            className={styles.image2}
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
