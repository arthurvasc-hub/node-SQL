import { Router } from 'express';
import { createUser, createUsers, getAllUsers} from '../services/user';
import { error } from 'console';

export const mainRouter = Router();

mainRouter.post('/user', async (req, res) => {
    const user = await createUser({ 
        name: "", email: "",
        posts: { 
            create: { 
                title: "", body: "" 
            }}
        });
    if(user) {
        res.status(201).json({user})
    } else {
        res.status(500).json({error: "E-mail ja cadastrado"})
    }
});

mainRouter.post('/users', async (req, res) => {
    const result = await createUsers([
        {name: "", email: ""},
        {name: "", email: ""},
        {name: "", email: ""},
    ])
if(result){
    res.status(201).json({result})
} else {
    res.status(500).json({error})
}});

mainRouter.get('/users', async (req,res)=>{
    const result = await getAllUsers()
    res.json({ result })
});