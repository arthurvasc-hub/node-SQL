import { Prisma } from "@prisma/client";
import { prisma } from "../libs/prisma"
// TUDO QUE FOR LIDAR COM O USUÁRIO VAI SER CRIADO AQUI! (PRISMA)

export const createUser = async (data: Prisma.UserCreateInput) =>{
try { 
    return await prisma.user.create({data});
} catch(error){
return false;
}};