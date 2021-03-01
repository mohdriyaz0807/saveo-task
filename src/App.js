import React,{useState} from 'react';
import Search from './components/Search';
import MapView from './components/Map';
import Form from './components/Form';
import './App.css';


function App() {

  const [array,setarray] = useState([])

    return (
        <div className="app">
        <button className="homeBtn" onClick={()=>{setarray([])}}>Home</button>
        <div className='home'>
        <Form array={array} setarray={setarray}/>
        <div className='searchlist' >
        <Search array={array}/>
        <div className='mapview'>
        <MapView array={array}/>
        </div>
        </div>
        </div>
        </div>
    )
}

export default App;
