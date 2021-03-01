import React from 'react'

const Search = ({array}) => {

var rows=[]
for(let i=1;i<=5;i++){
  rows.push(<tr>
    <td>{i} ---</td>
    <td>----</td>
    <td>----</td>
  </tr>)
}


return (
        <div className='list'>
        <h4>All Co-Ordinates</h4>
            <table>
                <thead>
                    <th>My Coordinates</th>
                    <th>Default</th>
                    <th>Default</th>
                </thead>
                <tbody>
              { array.map((element,index)=>{
                if (element){
                  rows.shift()
                  return(
                <tr key={index}>
                <td>{index+1} - {element.location}</td>
                <td>{element.lat}</td>
                <td>{element.long}</td></tr>
                  )}
              }) }
              {rows}
          </tbody>
            </table>
<br/><br/><br/><br/>
            <div>
            <button className='btnRoute' >Show Route</button>
            </div>
        </div>
    )
}

export default Search
