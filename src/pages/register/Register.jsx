import React from 'react';
import logoImg from '../../assets/images/logo.png'
import facebookImg from '../../assets/images/facebook.svg'
import googleImg from '../../assets/images/google.svg'
import linkedinImg from '../../assets/images/linkedin.svg'
import styles from './register.module.scss'

const logo = (
    <div className={styles.logo}>
        <img src={logoImg} alt='logo' width='50' /> <span>Budwriter</span>
    </div>
)

const socialLogo = (
    <div className={styles.socialLogo}>
        <img src={facebookImg} alt='logo' width='38' />
        <img src={googleImg} alt='logo' width='27' />&nbsp;
        <img src={linkedinImg} alt='logo' width='26' />
    </div>
)

const Register = () => {
    return (
        <div className={styles.loginContainer}>
            <div className={styles.leftContainer}>
                <div className={styles.welcomeContainer}>
                    <span className={styles.titleText}>
                        Welcome Back!
                    </span>
                    <span className={styles.secondoryText}>
                        To keep sharing your work with us, please log in!
                    </span>
                    <button>
                        Sign in
                    </button>
                </div>
            </div>
            <div className={styles.rightContainer}>
                <div className={styles.loginForm}>
                    {/* {logo} */}
                    <span>Create Account</span>
                    {socialLogo}
                    <span className={styles.infoText}>or use email for your login</span>
                    <form>
                        <input type='text' placeholder='Name' required />
                        <input type='email' placeholder='Email' required />
                        <input type='password' placeholder='Password' required />
                        <button type='submit'>
                            Sign Up
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Register;
