import React from 'react'
import {Button} from '@material-ui/core'

const Search = (props) => {

    return (
        <div className='search'>
        <h2>All Co-Ordinates</h2>
            <table>
                <thead>
                    <th width='47%'>My Coordinates</th>
                    <th width='25%'>Default</th>
                    <th width='25%'>Default</th>
                </thead>
                <tbody>
            <tr>
              {props.setPlaces.length>0 ? 
              <>
              <td>1 - {props.setPlaces[0].location}</td>
              <td>{props.setPlaces[0].lat}</td>
              <td>{props.setPlaces[0].long}</td></> :
              <>
              <td>1------</td>
              <td>------</td>
              <td>------</td></>
                }
            </tr>
            <tr>
            {props.setPlaces.length>1 ? 
              <>
              <td>2 - {props.setPlaces[1].location}</td>
              <td>{props.setPlaces[1].lat}</td>
              <td>{props.setPlaces[1].long}</td></> :
              <>
              <td>2------</td>
              <td>------</td>
              <td>------</td></>
                }
            </tr>
            <tr>
            {props.setPlaces.length>2 ? 
              <>
              <td>3 - {props.setPlaces[2].location}</td>
              <td>{props.setPlaces[2].lat}</td>
              <td>{props.setPlaces[2].long}</td></> :
              <>
              <td>3------</td>
              <td>------</td>
              <td>------</td></>
                }
            </tr>
            <tr>
            {props.setPlaces.length>3 ? 
              <>
              <td>4 - {props.setPlaces[3].location}</td>
              <td>{props.setPlaces[3].lat}</td>
              <td>{props.setPlaces[3].long}</td></> :
              <>
              <td>4------</td>
              <td>------</td>
              <td>------</td></>
                }
            </tr>
            <tr>
            {props.setPlaces.length>4 ? 
              <>
              <td>5 - {props.setPlaces[4].location}</td>
              <td>{props.setPlaces[4].lat}</td>
              <td>{props.setPlaces[4].long}</td></> :
              <>
              <td>5------</td>
              <td>------</td>
              <td>------</td></>
                }
            </tr>
          </tbody>
            </table>
<br/><br/><br/><br/>
            <div style={{alignItems:'center'}}>
            <Button variant="contained" color='secondary'>Show Routes</Button>
            </div>
        </div>
    )
}

export default Search
