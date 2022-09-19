import { Avatar, Grid, Paper, TextField, Button } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { useState } from "react";

function Contents(){
    
    const paperStyle={padding:'30px 20px',width:300, margin:'20px auto'}
    const headerStyle={Margin:0}
    const avtarStyle={background:'Green'}
    const [errors, setError] = useState({ name: "", email: "" })

    const ONsubmits = (event) => {
        event.preventDefault();
    //     alert('Successfully registered');
    //     let AddFormError = {}
    //   var pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    //     let str = email
    //     let valid = str.match(pattern)
    //     if (!valid) {
    //         AddFormError.email = "Enter valid Email Id  !"
    //     }
    //     setError(AddFormError)
    }
    
    
    return(
        <Grid>
            <Paper elevation={20} style={paperStyle}>
               <Grid align='center'>
                <Avatar style={avtarStyle}><AddIcon/></Avatar>
                <h2 style={headerStyle}>SignUp</h2>
               </Grid>
               <form onSubmit={ONsubmits}>
                    <TextField label='First Name' required fullWidth/>
                    <TextField label='Last Name' required fullWidth/>
                    <TextField label='Email' required fullWidth/>
                    <div className="error">{errors.email}</div>
                    <TextField label='Password' required fullWidth/>
                    <TextField label='Confirm Password' required fullWidth/>
                    <FormControl>
                        <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
                        <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
                        >
                            <FormControlLabel value="female" control={<Radio />} label="Female"required />
                            <FormControlLabel value="male" control={<Radio />} label="Male" required/>
                            <FormControlLabel value="other" control={<Radio />} label="Other"required />
                    
                            </RadioGroup>
                            <Button variant="contained" color="success" fullWidth type="submit">Submit</Button>
                        </FormControl>
               </form>
            </Paper>
        </Grid>
    );

}
export default Contents;