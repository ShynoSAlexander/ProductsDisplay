import React, { useState } from 'react'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

const Second = () => {
    var[name,setName] =useState("Shyno")
    const changeName=()=>{
        setName("Home")
        // console.log("Button clicked")
    }
    const changeContact=()=>{
        setName("Contact")
    }
  return (
    <div style={{margin:'20px', textAlign:'center'}}>  
    <Typography variant='h3'>Welcome to {name}</Typography>
    {/* <Button variant="text">Text</Button> */}
    {/* <Button variant="outlined">Outlined</Button> */}
    <Button variant="contained" onClick={changeName}>Home</Button> &nbsp;
    <Button variant="contained" color='secondary' onClick={changeContact}>Contact</Button>
    </div>
  )
}

export default Second
