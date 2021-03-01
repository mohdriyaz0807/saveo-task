import React from 'react';

const Form = ({array,setarray}) => {
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
