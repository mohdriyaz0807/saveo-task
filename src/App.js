import React,{useState,useRef,useEffect } from 'react';
import Search from './components/Search';
import './App.css';
import mapboxgl from 'mapbox-gl';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import MapboxDirections from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions'
import '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions.css'
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';

mapboxgl.accessToken = 'pk.eyJ1IjoibW9oZHJpeWF6MDgwNyIsImEiOiJja2xyY3FsMXgxbGwxMnZuMW1kaHRnMm9wIn0.x_OHBIdblBJy6B3MaeH5wA'

function App() {
  console.log(mapboxgl.accessToken)

  const [lng, setLng] = useState(80.66);
  const [lat, setLat] = useState(15.5);
  const [zoom, setZoom] = useState(5);
  const container = useRef()
  const [array,setarray] = useState([])
  const [direction,setdirections] = useState('')

  useEffect(()=>{
  const map = new mapboxgl.Map({
    container: 'mapview',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [lng, lat],
      zoom: zoom
    });
  var geocoder = new MapboxGeocoder({
      accessToken: mapboxgl.accessToken, 
      mapboxgl: mapboxgl,
      marker:{
        color:'green'
      },
      placeholder:'Type something..',
    });
  document.getElementById('basic1').innerHTML=''
  document.getElementById('basic1').append(geocoder.onAdd(map))

    var directions = new MapboxDirections({
      accessToken: mapboxgl.accessToken,
      unit: 'metric',
      profile: 'mapbox/cycling'
    });
    setdirections(directions)

    map.addControl(new mapboxgl.FullscreenControl())
    map.addControl(new mapboxgl.NavigationControl())
    map.on('move', () => {
      setLng(map.getCenter().lng.toFixed(4));
      setLat(map.getCenter().lat.toFixed(4));
      setZoom(map.getZoom().toFixed(2));
    })

      map.addControl(directions);

      map.on('load', function() {
      map.addSource('single-point', {
            type: 'geojson',
            data: {
              type: 'FeatureCollection',
              features: []
          }
        });

          geocoder.on('result', function(ev) {
            map.getSource('single-point').setData(ev.result.geometry);
            new mapboxgl.Marker() 
            .setLngLat([ev.result.geometry.coordinates[0], ev.result.geometry.coordinates[1]]) 
            .addTo(map); 
            console.log(ev)
            setplace({...place,location:ev.result.text})
            setarray(array=>[...array,{location:ev.result.text,lat:ev.result.geometry.coordinates[1],long:ev.result.geometry.coordinates[0]}])
          });
        });

    return () => map.remove();
  },[])

  const route=()=>{
    console.log(direction)
    array.map((e,i)=>{
      if(i==0){
        direction.setOrigin([e.long, e.lat]); 
      }else if(i==array.length-1){
        direction.setDestination([e.long, e.lat]);  
      }else{
        direction.addWaypoint(i-1, [e.long, e.lat]);
      }
    })
  }

        const [place,setplace] = React.useState({location:'',lat:'',long:''})
        const [btn,setbtn] =React.useState('Submit')

        const handlesubmit=()=>{
        if(array!==''){
        setarray(array=>[...array,place])
        setplace({location:'',lat:'',long:''})
        setbtn('Submit')}
        }

    return (
        <div className="app">
        <button className="homeBtn" onClick={()=>{setarray([])}}>Home</button>
        <div className='home'>

        <form >
            <div className='place'>
            <label for='basic1'>Place</label>
                <div id="basic1" >
                </div>
                </div>
            <div className='lat'>
            <label for='basic2'>Latitude</label>
                <input type='number' id="basic2" placeholder='latitude' value={lat} onChange={e=>setLat(e.target.value)}/>
                </div>
            <div className='long'>
            <label for='basic3' >Longitude</label>
                <input type='number' id="basic3" placeholder='longitude' value={lng} onChange={e=>setLng(e.target.value)}/>
                </div>
            <button type='button' className='btnSubmit' onClick={handlesubmit}>{btn}</button>                
        </form>

        <div className='searchlist' >
        <Search array={array} route={route}/>

        <div className='mapview' >
        <div className="sidebar">
        Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
        </div>
          <div className="map-container" id='mapview' ref={container}/>
        </div>
        </div>
        </div>
        </div>
    )
}

export default App;