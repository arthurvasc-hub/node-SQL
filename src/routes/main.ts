import { Router } from 'express';
import { createUser, createUsers, deleteUserByEmail, getAllUsers, getByEmail, updateUserAdmin, updateUsers} from '../services/user';
import { error } from 'console';

export const mainRouter = Router();

mainRouter.post('/user', async (req, res) => {
    const user = await createUser({ 
        name: "", email: "",
        posts: { 
            create: { title: "", body: "" }}
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

mainRouter.get('/user', async (req,res) => {
    const result = await getByEmail("testepost@gmail.com")
    res.json({ result })
});

// Transforma um usuário em ADMIN
mainRouter.put('/user', async (req, res) => {
    const result = await updateUserAdmin("arthurvasc2@gmail.com" )
    if(result){
    res.json({ result })
} else {
    res.status(400).json({ error: 'Atualização mal sucedida'})
}
});

// Da UPDATE em vários usuários de acordo com a função updateUsers 
mainRouter.put('/users', async (req, res) => {
    const result = await updateUsers()
    if(result){
    res.status(200).json({ result })
} else {
    res.status(400).json({error: 'Atualização mal sucedida'})
}
})


// Rota para deletar um usuário através do email 
mainRouter.delete('/user', async (req, res) => {
    const result = await deleteUserByEmail('testepost@gmail.com')
    if(result){
        res.status(200).json({ result })
    } else {
        res.status(400).json({error: 'Não existe usuário com esse e-mail para ser deletado.'})
    }
})