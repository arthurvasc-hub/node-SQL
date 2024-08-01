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
    let page = 0; 
    let skip = page * 2

    const users = prisma.user.findMany({
        skip: skip,
        take: 2
            
        });
    return users;
};

export const getByEmail = async (email: string) => {
    const user = prisma.user.findUnique({
        where: { email },
        select: { id: true, name: true, email: true }
        });
    return user;
};

export const updateUserAdmin = async (email: string) => {
    const updatedUserToAdmin = prisma.user.update({
        where: {
            email: email
        }, 
        data: {
            role: 'ADMIN'
        }
    });
    return updatedUserToAdmin;
};

export const updateUsers = async () => {
    const updatedUsers = prisma.user.updateMany({
        where: {
            email: {
                startsWith: 'testepost'
            }
        }, 
        data: {
            status: false,
        }
    });
    return updatedUsers;
};