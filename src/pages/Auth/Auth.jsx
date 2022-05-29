import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebaseConfig";

import "./auth.css";
import Image from "../../assets/bg-intro-desktop.svg";

import { TextField, Button, InputAdornment, Divider } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const Auth = ({ authCheckHandler }) => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [isLogIn, setIsLogIn] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    phoneNumber: "",
    homeTown: "",
  });

  // useEffect(() => {
  //   return () => {
  //     authCheckHandler();
  //     console.log("Logged");
  //   };
  // }, [isLogIn]);

  const campaignsCollectionRef = collection(db, "users");

  const createNewCampaign = async (e) => {
    await addDoc(campaignsCollectionRef, {
    firstName: formData.firstName || 'none',
    lastName: formData.lastName || 'none',
    email: formData.email || 'none',
    password: formData.password || 'none',
    phoneNumber: formData.phoneNumber || 'none',
    homeTown: formData.homeTown || 'none',
    });
    // setIsLogIn((prevIsLogin) => !prevIsLogin);
  };

  const switchHandler = (e) => {
    setIsSignUp((prevIsSignUp) => !prevIsSignUp);
  };

  const textFieldStyle = {
    paddingBottom: 10,
  };

  const buttonStyle = {
    marginTop: 20,
  };

  const fontStyle = {
    fontWeight: 700,
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
                <form>
                  {isSignUp && (
                    <>
                      <TextField
                        name="firstName"
                        label="First Name"
                        color="primary"
                        type="text"
                        fullWidth
                        required
                        style={textFieldStyle}
                        onChange={(e) =>
                          setFormData({ ...formData, firstName: e.target.value })
                        }
                      />
                      <TextField
                        name="lastName"
                        label="Last Name"
                        color="primary"
                        type="text"
                        fullWidth
                        style={textFieldStyle}
                        onChange={(e) =>
                          setFormData({ ...formData, lastName: e.target.value })
                        }
                      />
                    </>
                  )}
                  <TextField
                    name="email"
                    label="Email"
                    color="primary"
                    type="email"
                    fullWidth
                    required
                    style={textFieldStyle}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                  <TextField
                    name="password"
                    label="Password"
                    color="primary"
                    type="password"
                    fullWidth
                    minLength="6"
                    required
                    style={textFieldStyle}
                    onChange={(e) =>
                      setFormData({ ...formData, password: e.target.value })
                    }
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
                        fullWidth
                        required
                        style={textFieldStyle}
                        onChange={(e) =>
                          setFormData({ ...formData, confirmPassword: e.target.value })
                        }
                      />
                      <TextField
                        name="phoneNumber"
                        label="Phone Number"
                        color="primary"
                        type="number"
                        fullWidth
                        style={textFieldStyle}
                        onChange={(e) =>
                          setFormData({ ...formData, phoneNumber: e.target.value })
                        }
                      />
                      <TextField
                        name="homeTown"
                        label="Home Town"
                        color="primary"
                        type="text"
                        fullWidth
                        style={textFieldStyle}
                        onChange={(e) =>
                          setFormData({ ...formData, homeTown: e.target.value })
                        }
                      />
                    </>
                  )}
                  {isSignUp ? (
                    <div className="login-help">
                      <a onClick={switchHandler}>
                        Already have an account?{" "}
                        <span style={fontStyle}>Sign In</span>
                      </a>
                    </div>
                  ) : (
                    <div className="login-help">
                      <a href="#">Forgotton Password?</a>
                      <a onClick={switchHandler}>
                        Don't have an account?{" "}
                        <span style={fontStyle}>Sign Up</span>
                      </a>
                    </div>
                  )}
                  <Divider />
                  <Link to={'/campaign'}>
                  <Button
                    color="primary"
                    variant="contained"
                    style={buttonStyle}
                    endIcon={<ArrowForwardIosIcon />}
                    onClick={createNewCampaign}
                  >
                    {isSignUp ? "Sign Up" : "Sign In"}
                  </Button></Link>
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
