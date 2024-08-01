import { Prisma } from "@prisma/client";
import { prisma } from "../libs/prisma"
// TUDO QUE FOR LIDAR COM O USUÁRIO VAI SER CRIADO AQUI! (PRISMA)


// Aqui utilizando o UPSERT, eu tento criar um usuário, se ele ja existir pelo campo email (@unique), eu retorno ele. ( Caso eu queira atualizar algo nele, consigo através do update: { }).
export const createUser = async (data: Prisma.UserCreateInput) =>{
try { 
    return await prisma.user.upsert({
        where: {
            email: data.email
        },
        update: {},
        create: data
    }); 
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

    const users = await prisma.user.findMany({
        skip: skip,
        take: 2
            
        });
    return users;
};

export const getByEmail = async (email: string) => {
    const user = await prisma.user.findUnique({
        where: { email },
        select: { id: true, name: true, email: true }
        });
    return user;
};

export const updateUserAdmin = async (email: string) => {
    const updatedUserToAdmin = await prisma.user.update({
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
    const updatedUsers = await prisma.user.updateMany({
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

    // Deletando um usuário através do e-mail;
export const deleteUserByEmail = async (email: string) => {
    const deletedUser = await prisma.user.delete({
        where: { email }
    })
    return deletedUser
}
