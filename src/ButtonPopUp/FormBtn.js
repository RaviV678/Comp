import React, { Fragment, useState } from 'react';
import TextField from '@mui/material/TextField';
import { Avatar, Button, Grid, Paper } from '@mui/material';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import { Box } from '@mui/system';



export default function FormBtn() {
  const paperStyle={padding:20 , height:'50vh',width:300, margin:'20px auto'}
  const avtarStyle={backgroundColor:'red'}

  const [show ,setShow]=useState(false);

  return (
   <Fragment>
    <Box sx={{ minWidth: 100 }}>
    <Card variant="outlined">
    <CardActions>
    <Button variant="outlined" size='large' sx={{ bgcolor: '#F5C7B8FF', marginLeft: '40%',marginTop:'10px'}}
    onClick={()=>setShow(show%2==0?true:null)}>
      CLICK ME!</Button>
    </CardActions>
    </Card>
  </Box>
   
    {
      show?
      <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid align='center'>
          <Avatar style={avtarStyle}><LockOpenIcon/></Avatar>
          <h2> Signin</h2>
        </Grid>
        <TextField variant="standard" label='Username' placeholder='Enter user Name' fullWidth required/>
        <TextField variant="standard" label='Password' type='password' placeholder='Enter Password' fullWidth required/>
        <FormControlLabel control={<Checkbox />} label="I Agree" />
        <Button type='submit' variant="outlined" size="large" fullWidth>Submit</Button>
      </Paper>
    </Grid>:null
    }
    </Fragment>
  );
}
