import * as React from 'react';
import { Paper , Button } from "@mui/material";
import { DataGrid, renderActionsCell } from "@mui/x-data-grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";

import { TextField} from "@mui/material";
import { Container,Box} from "@mui/system";
import {Grid,Avatar} from "@mui/material";
import LockOpenIcon from '@mui/icons-material/LockOpen';
import Modal from '@mui/material/Modal';
import { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import InputData from './ButtonPopUp/InputData';
// import {Edition} from '@mui/icons-material'


const rows=[
    {
      "id": 1,
      "firstName": "Akroor",
      "lastName": "Dwivedi",
      "email": "Naveen.Banerjee@gmail.com",
      
      "Marks": 90
      
    },
    {
      "id": 2,
      "firstName": "Anunay",
      "lastName": "Iyengar",
      "email": "Chidambaram.Ganaka@gmail.com",
      "Marks": 9
      
    },
    {
      "id": 3,
      "firstName": "Birjesh",
      "lastName": "Guneta",
      "email": "Dron2@gmail.com",
      
      "Marks": 16
      
    },
    {
      "id": 4,
      "firstName": "Anasuya",
      "lastName": "Nayar",
      "email": "Chidambaram.Kakkar27@gmail.com",
      
      "Marks": 19
    },
    {
      "id": 5,
      "firstName": "Jahnu",
      "lastName": "Sethi",
      "email": "Bheeshma62@yahoo.co.in",
      
      "Marks": 82
    },
    {
      "id": 6,
      "firstName": "Yoginder",
      "lastName": "Chaturvedi",
      "email": "Suma.Gupta@hotmail.com",
      
      "Marks": 12
    },
    {
      "id": 7,
      "firstName": "Bilva",
      "lastName": "Talwar",
      "email": "Swara.Chaturvedi@hotmail.com",
      
      "Marks": 41
    },
    {
      "id": 8,
      "firstName": "Bandhul",
      "lastName": "Jha",
      "email": "Chanda_Guha@hotmail.com",
    
      "Marks": 24
    },
    {
      "id": 9,
      "firstName": "Aishani",
      "lastName": "Khanna",
      "email": "Gorakhanatha.Talwar@gmail.com",
    
      "Marks": 18
    },
    {
      "id": 10,
      "firstName": "Aagney",
      "lastName": "Johar",
      "email": "Anshula83@hotmail.com",
      
      "Marks": 70
    }
  ];

  const columns=[
    {
     field:"firstName",
     headerName:"First Name",
     width:200   
    },
    {
        field:"lastName",
        headerName:"Last Name",
        width:200   
    },
    {
        field:"email",
        headerName:"Email Address",
        width:200   
       },
      
       {
        field:"Marks",
        headerName:"Marks",
        width:200  
       },
       {
      field:"Edit",
            renderCell:()=>{
        return(
          <Button>Edit</Button>
        )
      }
    },
    {
      field:"delete",
            renderCell:()=>{
        return(
          <Button variant='Danger'>delete</Button>
        )
      }
    }
  ];
  
  //Fun.
function MatUi(){
  const paperStyle={padding:20 , height:'50vh',width:300, margin:'100px auto'}
  const avtarStyle={backgroundColor:'red'}

  const [open, setOpen] =useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);



  const [opens, setOpens] = React.useState(false);
  const handleOpens = () => setOpens(true);
  const handleCloses = () => setOpens(false);
  
    return(
      <>
      <Box sx={{ minWidth: 100 }}>
      <Card variant="outlined">
      <CardActions>
    
      <Button variant="outlined" size='large' align='center' sx={{ bgcolor: '#F5C7B8FF',marginRight:'80%',marginTop:'10px'}}
      onClick={handleOpen}>
        Add</Button>
        <Button variant="outlined" size='large' align='center' sx={{ bgcolor: '#F5C7B8FF',marginRight:'0%',marginTop:'10px'}}
      onClick={handleOpens}>
        Login</Button>
       
      </CardActions>
      </Card>
      {/* Modal start */}
     
<Modal
  open={open}
  onClose={handleClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description">

  <Container >
            <Paper elevation={10} style={paperStyle}>
            <Box >
            <Grid align='center'>
          <Avatar style={avtarStyle}><LockOpenIcon/></Avatar>
          <h2>Student Data</h2>
        </Grid>
            <form >
                <TextField label='First name'variant="filled" color="success"sx={{marginTop:'10px'}}
                fullWidth/>
                <TextField label='Last name'variant="filled" color="success"sx={{marginTop:'10px'}}
                fullWidth/>
                <TextField label='Email'variant="filled" color="success"
                sx={{marginTop:'10px'}} fullWidth/>
                <TextField label='Score'variant="filled" color="success"
                sx={{marginTop:'10px'}} fullWidth/>
                <Button size="large" sx={{ bgcolor: '#F5C7B8FF',marginTop:'10px'}}fullWidth>submit</Button>
            </form>
            </Box>
            </Paper>
        </Container> 
</Modal>
{/* modal end */}
<Modal
        open={opens}
        onClose={handleCloses}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box>
         <InputData/>
        </Box>
      </Modal>
{/* Modal for login */}
      
{/* end */}

    </Box>
       <div style={{ height: 500, width: '100%' }}>
       <div style={{ height: 500, width: '100%' }}>
         <DataGrid DataGrid rows={rows} columns={columns}/>
       </div>
       </div>
       </>
    );
}
export default MatUi;
