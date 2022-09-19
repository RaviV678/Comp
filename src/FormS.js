import { TextField,Paper, Button  } from "@mui/material";
import { Container,Box} from "@mui/system";
import {Grid,Avatar} from "@mui/material";
import LockOpenIcon from '@mui/icons-material/LockOpen';



function FormS(){
    const paperStyle={padding:20 , height:'50vh',width:300, margin:'100px auto'}
    const avtarStyle={backgroundColor:'red'}
    return(
        <Container >
            <Paper elevation={10} style={paperStyle}>
            <Box >
            <Grid align='center'>
          <Avatar style={avtarStyle}><LockOpenIcon/></Avatar>
          <h2> Student Data</h2>
        </Grid>
            <form noValidate autoComplete="off" width='70ch' margin='20px auto'>
                <TextField label='First name' variant="filled" color="success"
                sx={{marginTop:'10px'}}fullWidth/>
                <TextField label='Marks'variant="filled" color="success"
                sx={{marginTop:'10px'}}fullWidth/>
                <TextField label='Email'variant="filled" color="success"
                sx={{marginTop:'10px'}}fullWidth/>
                <TextField label='Marks'variant="filled" color="success"
                sx={{marginTop:'10px'}}fullWidth/>
                <Button size="large" sx={{ bgcolor: '#F5C7B8FF',marginTop:'10px'}} fullWidth>submit</Button>
            </form>
            </Box>
            </Paper>
        </Container>
    );
}
export default FormS;