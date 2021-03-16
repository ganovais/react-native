import { v4 as uuid } from 'uuid';
import { api } from '../../server';
import { Request, Response } from 'express';

interface Gadgets {
    id: string;
    name: string;
    description: string;
    active?: boolean;
}

let gadgets: Gadgets[] = [];

/* Listagem dos aparelhos */
api.get('/gadgets', (request: Request, response: Response) => {
    return response.json({ gadgets });
})


api.get('/gadgets/:id', (request: Request, response: Response) => {
    const id = request.params.id;
    
    const gadget = gadgets.find(gadget => gadget.id === id)

    return response.json(gadget)
})

api.post('/gadgets', (request: Request, response: Response) => {
    const { name, description } = request.body;
    const id = uuid();
    
    gadgets.push({ id , name, description });

    return response.json({
        message: `Aparelho criado com sucesso`,     
        user: {
            id,
            name, 
            description,
        } 
    })
})