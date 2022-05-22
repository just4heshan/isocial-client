import React, { useState } from "react";

import "./auth.css";
import Image from "../assets/bg-intro-desktop.svg";
import Navigation from "../components/navigateBar/Navigation";

import TextField from "@mui/material/TextField";
import { Grid, Button, IconButton, Divider } from "@mui/material";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Auth = () => {
  const [isSignUp, setIsSignUp] = useState(true);
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  // const [fullName, setFullName] = useState('');
  // const [email, setEmail] = useState('');
  // const [phoneNumber, setPhoneNumber] = useState('');
  // const [homeTown, setHomeTown] = useState(''); 
  // const [dob, setDob] = useState(''); 
  const [userNameError, setUserNameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const handleChange = (e) => {
    e.preventDefault()

    setUserNameError(false)
    setPasswordError(false)

    if (userName === '') {
      setUserNameError(true)
    }

    if (password === '') {
      setPasswordError(true)
    }

    if (userName && password) {
      console.log(userName, password);
    }
  };

  const handleCreateAccount = (e) => {
    e.preventDefault()

    setIsSignUp(!isSignUp)
  }

  return (
    <div className="auth__preview">
      <Navigation />
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
                <p>{isSignUp ? "Sign Up" : "Sign In"}</p>
                <form noValidate autoComplete="off" onSubmit={handleChange}>
                  {!isSignUp && (
                    <div className="auth__preview-container_fields-content_input">
                      <TextField
                        className=""
                        label="Full Name"
                        color="primary"
                        // onChange={handleChange}
                        fullWidth
                        required
                        
                      />
                    </div>
                  )}
                  {!isSignUp && (
                    <div className="auth__preview-container_fields-content_input">
                      <TextField
                        className=""
                        label="User Name"
                        color="primary"
                        // onChange={handleChange}
                        fullWidth
                        required
                        
                      />
                    </div>
                  )}
                  {!isSignUp && (
                    <div className="auth__preview-container_fields-content_input">
                      <TextField
                        className=""
                        label="Create Password"
                        color="primary"
                        // onChange={handleChange}
                        fullWidth
                        required
                      />
                    </div>
                  )}
                  {!isSignUp && (
                    <div className="auth__preview-container_fields-content_input">
                      <TextField
                        className=""
                        label="Email"
                        color="primary"
                        // onChange={handleChange}
                        fullWidth
                        required
                      />
                    </div>
                  )}
                  {!isSignUp && (
                    <div className="auth__preview-container_fields-content_input">
                      <TextField
                        className=""
                        label="Phone Number"
                        color="primary"
                        // onChange={handleChange}
                        fullWidth
                      />
                    </div>
                  )}
                  {!isSignUp && (
                    <div className="auth__preview-container_fields-content_input">
                      <TextField
                        className=""
                        label="Home Town"
                        color="primary"
                        // onChange={handleChange}
                        fullWidth
                      />
                    </div>
                  )}
                  {!isSignUp && (
                    <div className="auth__preview-container_fields-content_input">
                      <TextField
                        className=""
                        label="Date of Birth"
                        color="primary"
                        // onChange={handleChange}
                        fullWidth
                      />
                    </div>
                  )}
                  {!isSignUp && (
                    <div className="login-help">
                     <a href="#" onClick={handleCreateAccount}>Already have an account</a>
                    </div>
                  )}
                  {isSignUp && (
                    <div className="auth__preview-container_fields-content_input">
                      <TextField
                        className=""
                        label="User Name or Email"
                        color="primary"
                        onChange={(e) => setUserName(e.target.value)}
                        fullWidth
                        required
                        error={userNameError}
                        onError={"hello"}
                      />
                    </div>
                  )}
                  {isSignUp && (
                    <div className="auth__preview-container_fields-content_input">
                      <TextField
                        className=""
                        label="Password"
                        color="primary"
                        onChange={(e) => setPassword(e.target.value)}
                        fullWidth
                        required
                        error={passwordError}
                      />
                    </div>
                  )}
                  {isSignUp && (
                    <div className="login-help">
                     <a href="#">Forgotton Password?</a>
                     <a href="#" onClick={handleCreateAccount}>Create an account</a>
                    </div>
                  )}
                  <Divider />

                  <Button 
                    color="primary"
                    variant="contained"
                    type="submit"
                    endIcon={<ArrowForwardIosIcon />}
                    >{isSignUp ? "Sign Up" : "Sign In"}</Button>
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
