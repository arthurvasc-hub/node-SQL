import { Router } from 'express';
import { prisma } from '../libs/prisma';
import { createUser, createUsers} from '../services/user';
import { error } from 'console';

export const mainRouter = Router();

mainRouter.get('/ping', (req, res) => {
    res.json({ pong: true });
});

mainRouter.post('/user', async (req, res) => {
    const user = await createUser({
        name: "Mamofi Vasconcelos",
        email: "arthurvasc3@gmail.com",
        
    });
    if(user) {
        res.status(201).json({user})
    } else {
        res.status(500).json({error: "E-mail ja cadastrado"})
    }
});

mainRouter.post('/users', async (req, res) => {
    const result = await createUsers([
        {name: "mamofas", email: "mamofas@gmail.com"},
        {name: "pitchula", email: "pitchula@gmail.com"},
        {name: "pirrica", email: "pirrica@gmail.com"},
    ])
if(result){
    res.status(201).json({result})
} else {
    res.status(500).json({error})
}});