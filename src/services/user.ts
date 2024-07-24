import { prisma } from "../libs/prisma"

type CreateUserProps = {
    name: string,
    email: string
}

export const createUser = async ({name, email}: CreateUserProps) =>{
const user = await prisma.user.create({
    data:{ name, email }
})
return user;
};