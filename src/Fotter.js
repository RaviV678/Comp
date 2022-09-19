import * as React from 'react';
import Box from '@mui/material/Box';



export default function Fotter() {
  return (
    <div>
        <Box
      sx={{
        width: '100%',
        height: 200,
        backgroundColor: '#949398FF',
        '&:hover': {
          backgroundColor: '#755139FF',
          opacity: [1, 1, 2]
        },
      }}
      ></Box>
    </div>
       
  );
}
