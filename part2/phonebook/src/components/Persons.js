import backend from '../services/persons'

const Persons = ({persons, setPersons, setMessage}) => {
    const handleOnsubmit = person => {
        if(window.confirm(`Delete ${person.name}`)){
            backend
            .deletePerson(person.id)
            .then(
                () => {
                    setPersons(persons.filter(p => p.id !== person.id ))
                    setMessage(
                        {msg:`Deleted '${person.name}'  `, status:true }
                    )
                    setTimeout(() => {
                        setMessage({msg:'', status:true })
                    }, 5000)  
                })
            .catch(( )=> {
                setMessage(
                  {msg:`Sorry enable to delete '${person.name}' `, status:false }
                )
                setTimeout(() => {
                  setMessage({msg:'', status:true })
                }, 5000)   
              })     
        }
    }
    
    return (
        <ul>
            {persons.map((person) =>  
                <li key={person.id}>
                    {person.name} {person.number}
                    <button onClick={() => handleOnsubmit(person)}> delete </button>
                </li>
                )}
        </ ul>
    )
}

export default Persons