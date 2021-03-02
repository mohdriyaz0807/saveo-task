import React from 'react';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import mapboxgl from 'mapbox-gl';
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';

mapboxgl.accessToken = 'pk.eyJ1IjoibW9oZHJpeWF6MDgwNyIsImEiOiJja2xyY3FsMXgxbGwxMnZuMW1kaHRnMm9wIn0.x_OHBIdblBJy6B3MaeH5wA';

const Form = ({array,setarray}) => {


    var geocoder = new MapboxGeocoder({
        accessToken: mapboxgl.accessToken, 
        type: 'country,region,place,postcode,locality,neighborhood',
        });
        

        const [place,setplace] = React.useState({location:'',lat:'',long:''})
        const [btn,setbtn] =React.useState('Submit')

        const handlesubmit=()=>{
        if(place.location!==''){
        setarray(array=>[...array,place])
        setplace({location:'',lat:'',long:''})
        setbtn('Submit')
                }

        }

    return (
        <>
        <form >
            <div className='place'>
                <p id='geocoder'></p>
            <label for='basic1'>Place</label>
                <input type='text' id="basic1" placeholder='location' value={place.location} onChange={e=>{setplace({...place,location:e.target.value});setbtn('Add')}}/>
                </div>
            <div className='lat'>
            <label for='basic2'>Latitude</label>
                <input type='number' id="basic2" placeholder='latitude' value={place.lat} onChange={e=>setplace({...place,lat:e.target.value})}/>
                </div>
            <div className='long'>
            <label for='basic3' >Longitude</label>
                <input type='number' id="basic3" placeholder='longitude' value={place.long} onChange={e=>setplace({...place,long:e.target.value})}/>
                </div>
            <button type='button' className='btnSubmit' onClick={handlesubmit}>{btn}</button>                
        </form>
        </>
    )
}

export default Form
