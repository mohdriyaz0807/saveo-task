import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Input,InputLabel } from '@material-ui/core';
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
    
    const [place,setplace] = React.useState({location:'',lat:'',long:''})
    const [array,setarray] = React.useState([])
    const handlesubmit=()=>{
        setarray(array=>[...array,place])
        console.log(array)
    }

    return (
        <div className='home'>
        <Button variant="contained" >Home</Button>
        <Grid className='container'  container  justify="center"  alignItems="center">
            <Grid item sm={3} md={3} lg={3}>
            <InputLabel htmlFor='standard-basic1'>Place</InputLabel>
        <TextField id="standard-basic1" value={place.location} onChange={e=>setplace({...place,location:e.target.value})}/>
            </Grid>
            <Grid item sm={3} md={3} lg={3}>
            <InputLabel htmlFor='standard-basic2'>Latitude</InputLabel>
        <Input type='number' id="standard-basic2" value={place.lat} onChange={e=>setplace({...place,lat:e.target.value})}/>
            </Grid>
            <Grid item sm={3} md={3} lg={3}>
            <InputLabel htmlFor='standard-basic3' >Longitude</InputLabel>
        <Input type='number' id="standard-basic3" value={place.long} onChange={e=>setplace({...place,long:e.target.value})}/>
            </Grid>
            <Grid item sm={3} md={3} lg={3}>
        <Button variant="contained" color='primary' onClick={handlesubmit}>Add</Button>                
        </Grid>
        </Grid>
        <Grid className='container2' container  justify="center"  alignItems="center">
        <Grid item sm={6} xs={6} lg={6} md={6}>
        <Search setPlaces={array}/>
        </Grid>
        <Grid item sm={6} xs={6} lg={6} md={6}>
        <MapView array={array}/>
        </Grid>
        </Grid>
        </div>
    )
}

export default Home
