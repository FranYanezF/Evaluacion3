import { CreateUserSchema } from "../models/validators/taskSchemas"
import { Request, Response } from "express"
import userRepository from "../repositories/UserRepository"
import { CreateUserDTO,UserDTO } from "../models/dto/UserDTO"
import { generateToken } from "../lib/jwt"

export default class AuthController{

    public readonly login = async(req: Request , res: Response) => {
        const credential = req.body
        try{
            await CreateUserSchema.validateAsync(credential)
        }
        catch(err){
            res.status(400).json({message : err.message})
            return
        }

        const repository = new userRepository();
        const userFromDB = await repository.FindByEmail(credential.email)

        if(!userFromDB || userFromDB.pass !== credential.pass){
            res.status(403).json({message : "sin credenciales"})
            return
        }

        const token = generateToken(userFromDB)
        res.json(token)
    }

    public readonly register = async(req: Request , res: Response) => {
        const user  = req.body as CreateUserDTO;
       try{
            await CreateUserSchema.validateAsync(user)
        }
        catch(err){
            res.status(400).json({message : err.message})
        }
        const repository = new userRepository()
        await repository.Create(user)
        res.sendStatus(201)

    }


}