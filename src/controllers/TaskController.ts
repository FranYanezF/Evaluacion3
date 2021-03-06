import { Request, Response } from "express"
import { CreateTaskDTO,UpdateTaskDTO, TaskDTO } from "../models/dto/TaskDTO"
import { CreateTaskSchema, UpdateTaskSchema } from "../models/validators/taskSchemas"
import TaskRepository from "../repositories/TaskRepository"
import { UserTokenPayload } from "../models/dto/UserDTO"


export default class TaskController {
    public readonly getAll = async (req: Request , res: Response) => {
        const user = req.user as UserTokenPayload
        const repository = new TaskRepository(parseInt(user.sub))
        const tasks :TaskDTO[] =  await repository.findAll()
        res.json(tasks)
    }

    public readonly getByid = async (req: Request , res: Response) => {
        const {id} = req.params
        const user = req.user as UserTokenPayload
        const repository = new TaskRepository(parseInt(user.sub))
        const tasks =  await repository.findById(parseInt(id))
        res.json(tasks)
    }

    
    public readonly create = async (req: Request , res: Response) => {
        const tasks  = req.body as CreateTaskDTO;
        try{
            await CreateTaskSchema.validateAsync(tasks)
        }
        catch(error){
            res.status(400).json({message : error.message})
        }
        const user = req.user as UserTokenPayload
        const repository = new TaskRepository(parseInt(user.sub))
        const newTask = await repository.create(tasks)
        res.json(newTask)
    }
    

    public readonly update = async(req: Request , res: Response) => {
        const {id} = req.params
        const tasks  = req.body as UpdateTaskDTO;
        try{
            await UpdateTaskSchema.validateAsync(tasks)
        }
        catch(error){
            res.status(400).json({message : error.message})
        }
        const user = req.user as UserTokenPayload
        const repository = new TaskRepository(parseInt(user.sub))
        await repository.update(parseInt(id),tasks)
        res.sendStatus(204)
    }

    public readonly delete = async (req: Request , res: Response) => {
        const {id} = req.params
        const user = req.user as UserTokenPayload
        const repository = new TaskRepository(parseInt(user.sub))
        await repository.delete(parseInt(id))
        res.sendStatus(204)
    }
}