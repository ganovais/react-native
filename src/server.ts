import express from 'express';
import { v4 as uuid } from 'uuid';
import cors from 'cors';

interface Person {
    id: string;
    name: string;
    age: number;
}

const api = express();
api.use(express.json());
api.use(cors());

let persons: Person[] = [];

api.get('/', (request, response) => {
    return response.json({
        persons      
    })
})

api.get('/person/:id', (request, response) => {
    const id = request.params.id;
    
    const person = persons.find(person => person.id === id)

    return response.json(person)
})

api.post('/', (request, response) => {
    const { name, age } = request.body;
    
    persons.push({ id: uuid(), name, age });

    return response.json({
        message: `Hello ${name}`,      
    })
})

api.get('/sobre', (request, response) => {
    return response.json({
        message: "Hello World",      
    })
})

api.listen(3333, () => {
    console.log('🚀 Server started at port 3333!')
})