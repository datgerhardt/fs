import React, { useState } from 'react'

const Filter = ({persons}) => {

  const [filter, setFilter] = useState('')
  const [newResultfilter, setNewResultfilter] = useState([])

 const  handFilterChange =(event) => {
    setFilter(event.target.value)
    let arr = persons.map(person => person.name.toLowerCase() + " " + person.number)
    let result = arr.filter(s => s.includes(filter.toLowerCase()))
    setNewResultfilter(result)
  }

    return(
        <div>
            filter show with: <input value={filter} onChange={handFilterChange}/>
            <div>
                <ul> 
                {newResultfilter.map( result => <li key={result}> {result} </li>) } 
                </ul>                
            </div>
        </div>
    )
}

export default Filter;