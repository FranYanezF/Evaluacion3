import { PrismaClient } from "@prisma/client";
import { CreateUserDTO, UserDTO } from "../models/dto/UserDTO";

const prisma = new PrismaClient()

export default class UserRepository{

    public readonly findAll = async () : Promise<UserDTO[]> =>{
        const user = await prisma.user.findMany()
        const userWhithoutPass = user.map(user => {
            const {pass, ...userWhithoutPass} = user
            return userWhithoutPass
        })
        return userWhithoutPass
    }
    public readonly findByid = async (id:number): Promise<UserDTO | undefined> => {
        const user = await prisma.user.findUnique({
            where : {
                id,
            }
        })
        if(!user) return

        const {pass, ...userWhithoutPass} = user
        return userWhithoutPass
    }

    public readonly findByEmail = async (email:string): Promise<UserDTO | undefined> => {
        const user = await prisma.user.findUnique({
            where : {
                email,
            }
        })
        if(!user) return
        return user
    }
    public readonly create = async (usuario : CreateUserDTO): Promise<UserDTO> =>{
        const newUser = await prisma.user.create({
            data: {...usuario}
        })
        return newUser
    }

    public readonly delete = async (id : number) =>{
        await prisma.user.delete({
            where : {
                id,
            }
        })
    }

}