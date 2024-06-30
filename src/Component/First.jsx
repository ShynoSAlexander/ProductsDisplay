import React from 'react'
import Typography from '@mui/material/Typography'
const First = (props) => {
  return (
    <div style={{margin:'20px', textAlign:'center'}}>
      <Typography variant="h3">Hello {props.data.name}</Typography>
      <h2>This is the first page of this project </h2>
      {/* <h1>Your age is {props.data.age}</h1> */}
    </div>
  )
}

export default First
