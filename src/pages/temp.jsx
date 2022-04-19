import React, {useState} from "react";

import "./auth.css";

import Navigation from "../components/Navigation";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';


const Auth = () => {
  return (
    <div className="auth__preview">
      <Navigation />
      <div className="auth__preview-container">
        <div className="auth__preview-Wrapper">
          <div className="auth__preview-left">
            <img src="" alt="" />
            <p>
              iSocial, we are the more socially aware platform help to solve people’s
              social issues.
            </p>
          </div>
          <div className="auth__preview-right">
            <div className="auth__preview-details">
            <TextField id="user-name" label="User Name" variant="outlined" />
            <TextField id="password" label="Password" variant="outlined" />
              <Button variant="contained">LOG IN</Button>
              <a href="#">Forgotton Password</a>
              <hr />
              <Button variant="contained">CREATE AN ACCOUNT</Button>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
