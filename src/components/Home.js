import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Input } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import {Button,Grid} from '@material-ui/core'
import Search from './Search'
import MapView from './Map'
import './Home.css'

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));

const Home = () => {
    const classes = useStyles();
    
    const[location,setlocation]=React.useState('')
    const[latitude,setlatitude]=React.useState('')
    const[longitude,setlongitude]=React.useState('')
    const handlesubmit=(e)=>{

    }

    return (
        <div className='home'>
        <Button variant="contained" style={{position: 'static'}}>Home</Button>
        <Grid  container direction="row"  justify="center"  alignItems="center" spacing={3}>
        <Grid className='container' item lg={12} md={12}>
        <form className={classes.root} noValidate autoComplete="off">
        <TextField id="standard-basic" value={location} onChange={e=>setlocation(e.target.value)}/>
        <Input type='number' id="standard-basic" value={latitude} onChange={e=>setlatitude(e.target.value)}/>
        <Input type='number' id="standard-basic" value={longitude} onChange={e=>setlongitude(e.target.value)}/>
        <Button variant="contained" color='primary' onClick={handlesubmit}>Add</Button>
        </form>
        </Grid>
        <Grid item lg={6} md={6}>
        <Search/>
        </Grid>
        <Grid item lg={6} md={6}>
        <MapView/>
        </Grid>
        </Grid>
        </div>
    )
}

export default Home
