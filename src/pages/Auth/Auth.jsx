import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import "./auth.css";
import Image from "../../assets/bg-intro-desktop.svg";
import Navigation from "../../components/navigateBar/Navigation";
import customTextField from "./customTextField";

import { TextField, Button, InputAdornment, Divider } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
  phoneNumber: "",
  homeTown: "",
};

const Auth = ({ setAuthToken }) => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [isLogIn, setIsLogIn] = useState(false);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [homeTown, setHomeTown] = useState("");
  const [formData, setFormData] = useState(initialState);

  const [userNameError, setUserNameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  // const [showPassword, setShowPassword] = useState(true);
  useEffect(() => {
    return () => {
      setAuthToken((prevAuthToken) => !prevAuthToken);
    };
  }, [isLogIn]);

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const switchHandler = (e) => {
    setIsSignUp((prevIsSignUp) => !prevIsSignUp);
  };

  const submitHandler = (e) => {
    e.preventDefault()
    setIsLogIn((prevIsLogIn) => !prevIsLogIn);
    console.log(formData)
  };

  const errorHandler = (e) => {
    e.preventDefault();

    setUserNameError(false);
    setPasswordError(false);

    if (email === "") {
      setUserNameError(true);
    }

    if (password === "") {
      setPasswordError(true);
    }

    if (email && password) {
      console.log(email, password);
    }
  };

  const textFieldStyle = {
    paddingBottom: 10,
  };

  const buttonStyle = {
    marginTop: 20,
  };

  const showPasswordHandler = () => {
    // setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <div className="auth__preview">
      <img className="background-image" src={Image} alt="bg-image" />
      <div className="auth__preview-container">
        <div className="auth__preview-Wrapper">
          <div className="auth__preview-left-container">
            <img src="" alt="" />
            <p>
              iSocial, we are the more socially aware platform help to solve
              people’s social issues.
            </p>
          </div>
          <div className="auth__preview-right-container">
            <div className="auth__preview-container_fields">
              <div className="auth__preview-container_fields-content">
                <p style={{ fontSize: 30, marginBottom: 20 }}>
                  {isSignUp ? "Sign Up" : "Sign In"}
                </p>
                <form onSubmit={submitHandler}>
                  {isSignUp && (
                    <>
                      <TextField
                        name="firstName"
                        label="First Name"
                        color="primary"
                        type="text"
                        onChange={changeHandler}
                        fullWidth
                        required
                        style={textFieldStyle}
                      />
                      <TextField
                        name="lastName"
                        label="Last Name"
                        color="primary"
                        type="text"
                        onChange={changeHandler}
                        fullWidth
                        style={textFieldStyle}
                      />
                    </>
                  )}
                  <TextField
                    name="email"
                    label="Email"
                    color="primary"
                    type="email"
                    onChange={changeHandler}
                    fullWidth
                    required
                    style={textFieldStyle}
                  />
                  <TextField
                    name="password"
                    label="Password"
                    color="primary"
                    type="password"
                    onChange={changeHandler}
                    fullWidth
                    minLength="6"
                    required
                    style={textFieldStyle}
                    // InputProps={
                    //   <InputAdornment position="end">
                    //     <Visibility onClick={showPasswordHandler} />
                    //   </InputAdornment>
                    // }
                  />
                  {isSignUp && (
                    <>
                      <TextField
                        name="confirmPassword"
                        label="Confirm Password"
                        color="primary"
                        type="password"
                        onChange={changeHandler}
                        fullWidth
                        required
                        style={textFieldStyle}
                      />
                      <TextField
                        name="phoneNumber"
                        label="Phone Number"
                        color="primary"
                        type="number"
                        onChange={changeHandler}
                        fullWidth
                        style={textFieldStyle}
                      />
                      <TextField
                        name="homeTwon"
                        label="Home Town"
                        color="primary"
                        type="text"
                        onChange={changeHandler}
                        fullWidth
                        style={textFieldStyle}
                      />
                    </>
                  )}
                  {isSignUp ? (
                    <div className="login-help">
                      <a onClick={switchHandler}>
                        Already have an account? Sign In
                      </a>
                    </div>
                  ) : (
                    <div className="login-help">
                      <a href="#">Forgotton Password?</a>
                      <a onClick={switchHandler}>
                        Don't have an account? Sign Up
                      </a>
                    </div>
                  )}
                  <Divider />
                  <Link to={"/campaign"}>
                    <Button
                      color="primary"
                      variant="contained"
                      type="submit"
                      style={buttonStyle}
                      endIcon={<ArrowForwardIosIcon />}
                    >
                      {isSignUp ? "Sign Up" : "Sign In"}
                    </Button>
                  </Link>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
