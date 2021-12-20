import styles from './signup.module.css';
import { useContext, useState } from 'react';

import { Context as AuthContext } from './../../context/authContext';

const SignUp = () => {
  const value = useContext(AuthContext);
  const [name, setfName] = useState();
  const [email, setemail] = useState();
  const [password, setpassword] = useState();
  const [passwordConfirm, setpasswordConfirm] = useState();

  const onClick = async () => {
    console.log('inside onClick');
    const data = {
      name: name,
      email: email,
      password: password,
      passwordConfirm: passwordConfirm,
    };

    value.signUp(data);
  };

  return (
    <div className={styles.signup}>
      <div className={styles.section}>
        <div className={styles.inputFields}>
          <p className={styles.subTitle}>start for free</p>
          <p className={styles.title}>Create new Account</p>
          <input
            type="text"
            placeholder="First Name"
            onChange={(e) => setfName(e.target.value)}
            clasname={styles.input}
          />
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
          <input
            type="password"
            placeholder="Confirm Password"
            onChange={(e) => setpasswordConfirm(e.target.value)}
            clasname={styles.input}
          />
          <button
            to="/signup"
            onClick={onClick}
            className={styles.signupButton}
          >
            Register
          </button>
        </div>
        <div className={styles.images}>
          <img
            src="/static/img/tour-9-1.jpg"
            alt="image1"
            className={styles.image1}
          />
          <img
            src="/static/img/tour-9-2.jpg"
            alt="image2"
            className={styles.image2}
          />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
