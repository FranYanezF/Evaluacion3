import { PrismaClient } from "@prisma/client";
import { CreateTaskDTO, TaskDTO, UpdateTaskDTO } from "../models/dto/TaskDTO";

const prisma = new PrismaClient()

export default class TaskRepository{
    private user_id : number

    constructor(userid : number){
        this.user_id = userid
    }

    public readonly FindAll = async () : Promise<TaskDTO[]> =>{
        const tasks: TaskDTO[] = await prisma.task.findMany({
            where: {
                user_id : this.user_id
            }
        })
        return tasks
    }
    public readonly FindByid = async (id :number): Promise<TaskDTO | undefined> => {
        const tasks: TaskDTO = await prisma.task.findFirst({
            where : {
                id,
                user_id : this.user_id
            }
        })
        if(!tasks) return

        return tasks
    }
    public readonly Create = async (task : CreateTaskDTO): Promise<TaskDTO> =>{
        const newTask = await prisma.task.create({
            data: {...task}
        })
        return newTask
    }
    public readonly Update = async (id : number , task : UpdateTaskDTO): Promise<void> =>{
        await prisma.task.updateMany({
            where : {
                id,
                user_id : this.user_id
            },
            data : task
        })
    }
    public readonly delete = async (id : number) =>{
        await prisma.task.deleteMany({
            where : {
                id,
                user_id : this.user_id
            }
        })
    }

}