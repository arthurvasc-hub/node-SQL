import { Prisma } from "@prisma/client";
import { prisma } from "../libs/prisma"
// TUDO QUE FOR LIDAR COM O USUÁRIO VAI SER CRIADO AQUI! (PRISMA)

export const createUser = async (data: Prisma.UserCreateInput) =>{
try { 
    return await prisma.user.create({data});
} catch(error){
    return false;
}};

export const createUsers = async (users: Prisma.UserCreateInput[]) => {
try {
    return await prisma.user.createMany({
    data: users,
    skipDuplicates: true});
} catch(error){
    return false;
}};

export const getAllUsers = async () => {
    const users = prisma.user.findMany({
        select: {
            id: true,
            name: true,
            email: true,
            status: true,
        }});
    return users;
}