import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

const getAll = () => {
    const req = axios.get(baseUrl)
    return req.then(res => res.data)
}

const create = newContact => {
    const req = axios.post(baseUrl, newContact)
    return req.then(res => res.data)
}

const deletePerson = id => {
    const req = axios.delete(`${baseUrl}/${id}`)
    return req.then(res => res.data)   
} 

const update = (id, changedPerson) => {
    const req = axios.put(`${baseUrl}/${id}`, changedPerson)
    return req.then(res => res.data)
}

export default { getAll, create, deletePerson, update}