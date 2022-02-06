import axios from 'axios'
const baseUrl = 'http://localhost:3001/notes'

const getAll = () => {
    const req =  axios.get(baseUrl)
    const nonExisting = {
        id: 10000,
        content: 'This note is not saved to server',
        date: '2019-05-30T17:30:31.098Z',
        important: true,
      }
    return req.then(res => res.data.concat(nonExisting))
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