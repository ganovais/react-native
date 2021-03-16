import { v4 as uuid } from 'uuid';
import { api } from '../../server';
import { Request, Response } from 'express';

interface Person {
    id: string;
    name: string;
    email: string;
    password: string;
}

let persons: Person[] = [];

/* Lista todos usuários  */
api.get('/users', (request: Request, response: Response) => {
    return response.json({
        persons      
    })
})

/* Busca por um usuário específico  */
api.get('/users/:id', (request: Request, response: Response) => {
    const id = request.params.id;
    
    const person = persons.find(person => person.id === id)

    return response.json(person)
})

/* Salva um novo usuário  */
api.post('/users', (request: Request, response: Response) => {
    const { name, email, password } = request.body;
    const id = uuid();
    
    persons.push({ id , name, email, password });

    return response.json({
        message: `Usuário criado com sucesso`,     
        user: {
            id,
            name, 
            email
        } 
    })
})

/* Login */
api.post('/login', (request: Request, response: Response) => {
    const { email, password } = request.body;

    /**
     * SELECT *
     *   FROM users u
     *  WHERE u.email = email
     *    AND u.password = password;
     */
    const user = persons.filter(user => user.email == email && user.password == password)[0];
    
    if(!user) {
        return response.status(203).send({
            message: 'Usuário não encontrado.',
            success: false
        })
    }

    return response.json(user);
})
