 import React from 'react';
//import Payment from './Payment';
import Payment2 from './Payment2';
import { Container } from '@mui/material';
import Box from '@mui/material/Box';
 
 function Payment3(props) {
    return (
        <div>
            <Container maxWidth="100%">
                <Box sx={{bgcolor:"lightgreen"}} style={{padding:"30px 30px 30px 30px"}}>
            <Payment2/>
            </Box>
            </Container> 
        </div>
    );
 }
 
 export default Payment3;