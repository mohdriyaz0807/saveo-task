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
              <td>1------</td>
              <td>------</td>
              <td>------</td>
            </tr>
            <tr>
              <td>2------</td>
              <td>------</td>
              <td>------</td>
            </tr>
            <tr>
              <td>3------</td>
              <td>------</td>
              <td>------</td>
            </tr>
            <tr>
              <td>4------</td>
              <td>------</td>
              <td>------</td>
            </tr>
            <tr>
              <td>5------</td>
              <td>------</td>
              <td>------</td>
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
