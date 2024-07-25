import { Router } from 'express';
import { prisma } from '../libs/prisma';
import { createUser } from '../services/user';
import { error } from 'console';

export const mainRouter = Router();

mainRouter.get('/ping', (req, res) => {
    res.json({ pong: true });
});

mainRouter.post('/user', async (req, res) => {
    const user = await createUser({
        name: "Mamofi Vasconcelos",
        email: "arthurvasc3@gmail.com" 
    });
    if(user) {
        res.status(201).json({user})
    } else {
        res.status(500).json({error: "E-mail ja cadastrado"})
    }
});