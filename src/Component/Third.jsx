import React, { useState } from 'react'
import {TextField,Typography} from '@mui/material';
import Button from '@mui/material/Button'

const Third = (props) => {
    var[input,setInput]=useState()
    var[output,setOutput]=useState()
    const changeInput=(event)=>{
        setInput(event.target.value)
    }
    const changeName=(event)=>{
        setOutput(input)
    }
  return (
    <div style={{textAlign:"center"}}>
      <Typography variant="h3">Hello {output}</Typography>
      <TextField id="outlined-basic"  color='secondary' label="Name" variant="outlined" onChange={changeInput}/><br />&nbsp;&nbsp;<br />
      <Button variant="contained" onClick={changeName}>Submit</Button> &nbsp; 
      {/* <TextField id="filled-basic" label="Address" variant="filled" /><br />&nbsp;&nbsp;
      <TextField id="standard-basic" label="College Name" variant="standard" /> */}
      <Typography variant="h5">  Type anything on the textfield and press enter to display it after hello</Typography>
      <br /><br /><br />
      <Typography variant="h4">Your age is  {props.age}</Typography>

    </div>
  )
}

export default Third
