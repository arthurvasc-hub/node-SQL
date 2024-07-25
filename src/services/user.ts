import { prisma } from "../libs/prisma"
// TUDO QUE FOR LIDAR COM O USUÁRIO VAI SER CRIADO AQUI! (PRISMA)
type CreateUserProps = {
    name: string,
    email: string
}

export const createUser = async ({name, email}: CreateUserProps) =>{
try { 
    const user = await prisma.user.create({
    data:{ name, email }
});
return user;
} catch(error){
return false;
}};