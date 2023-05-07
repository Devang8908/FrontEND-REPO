import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import "./Payment2.css"
export default function Delivery() {
  return (
    <Box className='center'
      component="form"
      sx={{ width :'39%',
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          
          id="outlined-required"
          label="First Name"
          defaultValue=""
        />
        <TextField
          
          id="outlined-disabled"
          label="Last Name"
          defaultValue=""
        />
        <TextField fullWidth label="Address line-1" id="fullWidth" style={{width:"91%"}} />
        <TextField fullWidth label="Address line-2" id="fullWidth" style={{width:"91%"}} />
        <TextField
          
          id="outlined-required"
          label="Country"
          defaultValue=""
        />
        <TextField
          
          id="outlined-disabled"
          label="State"
          defaultValue=""
        />
         <TextField
          
          id="outlined-required"
          label="City"
          defaultValue=""
        />
        <TextField
          
          id="outlined-disabled"
          label="Postal Code"
          defaultValue=""
        />
      </div>
    </Box>
  );
}
