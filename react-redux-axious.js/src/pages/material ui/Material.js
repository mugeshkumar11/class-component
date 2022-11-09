import React from 'react'
import {Button,Input}from "@mui/material"
import {AccountCircleIcon,Battery50Icon} from '@mui/icons-material';

const Material
 = () => {
  return (
    <div>Material
        <Button variant="text">Text</Button>
        <Button color="success" variant="contained">Contained</Button>
        <Button  variant="outlined">Outlined</Button>

        {/* <Input defaultValue="Hello world" inputProps={ariaLabel} />
        <Input placeholder="Placeholder" inputProps={ariaLabel} />
        <Input disabled defaultValue="Disabled" inputProps={ariaLabel} />
         <Input defaultValue="Error" error inputProps={ariaLabel} /> */}
        <AccountCircleIcon color="success"/>
        <Battery50Icon/>
         
    </div>
  )
}

export default Material
