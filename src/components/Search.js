import React from 'react'
import './Search.css'

const Search = () => {

const[places,setPlaces]=React.useState([])

    return (
        <div className='search'>
        <h2>All Co-Ordinates</h2>
            <p>My Coordinates</p>
            <table>
                {places.map((ele)=>
                {<tr><td>{ele.location}</td>
                <td>{ele.lat}</td>
                <td>{ele.long}</td></tr>})}
            </table>
        </div>
    )
}

export default Search
