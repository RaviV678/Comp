import React, { Fragment, useState } from 'react';
import TextField from '@mui/material/TextField';
import { Avatar, Button, Grid, Paper } from '@mui/material';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import {useNavigate} from 'react-router-dom';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';


export default function InputData(){
    const paperStyle={padding:30 , height:'50vh',width:300, margin:'10px auto'}
  const avtarStyle={backgroundColor:'red'}

  const [userName, setUserName] = useState("");
  const [password,setPassword]=useState("")
  
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
     navigate('/MatUi');
  }

    return(
        <Fragment>
             <Grid>
                <Paper elevation={20} style={paperStyle}>
                 <Grid align='center'>
                    <Avatar style={avtarStyle}><LockOpenIcon/></Avatar>
                    <h2> Signin</h2>
                 </Grid>
                <form onSubmit={handleSubmit} >
                <TextField value={userName} variant="standard" label='Email'
                sx={{ bgcolor: '#F5C7B8FF',marginTop:'10px'}} onChange={(e) => setUserName(e.target.value)} fullWidth required  />
                 <TextField value={password} variant="standard" label='Password' type='password'
                 sx={{ bgcolor: '#F5C7B8FF',marginTop:'10px'}}onChange={(e) => setPassword(e.target.value)} fullWidth required/>
               <Button type='submit' variant="outlined" size="large" sx={{ bgcolor: '#F5C7B8FF',marginTop:'15px'}} fullWidth>SignIn</Button>
                </form>
             </Paper>
          </Grid>

    </Fragment>
    );
}