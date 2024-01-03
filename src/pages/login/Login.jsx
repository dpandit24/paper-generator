import React, { useState } from "react";
import secureLocalStorage from "react-secure-storage";
import {useHistory, useNavigate} from 'react-router-dom'

import logoImg from "../../assets/images/logo.png";
import facebookImg from "../../assets/images/facebook.svg";
import googleImg from "../../assets/images/google.svg";
import linkedinImg from "../../assets/images/linkedin.svg";
import loader from '../../assets/images/loader.gif'
import styles from "./login.module.scss";
import { useForm } from "react-hook-form";
import axios from "axios";
import Swal from "sweetalert2";

const logo = (
  <div className={styles.logo}>
    <img src={logoImg} alt="logo" width="50" /> <span>Budwriter</span>
  </div>
);

const socialLogo = (
  <div className={styles.socialLogo}>
    <img src={facebookImg} alt="logo" width="38" />
    <img src={googleImg} alt="logo" width="27" />
    &nbsp;
    <img src={linkedinImg} alt="logo" width="26" />
  </div>
);

const Login = ({onLogin}) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setError(null);
    setLoading(true);
    console.log("dataaa");
    try {
      const response = await axios.post(
        "https://qadevelopers.nextpapermate.com/api/v1/A/Login",
        data
      );
      setLoading(false);
      console.log(response.data.doc);
      const username = response.data.doc.firstname;
      localStorage.setItem("userdata", JSON.stringify(response));
      secureLocalStorage.setItem("string", response.data.access_token);
      // secureLocalStorage.setItem("string",response.data.refresh_token)
      // let value = secureLocalStorage.getItem("string");
      // console.log(value);
      Swal.fire({
        icon: "success",
        title: "Login Successful",
        text: "Welcome back," + username + "!",
        showConfirmButton: true,
      }).then((result) => {
        if (result.isConfirmed) {
          onLogin(username)
          navigate('/dashboard')
        }
      });

      // setTimeout(() => {
      //   // history.push('../dashboard/Dashboard.jsx')
      //   navigate('/dashboard')
      // },1500)
    } catch (error) {
      setLoading(false);
      console.error("Something went wrong, Please try again leter", error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
      });
    }
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.leftContainer}>
        <div className={styles.loginForm}>
          {logo}
          {socialLogo}
          <span className={styles.infoText}>or use email for your login</span>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              type="email"
              placeholder="Email"
              required
              {...register("email")}
            />
            <input
              type="password"
              placeholder="Password"
              required
              {...register("password")}
            />
            <button disabled={loading} type="submit">
              {loading ? <img src={loader} alt="loader" width="25" /> : <span>Sign in</span>}
            </button>
          </form>
        </div>
      </div>
      <div className={styles.rightContainer}>
        <div className={styles.welcomeContainer}>
          <span className={styles.titleText}>Hello Stranger!</span>
          <span className={styles.secondoryText}>
            Enter your personal details and start your own portfolio!
          </span>
          <button>Sign Up</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
