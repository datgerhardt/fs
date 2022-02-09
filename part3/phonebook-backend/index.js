const express = require('express')
const app = express()

let persons = [
    { 
      "id": 1,
      "name": "Arto Hellas", 
      "number": "040-123456"
    },
    { 
      "id": 2,
      "name": "Ada Lovelace", 
      "number": "39-44-5323523"
    },
    { 
      "id": 3,
      "name": "Dan Abramov", 
      "number": "12-43-234345"
    },
    { 
      "id": 4,
      "name": "Mary Poppendieck", 
      "number": "39-23-6423122"
    }
]

app.get('/', (req, res) => {
    res.send('<h1> Hello, world</h1>')
})

app.get('/api/persons', (req, res) => {
    res.json(persons)
})

app.get('/api/persons/:id', (req, res) => {
    let id = Number(req.params.id)
    let person = persons.find(p => p.id === id)

    if(!person){
      return res.status(404).json({error: 'Not found'})
    }
    res.json(person)
})

app.get('/info', (req, res) => {
  let date = new Date()
    res.send(`<p>Phone has info for ${persons.length} people</p> <p>${date}</p>`)
})

app.delete('/api/persons/:id', (req, res) => {
  let id = Number(req.params.id)
  persons = persons.filter(p => p.id !== id)
  res.status(204).end()
})

app.post('/api/persons', (req, res) => {
  let body = req.body
  if(!body.name && !body.number){
    return res.json({error:'content is missing'})
  } 

  let person = {
    id: generateId(),
    name: body.name,
    number: body.number
  }  
  
  persons.concat(person)
  res.json(person)
})

const generateId = () => {
  let id = Math.ceil(Math.random() * 10000)
  return id
}

app.listen(3001, ()=>{
  console.log('Server is running')
})
