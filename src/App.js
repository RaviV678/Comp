import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from '@mui/material';
import MatUi from './MatUi';
import UseriN from './UseriN';
import Cards from './Cards';
import Fotter from './Fotter';
import BttnBox from './ButtonPopUp/InputData';
import FormBtn from './ButtonPopUp/FormBtn';
import InputData from './ButtonPopUp/InputData';
import FormS from './FormS';
import Nav from './Routers/Nav';
import Grids from './Routers/Grids';
import {BrowserRouter,Route,Routes} from "react-router-dom";

import Contents from './Routers/Contents';


function App() {

  return (

    <>
 <BrowserRouter>
 
 <Routes>
     
      <Route path='/' element={<Nav/>}/>
     <Route path='Grids' element={<Grids/>}/>
     <Route path='UseriN' element={<InputData/>}/>
     <Route path='MatUi' element={<MatUi/>}/>
  
  </Routes>

</BrowserRouter> 
 {/* <>
<Contents/>
</>  */}
{/* <Grids/> */}
</>
 
  );
}

export default App;


// {/* <div className="App">
//        {/* <MatUi/> */}
//        {/* <UseriN/> */}
//       {/* <FormBtn/> */}

//       {/* <InputData/> */}

//       //  <Nav/>
//     </div> */}