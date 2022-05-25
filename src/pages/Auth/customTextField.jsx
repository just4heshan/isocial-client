import React from 'react'

// import TextField from '@mui/material/TextField';
// import Grid from '@mui/material/Grid';
// import InputAdornment from '@mui/material/InputAdornment';
// import IconButton from '@mui/material/IconButton';
import { TextField, Grid, InputAdornment, IconButton } from '@mui/material'
import { Visibility, VisibilityOff } from '@mui/icons-material'

const customTextField = ({name, changeHandler, label, autoFocus, type, showPasswordHandler, half}) => {
  <Grid item xs={12} sm={half ? 6:12}>
      <TextField 
        name={name}
        onChange={changeHandler}
        variant="outlined"
        required
        fullWidth
        label={label}
        autoFocus={autoFocus}
        type={type}
        InputProps={name === "password" && {
            endAdornment:(
              <InputAdornment position="end">
                <IconButton onClick={showPasswordHandler}>
                    {type === "password" ? <Visibility/> : <VisibilityOff/>}
                </IconButton>
              </InputAdornment>
            ),
            
        }}
      />
  </Grid>
}

export default customTextField;