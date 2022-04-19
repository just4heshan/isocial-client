import React, { useState } from "react";

import "./auth.css";

import Navigation from "../components/Navigation";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Auth = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [userName, setUserName] = useState();
  const [password, setPassword] = useState();
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

  return (
    <div className="auth__preview">
      <Navigation />
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
                  {isSignUp && (
                    <div className="auth__preview-container_fields-content_input">
                      <TextField
                        className=""
                        label="Full Name"
                        color="secondary"
                        // onChange={handleChange}
                        fullWidth
                        required
                        
                      />
                    </div>
                  )}
                  {isSignUp && (
                    <div className="auth__preview-container_fields-content_input">
                      <TextField
                        className=""
                        label="User Name"
                        color="secondary"
                        // onChange={handleChange}
                        fullWidth
                        required
                        
                      />
                    </div>
                  )}
                  {isSignUp && (
                    <div className="auth__preview-container_fields-content_input">
                      <TextField
                        className=""
                        label="Create Password"
                        color="secondary"
                        // onChange={handleChange}
                        fullWidth
                        required
                      />
                    </div>
                  )}
                  {isSignUp && (
                    <div className="auth__preview-container_fields-content_input">
                      <TextField
                        className=""
                        label="Email"
                        color="secondary"
                        // onChange={handleChange}
                        fullWidth
                        required
                      />
                    </div>
                  )}
                  {isSignUp && (
                    <div className="auth__preview-container_fields-content_input">
                      <TextField
                        className=""
                        label="Phone Number"
                        color="secondary"
                        // onChange={handleChange}
                        fullWidth
                      />
                    </div>
                  )}
                  {isSignUp && (
                    <div className="auth__preview-container_fields-content_input">
                      <TextField
                        className=""
                        label="Home Town"
                        color="secondary"
                        // onChange={handleChange}
                        fullWidth
                      />
                    </div>
                  )}
                  {isSignUp && (
                    <div className="auth__preview-container_fields-content_input">
                      <TextField
                        className=""
                        label="Date of Birth"
                        color="secondary"
                        // onChange={handleChange}
                        fullWidth
                      />
                    </div>
                  )}
                  {!isSignUp && (
                    <div className="auth__preview-container_fields-content_input">
                      <TextField
                        className=""
                        label="User Name or Email"
                        color="secondary"
                        onChange={(e) => setUserName(e.target.value)}
                        fullWidth
                        required
                        error={userNameError}
                      />
                    </div>
                  )}
                  {!isSignUp && (
                    <div className="auth__preview-container_fields-content_input">
                      <TextField
                        className=""
                        label="Password"
                        color="secondary"
                        onChange={(e) => setPassword(e.target.value)}
                        fullWidth
                        required
                        error={passwordError}
                      />
                    </div>
                  )}

                  <Button 
                    color="secondary"
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
