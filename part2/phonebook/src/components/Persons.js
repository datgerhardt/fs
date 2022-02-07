import backend from '../services/persons'

const Persons = ({persons, setPersons}) => {
    const handleOnsubmit = person => {
        if(window.confirm(`Delete ${person.name}`)){
            backend
            .deletePerson(person.id)
            .then(
                () => setPersons(persons.filter(p => p.id !== person.id ))
            )
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