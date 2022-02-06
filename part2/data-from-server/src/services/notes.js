import axios from 'axios'
const baseUrl = 'http://localhost:3001/notes'

const getAll = () => {
    const req =  axios.get(baseUrl)
    return req.then(res => res.data)
}

const create = newNote => {
    const req =  axios.post(baseUrl, newNote)
    return req.then(res => res.data)
}

const update = (id, changeNote) => {
    const req = axios.put(`${baseUrl}/${id}`, changeNote)
    return req.then(res => res.data)
}

export default { getAll, create, update }